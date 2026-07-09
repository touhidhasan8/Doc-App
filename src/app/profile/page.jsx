
import { headers } from "next/headers";
import { auth } from "../lib/auth";

const ProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session.user)
    return (
        <div>
            <h1>{session.user.name}</h1>
        </div>
    );
};

export default ProfilePage;