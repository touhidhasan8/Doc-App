"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "@/assets/logo.png";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { authClient } from "../lib/auth-client";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const {
        data: session,
        isPending,
        error,
        refetch,
    } = authClient.useSession();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "All Doctors", path: "/doctors" },
        { name: "Appointments", path: "/appointments" },
        { name: "Contact", path: "/contact" },
        // { name: "Add-Doctors", path: "/add-doctors" },
    ];

    const handleLogout = async () => {
        await authClient.signOut();
        refetch();
    };

    return (
        <>
            <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/">
                        <Image src={logoImage} width={100} height={100} alt="Logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`hover:text-blue-600 transition ${pathname === item.path
                                    ? "text-blue-600 font-semibold"
                                    : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Section */}
                    <div className="hidden md:block">
                        {isPending ? (
                            <Button isDisabled>Loading...</Button>
                        ) : session ? (
                            <div className="flex items-center gap-3">
                                <Link href={'/profile'}>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={session.user?.image || "/default-avatar.png"}
                                            alt={session.user?.name || "User"}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    </div>
                                </Link>

                                <Button
                                    color="danger"
                                    variant="flat"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Link href="/sign-up">
                                <Button className="bg-blue-600 text-white">
                                    Create Account
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden"
                    >
                        <Bars width={28} height={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-50 md:hidden"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute left-0 top-0 w-72 h-full bg-white shadow-lg p-5"
                    >
                        {/* Top Bar */}
                        <div className="flex justify-between items-center mb-8">
                            <Image
                                src={logoImage}
                                width={80}
                                height={80}
                                alt="logo"
                            />

                            <button onClick={() => setOpen(false)}>
                                <Xmark width={28} height={28} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-5 font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setOpen(false)}
                                    className={`hover:text-blue-600 transition ${pathname === item.path
                                        ? "text-blue-600 font-semibold"
                                        : ""
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Auth */}
                        <div className="mt-8">
                            {isPending ? (
                                <Button
                                    className="w-full"
                                    isDisabled
                                >
                                    Loading...
                                </Button>
                            ) : session ? (
                                <div className="space-y-3">
                                    <p className="font-medium">
                                        {session.user?.name}
                                    </p>

                                    <Button
                                        className="w-full"
                                        color="danger"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <Link href="/sign-up">
                                    <Button className="w-full bg-blue-600 text-white">
                                        Create Account
                                    </Button>
                                </Link>
                            )}
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm mt-4">
                                Failed to load session
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;