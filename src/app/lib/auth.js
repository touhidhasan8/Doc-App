import { betterAuth} from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("Doc-App");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    session: {
        cookieCache: true,
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    plugins: [
        jwt()
    ],
    database: mongodbAdapter(db, {
        
        client
    }),
});