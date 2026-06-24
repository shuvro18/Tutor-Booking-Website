"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const LRnavLink = ({children, href}) => {
    const pathName = usePathname();
    const isTrue = pathName === href ;

    return (
        <Link href={href} className={`${isTrue ?  "px-4 py-2 rounded-md font-medium text-sm text-white bg-[#002244]" : " text-gray-600 px-4 py-2 text-sm font-medium  transition-colors"}`}>
            {children}
        </Link>
    );
};

export default LRnavLink;