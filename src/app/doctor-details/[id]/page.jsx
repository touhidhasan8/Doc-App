import { doctorDetails } from "@/app/data";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import BookAppointment from "@/app/components/BookApoinment";
import Link from "next/link";
import { ArrowLeftFromLine } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const DoctorDetails = async ({ params }) => {
    const { id } = await params;
    const doctorData = await doctorDetails(id);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <Button>
                <div className="flex  items-center gap-2">
                    <h1 ><ArrowLeftFromLine /></h1>
                    <Link href='/doctors'>  Go Back </Link>
                </div>
            </Button>
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Doctor&apos;s Details
                </h1>
                <p className="text-gray-500 mt-3 max-w-3xl mx-auto">
                    {doctorData.description}
                </p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Doctor Image */}
                    <div className="flex justify-center">
                        <Image
                            src={doctorData.image}
                            width={300}
                            height={300}
                            alt={doctorData.name}
                            className="rounded-2xl object-cover w-full max-w-[300px] h-[320px]"
                        />
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Dr. {doctorData.name}
                        </h2>

                        <p className="text-cyan-600 font-medium mt-2">
                            {doctorData.specialty}
                        </p>

                        <div className="flex items-center gap-2 mt-4 text-yellow-500">
                            <FaStar />
                            <span>
                                {doctorData.rating || "4.8"} Rating
                            </span>
                        </div>

                        <hr className="my-5" />


                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <MdWorkOutline className="text-xl text-cyan-600" />
                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Experience
                                    </p>
                                    <p className="font-medium">
                                        {doctorData.experience} Years+
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <IoLocationOutline className="text-xl text-cyan-600" />
                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Hospital
                                    </p>
                                    <p className="font-medium">
                                        {doctorData.hospital}
                                    </p>
                                </div>
                            </div>



                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <p className="font-semibold">
                                    Consultation Fee
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                                    <div>
                                        <p className="font-bold text-cyan-600">
                                            ৳ {doctorData.fee}
                                            <span className="text-gray-500 font-medium">
                                                (incl.vat)
                                            </span>
                                        </p>
                                        <p>Per consultation</p>
                                    </div>

                                    <BookAppointment doctorData={doctorData} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;