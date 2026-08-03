"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function AppointmentEdit() {
    return (
        <Modal>
            <Modal.Trigger>
                <Button variant="primary"> <BiEdit /> Edit </Button>
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
                                Fill out the form below and we&apos;ll get back to you.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">

                                    <TextField
                                        className="w-full" name="date" type="date" variant="secondary"
                                        required
                                    >
                                        <Label>New Appointment Date</Label>
                                        <Input />
                                    </TextField>

                                    <TextField
                                        className="w-full" name="time" type="time" variant="secondary"
                                        required
                                    >
                                        <Label>New Appointment Time</Label>
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
}