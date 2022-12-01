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
    const theme: any = useTheme();
    const [open, setOpen] = useState(false);

    if (session) {
        return (
            <>
                <Navbar />
                <Flex w="100vw">
                    <Sidebar open={open} setOpen={setOpen} />
                    {/* <IndexLayout /> */}
                    <Container open={open} setOpen={setOpen}>
                        <Flex></Flex>
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
