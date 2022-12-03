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
<<<<<<< HEAD
import router from "next/router";
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
import { Course } from "../../types";
import AccordionSection from "../components/AccordionSection";
>>>>>>> b034de4844143679d11d8c802d35c9cc1caeef15
import Container from "../components/Container";
import MediaPlayer from "../components/MediaPlayer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
<<<<<<< HEAD
import API from "../utils/API"
=======
import API from "../utils/API";
>>>>>>> b034de4844143679d11d8c802d35c9cc1caeef15

const Courses: React.FC = () => {
    const [open, setOpen] = useState(false);
<<<<<<< HEAD
    const [myCourses, setMyCourses] = useState([]);
    const { data: session, status } = useSession();
    const { pid } = router.query;

    useEffect(() => {
        if (pid !== undefined) {
            API.getMyCoursesByUserId(pid).then((res: any) => {
                setMyCourses(res.data);
                console.log(res.data);
            });
        }
    }, [pid]);
    
=======
    const { data: session, status }: any = useSession();
    const [myCourses, setMyCourses] = useState([]);
    const [url, setUrl]: any = useState<any>({});
    useEffect(() => {
        if (status == "authenticated") {
            const myCourses = API.getMyCoursesByUserId(session.user?.id).then(
                (res: any) => {
                    setMyCourses(res.data);
                    //console.log((filterCoursesByTopic(res.data, "toxina botulinica")))
                }
            );
        }

        // create a function that filter receive courses and a topic and return the courses that match the topic
    }, [status]);
    const filterCoursesByTopic = (courses: Course[], topic: string) => {
        return courses.filter((course) => {
            //console.log(course.topic);
            //console.log(course);
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
>>>>>>> b034de4844143679d11d8c802d35c9cc1caeef15
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
                                        setUrl={setUrl}
                                    />
                                    <AccordionSection
                                        topic="Acido Hialuronico Inicial"
                                        courses={acidoInicial}
                                        setUrl={setUrl}
                                    />
                                    <AccordionSection
                                        topic="Acido Hialuronico Avanzado"
                                        courses={acidoAvanzado}
                                        setUrl={setUrl}
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
                                <Flex flexDir='column'>
                                    <MediaPlayer url={url.url} title={url.title} />
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
