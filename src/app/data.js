export const addDoctor = async (user) => {
    const doctors = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/all-doctor`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }
    );

    const res = await doctors.json();
    return res;
};


export const allDoctors = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/all-doctors`);
    const doctors = await response.json();
    return doctors;
}

export const doctorDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/all-doctors/${id}`)
    const doctor = await res.json()
    return doctor;
}


export const doctorBooking = async (bookData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookData)
    });
    return res.json();
};

export const doctorBookingShow = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments/${userId}`);
    const doctor = await res.json()
    return doctor;

}

export const deleteAppointment = async (bookId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments/${bookId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });

    const text = await res.text();
    return text ? JSON.parse(text) : true;
};