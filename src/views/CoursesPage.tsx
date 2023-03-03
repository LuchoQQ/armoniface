import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChakraNextImage from "../components/ChakraNextImage";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";

const CourseCard: React.FC<any> = ({ src, alt, title, hours }) => {
    return (
        <>
            <Flex
                flexDir="column"
                bg="#fff"
                maxH="600px"
                maxW="300px"
                transition="all .2s ease"
                _hover={{
                    transform: "scale(1.1)",
                    boxShadow: "5px 5px 10px 0px #606060",
                }}
            >
                <ChakraNextImage
                    src={src}
                    w="300px"
                    h="300px"
                    alt={alt}
                    fit="cover"
                />
                <Flex p="1rem" flexDir="column" gap="1rem">
                    <Text fontFamily="primary" fontSize="13px" color="#606060">
                        {title}
                    </Text>
                    <Text
                        fontFamily="primary"
                        fontSize="sm"
                        fontWeight="bold"
                        w="100%"
                        mb="3rem"
                    >
                        Excepteur ut ad consequat labore.Et voluptate amet
                        dolore veniam irure mollit.
                    </Text>
                    <Flex justifyContent="space-between">
                        <Flex gap=".5rem">
                            <Icon
                                as={FaPhotoVideo}
                                fontSize="2xl"
                                fill="secondary"
                            />
                            <Text fontFamily="secondary">2 Clases</Text>
                        </Flex>
                        <Flex gap=".5rem">
                            <Icon
                                as={AiOutlineClockCircle}
                                fontSize="2xl"
                                fill="secondary"
                            />
                            <Text fontFamily="secondary">{hours} Horas</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

const CoursesPage: React.FC = () => {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    return (
        <>
            <Flex
                w={width}
                id="courses"
                bg="#E9E9E9"
                flexWrap="wrap"
                justifyContent="center"
                p="2rem"
                alignContent="center"
                flexDir="column"
            >
                <Text
                    fontSize={["2xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
                    fontFamily="secondary"
                    textAlign="center"
                    fontWeight="bold"
                    position="relative"
                    mb='5rem'
                    _before={{
                        content: '""',
                        position: "absolute",
                        left: "0",
                        top: "100%",
                        width: "100%",
                        h: "2px",
                        bg: "#202020",
                    }}
                >
                    NUESTROS CURSOS
                </Text>
                <Flex gap="5rem" mt="3rem" flexWrap='wrap' justifyContent='center'>
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
