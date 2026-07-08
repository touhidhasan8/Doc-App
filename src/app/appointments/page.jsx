import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { doctorBookingShow } from "../data";
import { auth } from "../lib/auth";

import AppointmentsPage from "../components/AppointmentsPage";
import NoAppointment from "../components/NoAppointment";

const AppointmentPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    if (!token) {
        redirect("/login");
    }

    let doctorData = [];

    try {
        doctorData = await doctorBookingShow(session.user.id, token);
    } catch (error) {
        console.error("Failed to load appointments:", error);
    }

    return (
        <div>
            {!doctorData || doctorData.length === 0 ? (
                <NoAppointment />
            ) : (
                doctorData.map((doctor) => (
                    <AppointmentsPage
                        key={doctor._id}
                        doctor={doctor}
                    />
                ))
            )}
        </div>
    );
};

export default AppointmentPage;