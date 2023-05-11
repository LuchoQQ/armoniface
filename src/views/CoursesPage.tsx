import { Flex, Text } from "@chakra-ui/react";
import React from "react";
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
                        alt="Toxina Botulínica"
                        title="Toxina Botulínica"
                        hours={2}
                        description="Aprendé todo sobre la toxina botulínica"
                    />
                    <CourseCard
                        src="/assets/acido-inicial.jpeg"
                        alt="Ácido Hialurónico Inicial"
                        title="Ácido Hialurónico Inicial"
                        hours={3}
                        description="Aprendé todo sobre el ácido hialurónico"
                    />
                    <CourseCard
                        src="/assets/acido-avanzado.jpeg"
                        alt="Ácido Hialurónico Avanzado"
                        title="Ácido Hialurónico Avanzado"
                        hours={3.5}
                        description="Aprendé todo sobre el ácido hialurónico"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default CoursesPage;
