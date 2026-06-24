export default function ContactPage() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-500 mt-3">
                    Have questions? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-white shadow-md rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold mb-6">
                        Get In Touch
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <h3 className="font-medium">Address</h3>
                            <p className="text-gray-500">
                                Bogura, Bangladesh
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-gray-500">
                                support@example.com
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">Phone</h3>
                            <p className="text-gray-500">
                                +880 1234-567890
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">Working Hours</h3>
                            <p className="text-gray-500">
                                Sat - Thu: 9:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white shadow-md rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold mb-6">
                        Send Message
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Write your message..."
                                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}