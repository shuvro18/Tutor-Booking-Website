"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({children, href}) => {
    const pathName = usePathname();
    const isTrue = pathName === href ;

    return (
        <Link href={href} className={`${isTrue ? "relative text-sm font-semibold text-[#003366] md:py-1 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-0.5 md:after:w-full md:after:bg-[#003366]" : "text-sm font-medium text-gray-600 hover:text-[#003366]"}`}>
            {children}
        </Link>
    );
};

export default NavLink;