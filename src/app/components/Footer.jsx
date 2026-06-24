import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Logo & Description */}
                    <div>
                        <h1 className="text-3xl font-bold text-blue-500">
                            Doc-App
                        </h1>
                        <p className="text-gray-400 mt-3">
                            Find trusted doctors, book appointments, and
                            manage your healthcare easily from anywhere.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h2>

                        <div className="flex flex-col gap-2 text-gray-400">
                            <Link href="/">Home</Link>
                            <Link href="/doctors">Doctors</Link>
                            <Link href="/appointments">Appointments</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Follow Us
                        </h2>

                        <div className="flex flex-col gap-2 text-gray-400">
                            <Link
                                href="https://www.facebook.com/"
                                target="_blank"
                            >
                                Facebook
                            </Link>

                            <Link
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                Instagram
                            </Link>

                            <Link
                                href="https://www.linkedin.com/"
                                target="_blank"
                            >
                                LinkedIn
                            </Link>

                            <Link
                                href="https://x.com/"
                                target="_blank"
                            >
                                X (Twitter)
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
                    © {new Date().getFullYear()} Doc-App. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;