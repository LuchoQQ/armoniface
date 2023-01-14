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
            <Flex
                w="100vw"
                h="80px"
                display={{ base: "none", md: "flex" }}
                bg="#f1f2f3"
                // justifyContent="flex-end"
                alignItems="center"
                px="5rem"
                gap="2rem"
                boxShadow="lg"
                position="fixed"
                zIndex={100}
                fontSize="xl"
            >
                <ChakraNextImage
                    src="/assets/logo.webp"
                    h="50px"
                    w="100px"
                    alt="logo"
                    mr="10"
                />
                <Icon as={AiOutlineArrowLeft} ml="auto" fontSize="4xl" onClick={() => {
                    router.push('/')
                }}/>
            </Flex>
            <Login />
        </>
    );
};

export default LoginPage;
