import React from 'react';
import { allDoctors } from '../data';
import DoctorsCard from '../components/DoctorsCard';

const DoctorsPage = async () => {
    const doctors = await allDoctors()

    return (
        <div className='grid  md:grid-cols-3 grid-cols-1  gap-4 mt-5'>
            {
                doctors.map((doctor) => <DoctorsCard key={doctor._id} doctor={doctor} />)
            }
        </div>
    );
};

export default DoctorsPage;