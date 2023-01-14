import { Flex, Grid, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChakraNextImage from "../components/ChakraNextImage";
import AboutIcon from "../components/AboutIcon";
import { AiFillMedicineBox } from "react-icons/ai";

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
                px="5rem"
                id="about"
                flexDir="column"
            >
                <Flex w="100%" h='100%' alignItems='center'>
                    <Flex w="50%" h='50%'>
                        <ChakraNextImage src="/client.jpg" fit="contain" />
                    </Flex>
                    <Flex w="50%" flexDir="column" fontFamily="secondary">
                        <Text fontSize="xl">
                            ¿<span style={{ fontWeight: "bold" }}>Por qué</span>{" "}
                            elegir a nuestros <br />
                            profesionales en{" "}
                            <span style={{ fontWeight: "bold" }}>
                                armonizacion facial?
                            </span>
                        </Text>
                        <Text fontSize="sm" mt="1rem" w="500px">
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
                            fontSize="xs"
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
                    gap="2rem"
                    bg="#dedede"
                    id="services"
                    fontFamily="tertiary"
                    pb='2rem'
                >
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                </Flex>
            </Flex>
        </>
    );
};

export default AboutPage;
