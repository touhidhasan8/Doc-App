import { headers } from "next/headers";
import { auth } from "../lib/auth";
import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import { ProfileModal } from "../components/ProfileModal";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    return (
        <section className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-10">
            <Card className="w-full max-w-md overflow-hidden rounded-3xl border border-default-200 bg-background shadow-xl">

                <div className="h-28 bg-gradient-to-r from-primary via-violet-500 to-pink-500" />


                <div className="-mt-14 flex flex-col items-center px-6 pb-8">
                    <div className="rounded-full border-4 border-background bg-background shadow-lg">
                        <Image
                            src={user?.image || "/default-avatar.png"}
                            alt={user?.name || "User"}
                            width={120}
                            height={120}
                            className="h-28 w-28 rounded-full object-cover"
                        />
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-foreground">
                        {user?.name}
                    </h2>

                    <p className="mt-1 text-center text-sm text-default-500">
                        {user?.email}
                    </p>

                    <Chip
                        color="success"
                        variant="flat"
                        className="mt-4 px-3 font-medium"
                    >
                        Active Account
                    </Chip>

                    <div className="mt-8 grid w-full gap-4 rounded-2xl bg-default-100 p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-default-500">Full Name</span>
                            <span className="font-semibold">{user?.name}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-default-500">Email : </span>
                            <span className="truncate font-semibold">
                                {user?.email}
                            </span>
                        </div>
                    </div>

                    <div className=" w-full">
                        <ProfileModal user={user} />
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default ProfilePage;