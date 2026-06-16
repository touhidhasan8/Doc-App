"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "@/assets/logo.png";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "All Doctors", path: "/doctors" },
        { name: "Appointments", path: "/appointments" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            {/* NAVBAR */}
            <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                    {/* LOGO */}
                    <Link href="/">
                        <Image src={logoImage} width={100} height={100} alt="Logo" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex gap-8 font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`hover:text-blue-600 transition ${pathname === item.path ? "text-blue-600 font-semibold" : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* BUTTON */}
                    <div className="hidden md:block">
                        <Link href="/sign-up">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                Create Account
                            </Button>
                        </Link>
                    </div>

                    {/* MOBILE ICON */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden"
                    >
                        <Bars width={28} height={28} />
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-50 md:hidden"
                >
                    {/* SIDE MENU */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute left-0 top-0 w-72 h-full bg-white shadow-lg p-5 animate-slideIn"
                    >
                        {/* TOP BAR */}
                        <div className="flex justify-between items-center mb-8">
                            <Image src={logoImage} width={80} height={80} alt="logo" />
                            <button onClick={() => setOpen(false)}>
                                <Xmark width={28} height={28} />
                            </button>
                        </div>

                        {/* MENU */}
                        <div className="flex flex-col gap-5 font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setOpen(false)}
                                    className={`hover:text-blue-600 transition ${pathname === item.path ? "text-blue-600 font-semibold" : ""
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <div className="mt-8">
                            <Link href="/sign-up">
                                <Button className="w-full bg-blue-600 text-white">
                                    Create Account
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;