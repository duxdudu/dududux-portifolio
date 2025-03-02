"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('access_key', '1c599605-c36b-4e8d-a238-afee50a6d848');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >

<div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Hexagon Grid */}
              <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M50 0 L85 20 L85 60 L50 80 L15 60 L15 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              {/* Connecting Lines */}
              <line x1="50" y1="10" x2="50" y2="0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="85" y1="30" x2="85" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="85" y1="70" x2="85" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="50" y1="90" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="15" y1="70" x2="15" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="15" y1="30" x2="15" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              {/* Center Elements */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.5" />
              {/* Decorative Dots */}
              <circle cx="85" cy="30" r="2" fill="currentColor" opacity="0.7" />
              <circle cx="85" cy="70" r="2" fill="currentColor" opacity="0.7" />
              <circle cx="15" cy="30" r="2" fill="currentColor" opacity="0.7" />
              <circle cx="15" cy="70" r="2" fill="currentColor" opacity="0.7" />
              <circle cx="50" cy="10" r="2" fill="currentColor" opacity="0.7" />
              <circle cx="50" cy="90" r="2" fill="currentColor" opacity="0.7" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">
                My Contacts & Address  
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:musmanzafar53@gmail.com"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  dudufredu@gmail.com
                </a>
                <a
                  href="tel:+923055356766"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <IconBrandWhatsapp className="w-6 h-6 mr-3 text-blue-600" />
                  +250786885185
                </a>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  Musanze-Kigali-Rwanda
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
               <motion.h3 className=" sm:text-3xl text-sm font-semibold mb-6 dark:text-white"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               >🤖let's discuss to Your Project through Email indeed🤝</motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    FullName
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md">
                  Message sent successfully!
                </div>
              )}
            </form>
          </motion.div>
        </div>
        
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96  -mb-32 -mr-32 opacity-20 ">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
          className="rounded-b-full bg-blue-800"
        />
      </div>
    </section>
  );
}
