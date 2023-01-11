import {
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
import {
    FaBriefcaseMedical,
    FaHandHoldingMedical,
    FaLaptopMedical,
} from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import AboutIcon from "../components/AboutIcon";
import IndexPage from "../views/IndexPage";
import AboutPage from "../views/AboutPage";
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
        <>
            <NavbarIndex />
            <IndexPage />
            <AboutPage />
           
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
