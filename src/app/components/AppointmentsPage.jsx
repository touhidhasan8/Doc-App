"use client";

import Image from "next/image";
import React from "react";
import DeleteModal from "./DeleteModal";


const AppointmentsPage = ({ doctor }) => {

    const appointmentDate = new Date(doctor.appointmentDateTime);

    return (
        <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 mt-5">

            {/* Doctor Image */}
            <div className="flex justify-center md:justify-start">
                <Image
                    className="rounded-2xl object-cover w-full md:w-[220px] h-[220px]"
                    src={doctor.doctorImage}
                    width={220}
                    height={220}
                    alt={doctor.doctorName}
                />
            </div>

            {/* Doctor Details */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {doctor.doctorName}
                        </h1>

                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm w-fit">
                            ৳ {doctor.fee}
                        </span>
                    </div>

                    <p className="text-lg text-blue-600 font-medium mt-1">
                        {doctor.specialty}
                    </p>

                    <div className="mt-4">
                        <p className="text-sm text-gray-500 font-semibold">
                            Hospital
                        </p>
                        <p className="text-gray-700">
                            {doctor.hospital}
                        </p>
                    </div>

                    <div className="mt-4 bg-gray-50 rounded-xl p-3">
                        <p className="text-sm text-gray-500 font-medium">
                            Appointment Schedule
                        </p>

                        <p className="text-gray-700 font-semibold">
                            📅 {appointmentDate.toLocaleDateString()}
                        </p>

                        <p className="text-gray-700 font-semibold">
                            ⏰ {appointmentDate.toLocaleTimeString()}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-5 mt-4">
                    <DeleteModal doctor={doctor} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;