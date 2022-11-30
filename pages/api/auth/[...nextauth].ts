import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
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
                };

                const user = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users/auth`, {
                    email,
                    password,
                }).then((res) => res.data);

                if (user.status === 'ok') {
                    console.log(user)
                    return {
                        name: user.name,
                        email: user.email,
                        image: user.avatar

                    };
                } else {
                    return null;
                }

            }
        }),
    ],
    pages: {
        signIn: "/",

    },

    secret: process.env.NEXT_AUTH_SECRET,

}

export default NextAuth(authOptions);