import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../components/ChakraNextImage";

const IndexPage: React.FC = () => {
    return (
        <>
            <Flex h="100vh" justifyContent="center" id="inicio">
                
                <Flex
                    w="50%"
                    h="100%"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    zIndex="1"
                    flexDir="column"
                    fontFamily="primary"
                >
                    <Grid
                        fontSize={["xl", "4xl", "4xl", "4xl", "4xl", "4xl"]}
                        color="#d3d2d2"
                    >
                        <Text
                            fontSize={["lg", "lg", "lg", "lg", "sm"]}
                            color="#f1f2f3"
                        >
                            Health&Care
                        </Text>
                        <Text color="#fff" fontWeight="bold">
                            ARMONIFACE
                        </Text>
                        <Text color="#fff" letterSpacing={0} fontWeight="bold">
                            DICK
                        </Text>
                        <Text
                            fontSize={["md", "md", "md", "md", "md", "md"]}
                            w="400px"
                            mt="6"
                            color="#f1f2f3"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer ut luctus quam. Nunc in ligula orci.
                        </Text>
                        <Text
                            fontSize={["md", "md", "md", "md", "sm", "sm"]}
                            w="400px"
                            mt="1rem"
                            color="#f1f2f3"
                        >
                            Cras vulputate dictum felis eu sodales. Proin nisl
                            neque, maximus nec enim id{" "}
                        </Text>
                        <Button bg="secondary" color="#202020" mt="2rem" w="">
                            Ver más
                        </Button>
                    </Grid>
                </Flex>
                <Flex
                    w="50%"
                    h="100%"
                   /*  bg="#dedede"
                    rounded="50%"
                    boxShadow='0px 0px 20px 10px #dedede' */
                    justifyContent="center"
                    position="relative"
                    >
                    <ChakraNextImage
                        src="/assets/imac2.png"
                        w="500px"
                        h="550px"
                        alignSelf="flex-end"
                        fit="contain"
                        position="relative"
                        left="0"
                        top="4px"
                        _before={{
                            content: '""',
                            width: "1px",
                            h: "1px",
                            bg: "#",
                            left: "50%",
                            position: "absolute",
                            top: "200px",
                            boxShadow: "0px 0px 1000px 70px #fff",
                        }}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default IndexPage;
