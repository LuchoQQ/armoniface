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
import ChakraNextImage from "../components/ChakraNextImage";
import AboutIcon from "../components/AboutIcon";
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
                minW={width}
                minH={height}
                bg="background"
                px={["0rem", "0rem", "5rem", "5rem", "5rem"]}
                py={["5rem", "5rem", "5rem", "5rem", "5rem"]}
                id="about"
                flexDir="column"
            >
                <Flex
                    w="100%"
                    h="100%"
                    alignItems="center"
                    flexDir={["column", "column", "column", "row", "row"]}
                    gap={["5rem", "5rem", "4rem", "4rem", "4rem"]}
                >
                    <Flex
                        w={["100%", "100%", "100%", "50%", "50%"]}
                        h="100%"
                        p={["0rem", "0rem", "5rem", "5rem", "5rem"]}
                        justifyContent="center"
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
                        px={["5rem", "5rem", "0rem", "0rem", "0rem"]}
                        flexDir="column"
                        fontFamily="secondary"
                    >
                        <Text
                            fontSize={["xl", "xl", "3xl", "3xl" ,"3xl","4xl"]}
                            textAlign={[
                                "center",
                                "center",
                                "center",
                                "left",
                                "left",
                            ]}
                        >
                            ¿<span style={{ fontWeight: "bold" }}>Por qué</span>{" "}
                            elegir a nuestros <br />
                            profesionales en{" "}
                            <span style={{ fontWeight: "bold" }}>
                                armonizacion facial?
                            </span>
                        </Text>
                        <Divider/>
                        <Text
                            fontSize={["sm", "sm", "lg", "lg", "lg","xl"]}
                            textAlign={[
                                "left",
                                "left",
                                "left",
                            ]}
                            mt={["4rem","4rem","4rem","1rem","1rem"]}
                            w={["100%", "100%", "500px", "500px", "500px"]}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur vulputate euismod urna, ac iaculis
                            nulla elementum eu. Maecenas id mauris eget odio
                            dapibus facilisis et sed nibh. Praesent id accumsan
                            purus. Nullam suscipit non est in vulputate. Cras
                            quis nisi facilisis nisi venenatis venenatis quis
                            sit amet tellus. Etiam molestie lorem est, eget
                            rhoncus magna convallis sed.
                        </Text>
                        <UnorderedList
                            fontSize={["xs", "xs", "md", "md", "lg"]}
                            mt="2rem"
                            fontWeight="bold"
                        >
                            <ListItem>Belleza facial</ListItem>
                            <ListItem mt="1rem">Armonizacion</ListItem>
                            <ListItem mt="1rem">Armonizacion</ListItem>
                            <ListItem mt="1rem">Armonizacion</ListItem>
                        </UnorderedList>
                    </Flex>
                </Flex>

                <Flex
                    justifyContent="center"
                    align="center"
                    gap="3rem"
                    bg="#dedede"
                    id="services"
                    fontFamily="tertiary"
                    pb="2rem"
                    pt={["4rem", "0rem", "0rem", "5rem", "5rem"]}
                    wrap="wrap"
                >
                    <AboutIcon icon={AiFillMedicineBox} text="Armonizacion" />
                    <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
                    <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
                    <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
                    <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
                </Flex>
            </Flex>
        </>
    );
};

export default AboutPage;
