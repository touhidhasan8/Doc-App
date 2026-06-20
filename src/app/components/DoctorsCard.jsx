import { Chip, Card } from "@heroui/react";
import Image from "next/image";

import Link from "next/link";


const DoctorsCard = ({ doctor }) => {
    return (
        <div className="w-full max-w-sm mx-auto border rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden bg-white">

            {/* Image */}
            <Image
                src={doctor.image}
                alt={doctor.name}
                width={450}
                height={250}
                className="w-full h-52 object-cover"
            />

            {/* Content */}
            <Card>
                {/* Top chips */}
                <div className="flex justify-between p-3">
                    <Chip color="success">
                        {doctor.specialty}
                    </Chip>
                    <Chip color="success">
                        {doctor.experience} Years +
                    </Chip>
                </div>

                <Card.Header>
                    <div className="flex justify-between items-center">
                        <Card.Title className="text-xl font-bold">
                            {doctor.name}
                        </Card.Title>

                        <h1 className="text-xl font-bold">
                            {doctor.fee} ৳
                        </h1>
                    </div>

                    {/* ⭐ Rating Section */}
                    <div className="flex items-center gap-1 mt-2 text-yellow-500">
                        <span className="text-gray-600 text-sm ml-2">
                            {doctor.rating}/5
                        </span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star}>
                                {doctor.rating >= star ? "★" : "☆"}
                            </span>
                        ))}
                    </div>

                    <Card.Description className="mt-2">
                        {doctor.description}
                    </Card.Description>
                </Card.Header>

                <Card.Footer>
                    <Link
                        href={`/doctor-details/${doctor._id}`}
                        rel="noopener noreferrer"

                    >
                        View Details

                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default DoctorsCard;