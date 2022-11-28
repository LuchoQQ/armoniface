import { Box, Button, Flex, Grid, Icon, Text } from "@chakra-ui/react";
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

    console.log(session, status);
    if (session) {
        return <></>;
    }

    return (
        <>
            {/* <HomeSignIn /> */}

            <Navbar />
            <Flex>
                <Sidebar />
                <IndexLayout />
            </Flex>
        </>
    );
};

export default Home;
