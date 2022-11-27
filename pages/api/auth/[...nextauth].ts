import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                    noseee: string;
                };

                const user = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users/auth`, {
                    email,
                    password,
                }).then((res) => res.data);

                if (user.status === 'ok') {
                    return user;
                } else {
                    return null;
                }

                /* if (!email || !password) {
                    throw new Error("Missing email or password");
                }

                if (email === "admin@admin.com" && password === "123456") {
                    return { email: "si"}
                } else {
                    return null
                }
                 */
            }
        })

    ],
    pages: {
        signIn: "/",

    }
}

export default NextAuth(authOptions);