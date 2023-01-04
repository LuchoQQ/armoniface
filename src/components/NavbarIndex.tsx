import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

import ChakraNextImage from "./ChakraNextImage";

const NavbarIndex: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Flex
                w="100%"
                h="80px"
                display={{base: "none", md: "flex"}}
                bg="#f1f2f3"
                justifyContent="flex-end"
                alignItems="center"
                px="5rem"
                gap="2rem"
                boxShadow="lg"
                position='fixed'
                zIndex={100}
            >
                <ChakraNextImage src="/assets/logo.webp" h="50px"
                    w="100px" alt="logo" />
                <Text
                    fontSize="xl"
                    mr="auto"
                    ml="4rem"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Inicio
                </Text>
                <Text
                    fontSize="xl"
                    onClick={() => {
                        router.push("/login");
                    }}
                >
                    Acceder
                </Text>
                <Flex
                    px="1rem"
                    py=".5rem"
                    bg="primary"
                    rounded="20px"
                    onClick={() => {
                        router.push("/register");
                    }}
                >
                    <Text fontSize="xl" color="#f1f2f3">
                        Registrarse
                    </Text>
                </Flex>
            </Flex>
        </>
    );
};

export default NavbarIndex;
