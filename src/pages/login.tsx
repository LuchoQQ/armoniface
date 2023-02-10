import React, { useEffect } from "react";
import NavbarIndex from "../components/NavbarIndex";
import Login from "../views/Login";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Flex, Icon } from "@chakra-ui/react";
import ChakraNextImage from "../components/ChakraNextImage";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
