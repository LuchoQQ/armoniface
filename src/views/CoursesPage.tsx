import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChakraNextImage from "../components/ChakraNextImage";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import CourseCard from "../components/CourseCard";

const CoursesPage: React.FC = () => {

    return (
        <>
            <Flex
                w="100vw"
                id="courses"
                bg="#E9E9E9"
                flexWrap="wrap"
                justifyContent="center"
                p="2rem"
                // align="center"
                flexDir="column"
            >
                <Text
                    fontSize={["2xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
                    fontFamily="secondary"
                    textAlign="center"
                    fontWeight="bold"
                    position="relative"
                    
                    _after={{
                        content: '""',
                        position: "absolute",
                        display: 'flex',
                        justifyContent: 'center',
                        left: "20%",
                        top: "100%",
                        width: "60%",
                        h: "1px",
                        bg: "#202020",
                    }}
                    my={{base: "2rem", md: "0"}}
                >
                    NUESTROS CURSOS
                </Text>
                <Flex gap="5rem" my="3rem" flexWrap='wrap' justifyContent='center'>
                    <CourseCard
                        src="/assets/toxina-botulinica.jpg"
                        alt="toxina"
                        title="Toxina Botulinica"
                        hours={2}
                    />
                    <CourseCard
                        src="/assets/acido-inicial.jpg"
                        alt="Acido"
                        title="Acido Hialuronico Inicial"
                        hours={2.5}
                    />
                    <CourseCard
                        src="/assets/acido-avanzado.jpg"
                        alt="toxina"
                        title="Acido Hialuronico Avanzado"
                        hours={2.5}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default CoursesPage;
