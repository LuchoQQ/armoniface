import React from "react";
import Login from "../views/Login";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const LoginPage: React.FC = () => {
    const { data: session, status }: any = useSession();
    const router = useRouter();
    if (status == "authenticated") {
        router.push("/campus");
    }

    return (
        <>
            <Login />
        </>
    );
};

export default LoginPage;
