"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { deleteAppointment } from "../data";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

const DeleteModal = ({ doctor }) => {
    const router = useRouter()
    const handleDelete = async () => {
        
        const { data } = await authClient.token()

        const res = await deleteAppointment(doctor._id, data?.token);
        if (res) {
            toast.error("Appointment Deleted")
            router.refresh();
        }
        if (!res) {
            toast.error("Appointment Delete Failed")
        }


    };
    return (
        <AlertDialog>
            {/* Open Button */}
            <Button variant="danger">
                <TrashBin /> Cancel
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Are You Sure
                            </AlertDialog.Heading>
                        </AlertDialog.Header>



                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Not Now
                            </Button>

                            <Button
                                slot="close"
                                variant="danger"
                                onClick={handleDelete}
                            >
                                Appointment Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteModal;