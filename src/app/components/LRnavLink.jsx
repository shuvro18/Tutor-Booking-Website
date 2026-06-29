"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const LRnavLink = ({children, href}) => {
    const pathName = usePathname();
    const isTrue = pathName === href ;

    return (
        <Link href={href} className={`hover:border-b-2  hover:border-[#002244] hover:rounded-md  hover:py-1 ${isTrue ?  "px-2 md:px-4 py-2 rounded-md font-medium text-sm text-white bg-[#002244]" : " text-gray-600 md:px-4 py-2 text-sm font-medium  transition-colors"}`}>
            {children}
        </Link>
    );
};

export default LRnavLink;