// export const addDoctor = async (user) => {
//     const doctors = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URI}/all-doctor`,
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(user),
//         }
//     );

//     const res = await doctors.json();
//     return res;
// };


export const allDoctors = async (token) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/all-doctors`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const doctors = await response.json();
    return doctors;
}

export const doctorDetails = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/all-doctors/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    const doctor = await res.json()
    return doctor;
};


export const doctorBooking = async (bookData, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bookData)
    });
    return res.json();
};

export const doctorBookingShow = async (userId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments/${userId}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    const doctor = await res.json()
    return doctor;

}

export const deleteAppointment = async (bookId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments/${bookId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
    });

    const text = await res.text();
    return text ? JSON.parse(text) : true;
};

// Top Rated Doctors Api

export const topRatedDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/top-doctors`);
    const result = await res.json()
    return result
}