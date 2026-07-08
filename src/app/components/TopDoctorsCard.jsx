import { Card, Chip, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TopDoctorsCard = ({ topDoctor }) => {
    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

           
            <Image
                src={topDoctor.image}
                alt={topDoctor.name}
                width={450}
                height={250}
                className="h-52 w-full object-cover"
            />

           
            <Card shadow="none" radius="none" className="bg-transparent">
               
                <div className="flex items-center justify-between gap-2 p-4">
                    <Chip color="success" variant="flat">
                        {topDoctor.specialty}
                    </Chip>

                    <Chip color="primary" variant="flat">
                        {topDoctor.experience} Years+
                    </Chip>
                </div>

                <Card.Header className="flex flex-col items-start px-4 pt-0">
                    <div className="flex w-full items-center justify-between">
                        <Card.Title className="text-xl font-bold">
                            {topDoctor.name}
                        </Card.Title>

                        <h1 className="text-xl font-bold text-primary">
                            {topDoctor.fee} ৳
                        </h1>
                    </div>

                  
                    <div className="mt-3 flex items-center gap-2">
                        <div className="text-yellow-500 text-lg">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>
                                    {topDoctor.rating >= star ? "★" : "☆"}
                                </span>
                            ))}
                        </div>

                        <span className="text-sm text-gray-500">
                            ({topDoctor.rating}/5)
                        </span>
                    </div>

                    <Card.Description className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {topDoctor.description}
                    </Card.Description>
                </Card.Header>

                <Card.Footer>
                    <Link
                        href={`/doctor-details/${topDoctor._id}`}
                        rel="noopener noreferrer"
                    >
                        View Details

                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TopDoctorsCard;