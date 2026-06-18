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

