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
                bg="#fff"
                px={["0rem", "0rem", "5rem", "5rem", "5rem"]}
                py={["2rem", "5rem", "5rem", "0rem", "0rem"]}
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
                    mt={['0rem', '5rem', '5rem','5rem', '5rem']}
                    mb='3rem'
                >
                    SOBRE NOSOTRAS
                </Text>
                <Flex
                    w="100%"
                    alignItems="center"
                    flexDir={["column", "column", "column", "row", "row"]}
                    gap={["5rem", "5rem", "4rem", "4rem", "4rem"]}
                >
                    <Flex
                        w={["100%", "100%", "100%", "50%", "50%"]}
                        h="100%"
                        p={["0rem", "0rem", "5rem", "5rem", "5rem"]}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* <ChakraNextImage src="/client.jpg" fit="contain" /> */}
                        <Box
                            w={[
                                "400px",
                                "400px",
                                "500px",
                                "500px",
                                "500px",
                                "700px",
                            ]}
                        >
                            <ChakraCarousel />
                        </Box>
                    </Flex>
                    <Flex
                        w={["100%", "100%", "100%", "50%", "50%"]}
                        px={["3rem", "3rem", "0rem", "0rem", "0rem"]}
                        flexDir="column"
                        fontFamily="primary"
                    >
                        <Flex
                            flexDir="column"
                            maxW={["600px"]}
                            fontSize={["md"]}
                            px={["0rem", "0rem", "0rem", "0rem", "4rem"]}
                        >
                            <Text
                                mb="1rem"
                                fontWeight="bold"
                                textAlign="center"
                                fontSize="3xl"
                            >
                                ¿Quienes somos?
                            </Text>
                            <Text textAlign="justify">
                                &nbsp;Somos María Inés Manzanares y María
                                Angélica Macoratti fuimos compañeras en la
                                Facultad de Odontología de la UNNE, donde
                                también surgió una buena amistad, culminamos la
                                carrera juntas y nos recibimos el mismo día en
                                diciembre del 2013. Tenemos una excelente
                                relación tanto laboral como humana, esto hizo
                                que podamos formarnos juntas en el mundo de la
                                Armonización Orofacial
                            </Text>
                            <Text
                                mt="3rem"
                                mb="1rem"
                                fontWeight="bold"
                                fontSize="3xl"
                                textAlign="center"
                            >
                                ¿Que es Armoniface?
                            </Text>
                            <Text textAlign="justify">
                                &nbsp;Es un espacio de trabajo dirigidos por
                                ambas profesionales Especializadas en Brasil en
                                la rama de la Armonización Orofacial, donde
                                brindamos nuestros conocimientos y experiencias
                                a colegas odontologos y médicos que tengan
                                interés en esta nueva rama que crece
                                exponencialmente
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </>
    );
};

export default AboutPage;
