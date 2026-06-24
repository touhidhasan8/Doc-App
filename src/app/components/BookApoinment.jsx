"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { doctorBooking } from "../data";
import toast from "react-hot-toast";

const BookAppointment = ({ doctorData }) => {

    const { name, fee, image, specialty, _id, id, hospital } = doctorData;
    const doctorId = _id || id;

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const booking = Object.fromEntries(formData.entries());


        const { date, time } = booking;

        if (!date) {
            toast.error("Please select date ");
            return;
        }
        else if (!time) {
            toast.error("please Select Time")
            return;
        }

        const appointmentDateTime = new Date(
            `${booking.date} ${booking.time}`
        );

        const bookData = {
            name: user?.name,
            email: user?.email,
            userId: user?.id,
            userImage: user?.image,
            doctorId,
            doctorName: name,
            fee,
            doctorImage: image,
            specialty,
            appointmentDateTime,
            time: booking.time,
            hospital,
        };
        console.log("Booking Data:", bookData);
        const bookingDoctorData = await doctorBooking(bookData)
        if (bookingDoctorData) {
            toast.success("Booking Success")
        }
        else {
            toast.error("Booking Failed")
        }


    };
    return (
        <Modal>
            <Modal.Trigger>
                <Button variant="primary">Book Appointment</Button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>Book Appointment</Modal.Heading>

                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we&apos;ll get back to you.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField
                                        className="w-full" name="date" type="date" variant="secondary"
                                        required
                                    >
                                        <Label>Appointment Date</Label>
                                        <Input />
                                    </TextField>

                                    <TextField
                                        className="w-full" name="time" type="time" variant="secondary"
                                        required
                                    >
                                        <Label>Appointment Time</Label>
                                        <Input />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button type="submit">  Book Appointment </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookAppointment;