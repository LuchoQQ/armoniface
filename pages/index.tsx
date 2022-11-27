import { Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { getSession, signIn, useSession, signOut } from "next-auth/react";
import HomeSignIn from "../views/HomeSignIn";

const Home: NextPage = (props) => {
    const [width, setWidth] = useState(0);
    const { data: session, status } = useSession();

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const theme = useTheme();

    console.log(session, status);
    if (session) {
        return (
            <>
                <HomeSignIn />
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
