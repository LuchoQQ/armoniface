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
const Home: NextPage = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);
    const theme: any = useTheme();
    const animationKeyframes = keyframes`
    0% { transform: scale(1) rotate(0); border-radius: 20%;  x: '500px'}
    100% { transform: scale(1) rotate(360deg); border-radius: 20%; x: '0px' }
  `;
    const animation = `${animationKeyframes} 90s linear infinite`;
    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and non-Chakra props to be forwarded.
         */
        shouldForwardProp: (prop) =>
            isValidMotionProp(prop) || shouldForwardProp(prop),
    });


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
