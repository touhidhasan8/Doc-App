import React from "react";
import { Star } from "@gravity-ui/icons";
import { topRatedDoctors } from "../data";
import TopDoctorsCard from "./TopDoctorsCard";

const TopDoctors = async () => {
    const topRatedDoctorsList = await topRatedDoctors();

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        
            <div className="mb-8 md:mb-12 text-center">
                <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
                    <Star className="size-5 sm:size-6 text-yellow-500" />
                    Top Rated Doctors
                    <Star className="size-5 sm:size-6 text-yellow-500" />
                </h1>

                <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-500">
                    Simply browse through our extensive list of trusted doctors.
                </p>
            </div>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {topRatedDoctorsList.map((topDoctor) => (
                    <TopDoctorsCard
                        key={topDoctor._id}
                        topDoctor={topDoctor}
                    />
                ))}
            </div>

        </section>
    );
};

export default TopDoctors;