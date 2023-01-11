import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Icon,
    List,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import Container from "../components/Container";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useTheme } from "@emotion/react";
import ChakraNextImage from "../components/ChakraNextImage";
import NavbarIndex from "../components/NavbarIndex";
import AboutIcon from "../components/AboutIcon";
import IndexPage from "../views/IndexPage";
import AboutPage from "../views/AboutPage";
import CoursesPage from "../views/CoursesPage";
const Home: NextPage = () => {
    //   const [width, setWidth] = useState(0);
    //   const [height, setHeight] = useState(0);
    //   const { data: session, status } = useSession();
    //   useEffect(() => {
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    //   }, []);
    //   const [open, setOpen] = useState(false);
    const theme: any = useTheme();

    return (
        <Box backgroundImage='/assets/bg3.png' backgroundSize='cover'>
            {/* <ChakraNextImage
                src="/assets/bg3.png"
                w="100vw"
                h="100%"
                alt="logo"
                fit="cover"
                position="absolute"
                left="0"
            /> */}
            <NavbarIndex />
            <IndexPage />
            <AboutPage />
            <CoursesPage />
        </Box>
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
