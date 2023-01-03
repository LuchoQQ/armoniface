import { Flex, Text, Image as ChakraImage } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import React from "react";
import ChakraNextImage from "../components/ChakraNextImage";

const Index: React.FC = () => {
    const theme: any = useTheme();
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        setWidth(window.innerWidth);

        setHeight(window.innerHeight);
    }, []);
    return (
        <>
            <Flex
                fontFamily="tertiary"
                alignItems="center"
                px="5rem"
                position="fixed"
                zIndex={100}
                w="100%"
                bg='#fff'
            >
                <Image
                    src="/assets/logo.webp"
                    width={100}
                    height={100}
                    alt="logo"
                />
                <Flex gap="1rem" ml="20%" color="#000" mr="auto">
                    <Text>Nosotros</Text>
                    <Text>Cursos</Text>
                    <Text>Contacto</Text>
                </Flex>
                <Flex>
                    <Text
                        bg="secondary"
                        px="1rem"
                        py=".5rem"
                        color="#000"
                        rounded="10px"
                        mr="auto"
                    >
                        Acceder
                    </Text>
                </Flex>
            </Flex>

            <Flex position="relative" overflow="hidden" h={height}>
                <Flex
                    flexDir="column"
                    w="50%"
                    justifyContent="end"
                    alignItems="end"
                    mr="5rem"
                >
                    <ChakraNextImage
                        src="/assets/bg.png"
                        alt="bg"
                        position="absolute"
                        w="100%"
                        h="100vh"
                        left='0'
                        zIndex={1}
                    />
                    <Flex
                        flexDir="column"
                        fontFamily="secondary"
                        position="relative"
                        zIndex={100}
                        mb="10rem"
                    >
                        <Text fontSize="xs" color="secondary">
                            HEALT & CARE
                        </Text>
                        <Text
                            fontSize="3xl"
                            letterSpacing="0.05rem"
                            color="#f1f2f3"
                        >
                            A better life starts
                        </Text>
                        <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            letterSpacing="0.05rem"
                            color="#f1f2f3"
                        >
                            with a beautiful
                        </Text>
                        <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            letterSpacing="0.2rem"
                            color="secondary"
                            fontFamily={"secondary"}
                        >
                            smile
                        </Text>
                        <Text fontSize="0.7rem" mt="1rem" color="#dedede">
                            Quis ut laborum ut eu. Eu eiusmod ut tempor quis
                            cillum aute. Laboris cupidatat
                        </Text>
                        <Text fontSize="0.7rem" mt="1rem" color="#dedede">
                            Quis ut laborum ut eu. Eu eiusmod ut tempor
                        </Text>
                        <Flex gap="2rem" mt="1rem" w="100%">
                            <Text
                                bg="secondary"
                                px="1rem"
                                py=".5rem"
                                rounded="10px"
                                color="#000"
                                border="1px solid #000"
                            >
                                Cursos
                            </Text>
                            <Text
                                px="1rem"
                                py=".5rem"
                                color="secondary"
                                border={`1px solid ${theme.colors.secondary}`}
                                rounded="10px"
                            >
                                Cursos
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w="50%" ml="10rem" position="relative">
                    <Flex
                        position="absolute"
                        w="400px"
                        h="80%"
                        rounded="50%"
                        bg="#dedede"
                        zIndex={20}
                        alignSelf="end"
                    ></Flex>
                    <ChakraNextImage
                        src="/assets/dentist.png"
                        alt="dentist"
                        fit="cover"
                        w="300px"
                        h="400px"
                        alignSelf="end"
                        position="relative"
                        zIndex={50}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default Index;
