"use client";

import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import React from "react";
import { addDoctor } from "../data";
import toast from "react-hot-toast";

const AddDoctors = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        console.log(user);

        const result = await addDoctor(user);
        if (result) {
            toast.success("Destination added successfully!");
        } else {
            toast.error("Failed to add destination!");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl border border-gray-200 p-6 md:p-10">

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                    Add New Doctor
                </h2>

                <Form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={onSubmit}>

                    <TextField isRequired name="name" className="col-span-1 md:col-span-2">
                        <Label>Doctor Name</Label>
                        <Input className="border rounded-lg p-2" placeholder="Dr. Ayesha Rahman" />
                    </TextField>

                    <TextField isRequired name="specialty">
                        <Label>Specialty</Label>
                        <Input className="border rounded-lg p-2" placeholder="Cardiologist" />
                    </TextField>

                    <TextField isRequired name="experience">
                        <Label>Experience</Label>
                        <Input className="border rounded-lg p-2" placeholder="10 years" />
                    </TextField>

                    <TextField isRequired name="image" className="col-span-1 md:col-span-2">
                        <Label> Doctors Image URL</Label>
                        <Input className="border rounded-lg p-2" placeholder="https://example.com/image.jpg" />
                    </TextField>

                    <TextField isRequired name="availability" className="col-span-1 md:col-span-2">
                        <Label>Availability</Label>
                        <Input className="border rounded-lg p-2"
                            placeholder="09:00 AM - 12:00 PM, 04:00 PM - 07:00 PM"
                        />
                        <Description>
                            Separate multiple time slots with comma (,)
                        </Description>
                    </TextField>

                    <TextField isRequired name="hospital">
                        <Label>Hospital</Label>
                        <Input className="border rounded-lg p-2" placeholder="Labaid Cardiac Hospital" />
                    </TextField>

                    <TextField isRequired name="location">
                        <Label>Location</Label>
                        <Input className="border rounded-lg p-2" placeholder="Dhanmondi, Dhaka" />
                    </TextField>

                    <TextField isRequired name="fee">
                        <Label>Fee</Label>
                        <Input type="number" className="border rounded-lg p-2" placeholder="800" />
                    </TextField>

                    <TextField isRequired name="description" className="col-span-1 md:col-span-2">
                        <Label>Description</Label>
                        <TextArea
                            name="description"
                            aria-label="Doctor description"
                            className="w-full"
                            placeholder="Doctors Descriptions..."
                        />
                    </TextField>

                    {/* Button */}
                    <div className="col-span-1 md:col-span-2">
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                        >
                            <Check />
                            Add Doctor
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddDoctors;