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

const Courses: React.FC = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <Navbar />
      <Flex w="100%" bg="#f1f2f3" h="100vh" overflow="hidden">
        <Sidebar open={open} setOpen={setOpen} />
        <Container open={open} setOpen={setOpen}>
          <Flex
            align="center"
            w="100%"
            margin="auto"
            gap={{base: 12, lg: "12"}}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Flex flexDirection="column" align="center" mx="10">
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
                    topic="Ácido Botulínico"
                    courses={toxina}
                    setUrl={setUrl}
                  />
                  <AccordionSection
                    topic="Ácido Hialurónico Inicial"
                    courses={acidoInicial}
                    setUrl={setUrl}
                  />
                  <AccordionSection
                    topic="Ácido Hialurónico Avanzado"
                    courses={acidoAvanzado}
                    setUrl={setUrl}
                  />
                </Accordion>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              align="center"
              // w={{ base: "", sm: "70%" }}
            >
              <Flex
                flexDir="column"
                bg="white"
                w={{ md: "450px", lg: "600px", xl: "800px", "2xl": "1300px" }}
                h={{ md: "350px", lg: "450px", xl: "500px", "2xl": "800px" }}
                borderRadius="xl"
                mr="2"
              >
                <MediaPlayer url={url.url} title={url.title} />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Courses;
