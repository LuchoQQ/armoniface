import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Courses: React.FC = () => {
    const theme: any = useTheme();
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession();
    
    return (
        <>
            <Navbar />
            <Flex w="100vw" h="100vh">
                <Sidebar open={open} setOpen={setOpen} />
                <Container open={open} setOpen={setOpen}>
                <Flex align="center" w="100%" h="100%" position="relative">
                            <Flex flexDirection="column" align="center" ml="12">
                                <Flex bgColor="white" gap="12" w="300px" align="center" zIndex="0" borderRadius="lg" flexDirection="column">
                                <Heading as="h3" mt="6" size="md" fontWeight="extrabold">Clases</Heading>
                                <Flex flexDirection="column" gap="10" mb="6">
                                    <Text bg="gray" w="200px" h="50px" p="auto">Clase 1</Text>
                                    <Text>Clase 2</Text>
                                    <Text>Clase 3</Text>
                                    <Text>Clase 4</Text>
                                    <Text>Clase 5</Text>
                                    <Text>Clase 6</Text>
                                </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection="column" align="center" position="absolute" right="10">
                                <Flex w="90%" h="10rem" bgColor="white" zIndex="2" borderRadius="lg" align="center" justify="center">
                                    <Heading as="h3" size="xl" fontWeight="extrabold" color="#000">aaa</Heading>
                                </Flex>
                            </Flex>
                        </Flex>
                </Container>
            </Flex>
        </>
    );
};

export default Courses;
