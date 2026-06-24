import { headers } from 'next/headers';
import { doctorBookingShow } from '../data';
import { auth } from '../lib/auth';
import AppointmentsPage from '../components/AppointmentsPage';
import NoAppointment from '../components/NoAppointment';



const AppointmentPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const data = session?.user

    const doctorData = await doctorBookingShow(data.id)
    console.log(doctorData);

    return (
        <div>
            <div>
                {(!doctorData || doctorData.length === 0) ?
                    (<NoAppointment />) :
                    (doctorData.map((doctor) => (
                        <AppointmentsPage
                            key={doctor._id}
                            doctor={doctor}
                        />
                    ))
                    )}
            </div>
        </div>
    );
};

export default AppointmentPage;