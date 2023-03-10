import {
    Box,
    Divider,
    Flex,
    Grid,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import ChakraCarousel from "../components/ChakraCarousel";

const AboutPage: React.FC = () => {
    
    return (
        <>
            <Flex
                w="100vw"
                bg="#fff"
                p="2rem"
                id="about"
                flexDir="column"
                justifyContent='center'
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
                    my={{base: "2rem", lg: "0"}}
                    // mb='3rem'
                >
                    SOBRE NOSOTROS
                </Text>
                <Flex
                    w="100%"
                    alignItems="center"
                    flexDir={["column", "column", "column", "row", "row"]}                    
                >
                    <Flex
                        w={["100%", "100%", "100%", "50%", "50%"]}
                        h="100%"
                        p={{lg: "5rem"}}
                        px={{base: "8"}}
                        pr={{md: "", "2xl": "0"}}
                        justifyContent="center"
                        alignItems="center"
                        mt={{base: "6", md: "0"}}
                    >                        
                        <Box
                            w={[
                                "400px",
                                "400px",
                                "500px",                                
                            ]}
                        >
                            <ChakraCarousel />
                        </Box>
                    </Flex>
                    <Flex
                        w={["100%", "100%", "100%", "50%", "50%"]}
                        p={{lg: "5rem"}}
                        pl={{md: "", "2xl": "0"}}
                        flexDir="column"
                        fontFamily="primary"
                        justifyContent="center"
                        alignItems="center"
                        mt={{base: "6", lg: "0"}}
                    >
                        <Flex
                            flexDir="column"
                            maxW={["600px"]}
                            fontSize={["md"]}
                            px={["0rem", "0rem", "0rem", "0rem", "0rem"]}
                        >
                            <Text
                                mb="1rem"
                                fontWeight="bold"
                                textAlign="center"
                                fontSize="3xl"
                            >
                                ¿Quienes somos?
                            </Text>
                            <Text textAlign="center">
                                &nbsp;Somos María Inés Manzanares y María
                                Angélica Macoratti, fuimos compañeras en la
                                Facultad de Odontología de la UNNE, donde
                                también surgió una buena amistad, culminamos la
                                carrera juntas y nos recibimos el mismo día en
                                diciembre del 2013. Tenemos una excelente
                                relación tanto laboral como humana, esto hizo
                                que podamos formarnos juntas en el mundo de la
                                Armonización Orofacial.
                            </Text>
                            <Text
                                mt="3rem"
                                mb="1rem"
                                fontWeight="bold"
                                fontSize="3xl"
                                textAlign="center"
                            >
                                ¿Qué es Armoniface?
                            </Text>
                            <Text textAlign="center">
                                &nbsp;Es un espacio de trabajo dirigidos por
                                ambas profesionales especializadas en Brasil en
                                la rama de la Armonización Orofacial, donde
                                brindamos nuestros conocimientos y experiencias
                                a colegas odontólogos y médicos que tengan
                                interés en esta nueva rama que crece
                                exponencialmente.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </>
    );
};

export default AboutPage;
