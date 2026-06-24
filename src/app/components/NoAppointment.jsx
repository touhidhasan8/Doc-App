const NoAppointment = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center p-8 rounded-2xl border bg-white shadow-sm max-w-md w-full">

                {/* Icon */}
                <div className="text-5xl mb-4">📅</div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800">
                    No Appointments Found
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 mt-2">
                    You don’t have any appointments right now.
                    Book your first appointment to get started.
                </p>
            </div>
        </div>
    );
};

export default NoAppointment;