"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import banner1 from "@/assets/banner-1.webp";
import banner3 from "@/assets/banner-3.jpg";
import banner4 from "@/assets/banner-4.jpg";
import banner5 from "@/assets/banner-5.webp";
import Link from "next/link";

const images = [banner4, banner3, banner5, banner1];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-125 mt-5 rounded-lg overflow-hidden">
            {/* SLIDER IMAGE */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[current]}
                        alt={`Banner ${current + 1}`}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                </motion.div>
            </AnimatePresence>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* TEXT CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white z-10">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Find Your Best Doctor
                </h1>
                <p className="mt-3 text-lg md:text-xl text-gray-200">
                    Book appointment easily & get healthcare anytime
                </p>
           
                <Link href={'/doctors'} className="mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"> Get Started</Link>
            </div>

            {/* DOTS */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-6" : "bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}