"use client"
import React, { useState } from 'react';
import DoctorsCard from './DoctorsCard';

const Search = ({ doctors }) => {
 
    const [search, setSearch] = useState('')
    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLocaleLowerCase()) ||
        doctor.hospital.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    return (

        <div className='mt-5'>
            <div className='flex justify-center'>
                <input
                    type="text"
                    placeholder="Search doctor..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-75 mb-5"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {filteredDoctors.map((doctor) => (
                    <DoctorsCard key={doctor._id} doctor={doctor} />
                ))}
            </div>
        </div>

    );
};

export default Search;