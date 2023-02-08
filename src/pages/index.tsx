import {
    Box,
    Button,
    Flex,
    Grid,
    chakra,
    shouldForwardProp,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { keyframes, useTheme } from "@emotion/react";
import NavbarIndex from "../components/NavbarIndex";
import IndexPage from "../views/IndexPage";
import AboutPage from "../views/AboutPage";
import CoursesPage from "../views/CoursesPage";

import { isValidMotionProp, motion } from "framer-motion";
import ContactUsPage from "../views/ContactUsPage";
import Router, { useRouter } from "next/router";
const Home: NextPage = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const router = useRouter();
    
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        router.push('/login')
    }, []);


    return (
        <>
            <Grid justifyContent="center" overflow="hidden">
                <NavbarIndex />
                <IndexPage />
                <AboutPage />
                <CoursesPage />
                <ContactUsPage />
            </Grid>
        </>
    );
};

export async function getServerSideProps() {
    const session = await getSession();
    return {
        props: {
            session,
        },
    };
}

export default Home;
