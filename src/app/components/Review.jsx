import { Card, Avatar } from "@heroui/react";
import Image from "next/image";

const reviews = [
    {
        id: 1,
        name: "Sarah Ahmed",
        image: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        review:
            "The doctor was very professional and explained everything clearly. Highly recommended!",
    },
    {
        id: 2,
        name: "John Smith",
        image: "https://i.pravatar.cc/150?img=2",
        rating: 5,
        review:
            "Excellent service! Booking was easy and the consultation was smooth.",
    },
    {
        id: 3,
        name: "Emily Johnson",
        image: "https://i.pravatar.cc/150?img=3",
        rating: 4,
        review:
            "Very friendly staff and experienced doctor. I had a great experience.",
    },
    {
        id: 4,
        name: "Michael Brown",
        image: "https://i.pravatar.cc/150?img=4",
        rating: 5,
        review:
            "Fast appointment process and excellent patient care. Thank you!",
    },
    {
        id: 5,
        name: "Sophia Wilson",
        image: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        review:
            "Clean environment and very supportive medical team. Will visit again.",
    },
    {
        id: 6,
        name: "David Lee",
        image: "https://i.pravatar.cc/150?img=6",
        rating: 4,
        review:
            "The consultation was detailed and helpful. Overall a wonderful experience.",
    },
];

const ClientReviews = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:mt-0 mt-5">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    What Our Clients Say
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Trusted by hundreds of patients for quality healthcare and excellent
                    service.
                </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <Card
                        key={review.id}
                        className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <Image src={review.image} alt={review.name} width={60} height={60} className="rounded-full" />

                            <div>
                                <h3 className="font-semibold text-lg">{review.name}</h3>

                                <div className="text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>
                                            {i < review.rating ? "★" : "☆"}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 text-gray-600 leading-7">
                            "{review.review}"
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ClientReviews;