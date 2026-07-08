import { auth } from "../lib/auth";
import { allDoctors } from '../data';
import Search from '../components/Search';
import { headers } from "next/headers";

const DoctorsPage = async () => {
    const token = await auth.api.getToken({
        headers: await headers(),
    });
    const doctors = await allDoctors(token)

    return (
        <div>
            <Search doctors={doctors} />
        </div>
    );
};

export default DoctorsPage;

