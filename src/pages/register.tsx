import React from "react";
import NavbarIndex from "../components/NavbarIndex";
import Register from "../views/Register";
import ChakraNextImage from "../components/ChakraNextImage";
import { Flex, Icon } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";

const RegisterPage: React.FC = () => {
    const router = useRouter()
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
                <Icon
                    as={AiOutlineArrowLeft}
                    ml="auto"
                    fontSize="4xl"
                    onClick={() => {
                        router.push("/");
                    }}
                />
            </Flex>
            <Register />
        </>
    );
};

export default RegisterPage;
