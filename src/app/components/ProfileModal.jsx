"use client";
import { useRouter } from "next/navigation";
import { Gear } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

const ProfileModal = ({ user }) => {
     const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URI}/profile/${user.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await res.json();

            console.log(result);

            if (res.ok) {
               toast.success("Profile Was Updated Successfully")
                router.refresh();
            } else {
                toast.error(result.message || "Something went wrong")
            }
        } catch (error) {
            toast.error(result.message || "Something went wrong")

        }
    };


    console.log(user)
    console.log(user.id)
    

    return (
        <Modal>
            <Button variant="secondary">
                <Gear className="size-5" />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-[95vw] max-w-md rounded-xl">
                        <Modal.CloseTrigger />

                        <form onSubmit={onSubmit} >
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Gear className="size-5" />
                                </Modal.Icon>

                                <Modal.Heading>Update Your Profile</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-4 sm:p-6">
                                <Surface variant="default" className="rounded-lg p-4">
                                    <div className="flex flex-col gap-4">
                                        <TextField
                                            className="w-full"
                                            name="name"
                                            type="text"
                                            variant="secondary"
                                            defaultValue={user?.name}
                                        >
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>

                                        <TextField
                                            className="w-full"
                                            name="email"
                                            type="email"
                                            variant="secondary"
                                            defaultValue={user?.email}
                                        >
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>

                                        <TextField
                                            className="w-full"
                                            name="image"
                                            type="text"
                                            variant="secondary"
                                            defaultValue={user?.image}
                                        >
                                            <Label>Image URL</Label>
                                            <Input placeholder="Enter your image URL" />
                                        </TextField>
                                    </div>
                                </Surface>
                            </Modal.Body>

                            <Modal.Footer className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                                <Button
                                    slot="close"
                                    variant="secondary"
                                    className="w-full sm:w-auto"
                                    type="button"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto"
                                    slot="close"
                                >
                                    Update Profile
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default ProfileModal;