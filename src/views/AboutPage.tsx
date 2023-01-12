import { Flex, Grid, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../components/ChakraNextImage";
import AboutIcon from "../components/AboutIcon";
import { AiFillMedicineBox } from "react-icons/ai";

const AboutPage: React.FC = () => {
    return (
        <>
            <Grid minH="100vh" bg="background" zIndex="100" p="5rem" id="about" alignContent='center'>
                <Flex mb='4rem'>
                    <Flex w="50%">
                        <ChakraNextImage src="/client.jpg" fit="contain" />
                    </Flex>
                    <Flex w="50%" flexDir='column'>
                        <Text>Formate con especializados en el área</Text>
                        <Text>
                            ¿Por qué{" "}
                            <span style={{ fontWeight: "bold" }}>
                                elegirnos?
                            </span>
                        </Text>
                        <Text fontSize="xs" mt="1rem" w="500px">
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
                >
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                    <AboutIcon icon={AiFillMedicineBox} text="nose" />
                </Flex>
            </Grid>
        </>
    );
};

export default AboutPage;
