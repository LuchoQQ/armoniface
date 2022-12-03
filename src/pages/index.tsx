import { Box, Button, Flex, Grid, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { getSession, signIn, useSession, signOut } from "next-auth/react";
import HomeSignIn from "../views/HomeSignIn";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IndexLayout from "../views/IndexLayout";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

type Props = {
    user: {
        name: string,
        email: string,
        image: string,
    },
    expires: string,
}

const Home: NextPage<Props> = (props) => {
    const [width, setWidth] = useState(0);
    const { data: session, status } = useSession();
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    const [open, setOpen] = useState(false);

    if (session) {
        return (
            <>
                <Navbar />
                <Flex w="100vw" h="100vh">
                    <Sidebar open={open} setOpen={setOpen} />
                    {/* <IndexLayout /> */}
                    <Container open={open} setOpen={setOpen}>
                        <Flex flexDirection="column" align="center">
                            <Flex bgColor="tertiary" w="100%" h="120px" align="center" justify="center" zIndex="0">
                            <Heading as="h1" size="md" fontWeight="extrabold" color="white" mb="6">Inicio</Heading> 
                            </Flex>
                            <Flex mt="-6" w="90%" h="10rem" bgColor="white" zIndex="2" borderRadius="md" align="center" justify="center">
                                <Heading as="h2" size="xl" fontWeight="extrabold" color="#000">Welcome back, {session?.user?.name}! You fucking piece of shit</Heading>
                            </Flex>
                            <Flex mt="8">
                                <Grid templateColumns="repeat(4, 1fr)" gap={8} mt="6">
                                    <Box w="250px" h="10rem" bgColor="white" borderRadius="md" p="6">
                                        <Heading as="h3" size="md" fontWeight="extrabold" color="#000">Your Profile</Heading>
                                        <Text mt="2">Name: {session?.user?.name}</Text>
                                    </Box>
                                    <Box w="250px" h="10rem" bgColor="white" borderRadius="md" p="6">
                                        <Heading as="h3" size="md" fontWeight="extrabold" color="#000">Your Profile</Heading>
                                        <Text mt="2">Name: {session?.user?.name}</Text>
                                    </Box>
                                    <Box w="250px" h="10rem" bgColor="white" borderRadius="md" p="6">
                                        <Heading as="h3" size="md" fontWeight="extrabold" color="#000">Your Profile</Heading>
                                        <Text mt="2">Name: {session?.user?.name}</Text>
                                    </Box>
                                    <Box w="250px" h="10rem" bgColor="white" borderRadius="md" p="6">
                                        <Heading as="h3" size="md" fontWeight="extrabold" color="#000">Your Profile</Heading>
                                        <Text mt="2">Name: {session?.user?.name}</Text>
                                    </Box>
                                </Grid>
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

export async function getServerSideProps(context: Props) {
    const session = await getSession();
    return {
        props: {
            session,
        },
    };
}

export default Home;
