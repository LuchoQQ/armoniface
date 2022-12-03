import {
    Box,
    Flex,
    Heading,
    Text,
    Grid,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Course } from "../../types";
import AccordionSection from "../components/AccordionSection";
import Container from "../components/Container";
import MediaPlayer from "../components/MediaPlayer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../utils/API";

type Selected = {
    url: string;
    title: string;
};
const Courses: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { data: session, status }: any = useSession();
    const [myCourses, setMyCourses] = useState([]);
    const [selected, setSelected] = useState<Selected>({
        url: "",
        title: "",
    });
    useEffect(() => {
        if (status == "authenticated") {
            const myCourses = API.getMyCoursesByUserId(session.user?.id).then(
                (res: any) => {
                    setMyCourses(res.data);
                }
            );
        }
    }, [status]);
    const filterCoursesByTopic = (courses: Course[], topic: string) => {
        return courses.filter((course) => {
            return course.topic === topic;
        });
    };
    const toxina = filterCoursesByTopic(myCourses, "toxina botulinica");
    const acidoInicial = filterCoursesByTopic(
        myCourses,
        "acido hialuronico inicial"
    );
    const acidoAvanzado = filterCoursesByTopic(
        myCourses,
        "acido hialuronico avanzado"
    );
    return (
        <>
            <Navbar />
            <Flex w="100%" h="100vh" bg="#f1f2f3">
                <Sidebar open={open} setOpen={setOpen} />
                <Container open={open} setOpen={setOpen}>
                    <Flex
                        align="center"
                        w="100%"
                        h="100%"
                        gap="6"
                        flexDirection={{ base: "column", sm: "row" }}
                    >
                        <Flex flexDirection="column" align="center" ml="10">
                            <Flex
                                bgColor="white"
                                gap="12"
                                maxW="300px"
                                align="center"
                                zIndex="0"
                                borderRadius="lg"
                                flexDirection="column"
                            >
                                <Accordion allowToggle>
                                    <AccordionSection
                                        topic="Acido Botulinico"
                                        courses={toxina}
                                        setSelected={setSelected}
                                    />
                                    <AccordionSection
                                        topic="Acido Hialuronico Inicial"
                                        courses={acidoInicial}
                                        setSelected={setSelected}
                                    />
                                    <AccordionSection
                                        topic="Acido Hialuronico Avanzado"
                                        courses={acidoAvanzado}
                                        setSelected={setSelected}
                                    />
                                </Accordion>
                            </Flex>
                        </Flex>
                        <Flex
                            flexDirection="column"
                            align="center"
                            w={{ base: "", sm: "70%" }}
                        >
                            <Flex
                                flexDirection="column"
                                p="6"
                                zIndex="2"
                                borderRadius="lg"
                                align="center"
                                justify="center"
                                w={{ base: "", sm: "70%" }}
                            >
                                <Flex flexDir="column">
                                    <MediaPlayer
                                        url={selected.url}
                                        title={selected.title}
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </>
    );
};

export default Courses;
