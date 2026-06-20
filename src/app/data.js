export const addDoctor = async (user) => {
    const doctors = await fetch("http://localhost:5000/all-doctor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const res = await doctors.json()
    return res;

}


export const allDoctors = async () => {
    const response = await fetch("http://localhost:5000/all-doctors");
    const doctors = await response.json();
    // console.log(doctors);
    return doctors;
}

export const doctorDetails = async (id) => {
    const res = await fetch(`http://localhost:5000/all-doctors/${id}`)
    const doctor = await res.json()
    return doctor;
}


export const doctorBooking = async (bookData) => {
    const res = await fetch('http://localhost:5000/appointments', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookData)
    });
    return res.json();
};