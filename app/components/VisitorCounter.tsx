"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Lock } from "lucide-react";
import React from "react";

type PlatformInfo = {
  os: string;
  browser: string;
  device: string;
  location?: {
    city?: string;
    country?: string;
  };
};

type VisitorData = {
  timestamp: number;
  platform: PlatformInfo;
  userInfo?: { name: string; email: string };
};

const AUTHORIZED_EMAILS = ["duxforreally@gmail.com", "dudufredu@gmail.com"];

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null);
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [visitorData, setVisitorData] = useState<VisitorData[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const componentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
      if (AUTHORIZED_EMAILS.includes(parsedUserInfo.email)) {
        setIsAdmin(true);
      }
    }

    const storedData = localStorage.getItem('portfolioVisitorData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setVisitorData(parsedData.visitors || []);
      setVisitorCount(parsedData.totalCount || 0);
    } else {
      const initialData = {
        visitors: [],
        totalCount: Math.floor(Math.random() * 100) + 50,
        lastUpdated: Date.now()
      };
      localStorage.setItem('portfolioVisitorData', JSON.stringify(initialData));
      setVisitorCount(initialData.totalCount);
    }
  }, []);

  useEffect(() => {
    const detectPlatform = async () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      
      let os = "Unknown OS";
      if (userAgent.includes("win")) os = "Windows";
      else if (userAgent.includes("mac")) os = "MacOS";
      else if (userAgent.includes("linux")) os = "Linux";
      else if (userAgent.includes("android")) os = "Android";
      else if (userAgent.includes("ios")) os = "iOS";

      let browser = "Unknown Browser";
      if (userAgent.includes("chrome")) browser = "Chrome";
      else if (userAgent.includes("firefox")) browser = "Firefox";
      else if (userAgent.includes("safari")) browser = "Safari";
      else if (userAgent.includes("edge")) browser = "Edge";
      else if (userAgent.includes("opera")) browser = "Opera";

      let device = "Desktop";
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        device = "Tablet";
      } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        device = "Mobile";
      }

      return { os, browser, device };
    };

    detectPlatform().then(platformData => {
      setPlatformInfo(platformData);

      const storedData = localStorage.getItem('portfolioVisitorData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const newCount = parsedData.totalCount + 1;
        
        const newVisitor = {
          timestamp: Date.now(),
          platform: platformData,
          userInfo: null
        };

        const updatedData = {
          totalCount: newCount,
          visitors: [...parsedData.visitors, newVisitor],
          lastUpdated: Date.now()
        };

        localStorage.setItem('portfolioVisitorData', JSON.stringify(updatedData));
        setVisitorCount(newCount);
        setVisitorData(updatedData.visitors);
      }
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setShowForm(false);
        setShowDashboard(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 100;
      setIsVisible(currentScrollY < lastScrollY || !currentScrollY || isAtBottom);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserInfo = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };
    
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    setUserInfo(newUserInfo);
    setShowForm(false);

    if (AUTHORIZED_EMAILS.includes(newUserInfo.email)) {
      setIsAdmin(true);
      setShowDashboard(true);

      const newVisitorData: VisitorData = {
        timestamp: Date.now(),
        platform: platformInfo!,
        userInfo: newUserInfo
      };

      const storedData = localStorage.getItem('portfolioVisitorData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const updatedData = {
          ...parsedData,
          visitors: [...parsedData.visitors, newVisitorData]
        };
        localStorage.setItem('portfolioVisitorData', JSON.stringify(updatedData));
        setVisitorData(updatedData.visitors);
      }
    }
  };

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-2 mb-2">
        <Users className="w-5 h-5 text-blue-500" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {visitorCount.toLocaleString()} visitors
        </span>
      </div>

      {!userInfo && !showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="text-blue-500 hover:text-blue-600 text-sm font-medium"
        >
          🙋‍♂️Tell Dux you are here👈
        </button>
      ) : null}

      {showForm ? (
        <form onSubmit={handleSubmit} className="mt-2 space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-3 py-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-3 py-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
          <button
            type="submit"
            className="w-full px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      ) : null}

      {userInfo ? (
        <div className="mt-2 text-sm">
          <p className="text-gray-700 dark:text-gray-300">Welcome, {userInfo.name}!</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">{userInfo.email}</p>
          {isAdmin && !showDashboard && (
            <button
              onClick={() => setShowDashboard(true)}
              className="mt-2 text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              Access Dashboard
            </button>
          )}
        </div>
      ) : null}

      {showDashboard && (
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Admin Dashboard</h3>
            <button
              onClick={() => setShowDashboard(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close dashboard"
            >
              ×
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <p>Total Visitors: {visitorCount}</p>
              <p>Unique Users: {visitorData.filter(visitor => visitor.userInfo?.email).length}</p>
              <p>Registered Emails: {visitorData.filter(visitor => visitor.userInfo?.email).map(visitor => visitor.userInfo?.email).join(', ')}</p>
            </div>
            <div className="max-h-40 overflow-y-auto">
              {visitorData.map((visitor, index) => (
                <div key={index} className="text-xs p-2 bg-gray-50 dark:bg-gray-700 rounded mb-2">
                  <p className="font-medium">{visitor.userInfo?.name || 'Anonymous'}</p>
                  {visitor.userInfo?.email && (
                    <p className="text-gray-500">{visitor.userInfo.email}</p>
                  )}
                  <p className="text-gray-400">
                    {new Date(visitor.timestamp).toLocaleString()}
                  </p>
                  <p className="text-gray-400">
                    {visitor.platform.device} • {visitor.platform.os} • {visitor.platform.browser}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}