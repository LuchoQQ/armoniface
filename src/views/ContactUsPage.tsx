import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ContactUsPage: React.FC = () => {
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
                minH={height}
                flexWrap="wrap"
                justifyContent="center"
                alignContent="center"
                flexDir="column"
                id="contact"
                p={["2rem", "2rem"]}
                mb="1rem"
                bg='#fff'
            >
                <Text
                    mt="2rem"
                    fontSize={["2xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
                    fontFamily="secondary"
                    textAlign="center"
                    fontWeight="bold"
                    position="relative"
                    _after={{
                        content: '""',
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        top: "100%",
                        width: "100%",
                        h: "1px",
                        bg: "#202020",
                    }}
                >
                    CONTÁCTANOS
                </Text>
                <Flex
                    bg="#fff"
                    boxShadow="0px 0px 10px 15px #dedede"
                    mt="4rem"
                    flexDir="column"
                    gap="2rem"
                    fontFamily="primary"
                    rounded="20px"
                    p="2rem"
                    maxW="500px"
                >
                    <Text
                        fontSize={["md", "md", "lg", "lg", "lg", "xl"]}
                        fontFamily="primary"
                        textAlign="center"
                        position="relative"
                    >
                        Para saber más información acerca de los cursos,
                        consultanos por nuestro email o redes sociales!
                    </Text>
                    <Input
                        variant="flushed"
                        placeholder="Nombre"
                        mt="1rem"
                    ></Input>
                    <Input variant="flushed" placeholder="Email"></Input>
                    <Textarea
                        variant="flushed"
                        placeholder="Mensaje"
                        resize="none"
                    ></Textarea>
                    <Button>Enviar</Button>
                </Flex>
            </Flex>
        </>
    );
};

export default ContactUsPage;
