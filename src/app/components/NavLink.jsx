"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, className }) => {
    const pathname = usePathname()
    const isActive = href === pathname
    return (
        <Link href={href} className={`${isActive ? "text-blue-500" : ""} `}>{children}</Link>
    );
};

export default NavLink;



//
// ${className} Eta NavLink Ke jodi kno Style deya lagle tahole Porps akare Pahtiya tarpor style Korte Hoi 