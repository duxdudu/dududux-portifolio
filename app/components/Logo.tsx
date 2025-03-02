import Image from "next/image";

export default function Logo(){
 return (
    <div className=" fixed top-0 left-0 z-50 p-2">
        <Image src="/logo.png" alt="logo" width={100} height={100} className=" sm:w-[100px] sm:mt-1 sm:h-[90px] mt-30" />
    </div>
 )
}

