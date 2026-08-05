"use client";

import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

export function AppointmentEdit({ doctor }) {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const updateData = {
                appointmentDateTime: new Date(`${data.date}T${data.time}`),
                time: data.time,
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URI}/appointments/${doctor._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateData),
                }
            );

            const result = await res.json();
       

            if (result) {
                toast.success("Appointment Updated Successfully");
                router.refresh()
            } else {
                toast.error("Appointment was not updated");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Modal>
            <Modal.Trigger>
                <Button variant="primary">
                    <BiEdit /> Edit
                </Button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>Edit Appointment</Modal.Heading>

                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Update your appointment date and time.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField
                                        className="w-full"
                                        name="date"
                                        type="date"
                                        variant="secondary"
                                        required
                                    >
                                        <Label>New Appointment Date</Label>
                                        <Input />
                                    </TextField>

                                    <TextField
                                        className="w-full"
                                        name="time"
                                        type="time"
                                        variant="secondary"
                                        required
                                    >
                                        <Label>New Appointment Time</Label>
                                        <Input />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button type="submit">
                                            Update Appointment
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}