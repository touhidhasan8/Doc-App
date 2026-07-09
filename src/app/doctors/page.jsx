import { auth } from "../lib/auth";
import { allDoctors } from '../data';
import Search from '../components/Search';
import { headers } from "next/headers";


const DoctorsPage = async () => {
   
    const doctors = await allDoctors()

    return (
        <div>
            <div>
                <Search doctors={doctors} />
            </div>
            
        </div>
    );
};

export default DoctorsPage;

