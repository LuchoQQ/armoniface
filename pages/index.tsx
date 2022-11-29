import { Box, Button, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { getSession, signIn, useSession, signOut } from "next-auth/react";
import HomeSignIn from "../views/HomeSignIn";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IndexLayout from "../views/IndexLayout";
const Home: NextPage = (props) => {
    const [width, setWidth] = useState(0);
    const { data: session, status } = useSession();

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const theme: any = useTheme();
    const [open, setOpen] = useState(false);

    console.log(session, status);
    if (session) {
        return (
            <>
                <Navbar />
                <Flex w="100vw">
                    <Sidebar open={open} setOpen={setOpen} />
                    {/* <IndexLayout /> */}
                    <Container open={open} setOpen={setOpen}>
                        <Flex w="100%" h="20vh" bg={theme.colors.secondary}>
                            {/* <Text
                                fontFamily={theme.fonts.tertiary}
                                color="#f1f2f3"
                                ml="20%"
                            >
                                Bienvenido
                            </Text> */}
                        </Flex>
                        <Flex
                            w="100%"
                            h="100%"
                            justifyContent="center"
                            position="relative"
                            top="-10vh"
                        >
                            <Flex minW="80%" h="10rem" bg="#fff" rounded="20px">
                                <Flex px="4rem" gap="1rem">
                                    <Image
                                        alignSelf="center"
                                        src="/profile.svg"
                                        h="60%"
                                        rounded="50%"
                                    />
                                    <Text
                                        fontFamily={theme.fonts.tertiary}
                                        alignSelf="center"
                                        fontSize="xl"
                                    >
                                        ¡Bienvenido{" "}
                                        {session?.user?.name?.split(" ")[0]}!
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Container>
                </Flex>
            </>
        );
    }

    return (
        <>
            <HomeSignIn />
        </>
    );
};

export default Home;
