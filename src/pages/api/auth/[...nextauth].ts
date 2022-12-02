import axios from 'axios';
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from 'next-auth/react';
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
            async authorize(credentials: any, req: any) {
                const { email, password } = credentials as any

                const user = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/users/auth`, {
                    email,
                    password,
                }).then((res) => res.data);
                // const user = {
                //     status: "ok",
                //     email: "geybitch@gmail.com",
                //     password: "password",
                // }
                if (user.status === 'ok') {

                    return user
                }
                return null

            }
        }),
    ],
    pages: {
        signIn: "/",

    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            return session
        },
    },
    secret: process.env.NEXT_AUTH_SECRET,

}

export default NextAuth(authOptions);