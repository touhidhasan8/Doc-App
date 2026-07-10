"use client";

import { Envelope, Gear, Sliders } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Slider, Surface, TextField } from "@heroui/react";
import { updateUser } from "../data";

export function ProfileModal({ user }) {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        const updateOne = await updateUser(data._id)
        return updateOne;
    }
    return (
        <Modal>
            <Button variant="primary">Edit Profile <Sliders /> </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="  sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Sliders className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading >Edit Profile </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField defaultValue={user?.name} className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField defaultValue={user?.email} className="w-full" name="email" type="email" variant="secondary">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField defaultValue={user?.image} className="w-full" name="image" type="text" variant="secondary">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your image URL" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Send Message</Button>
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