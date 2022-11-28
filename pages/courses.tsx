import { Flex } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IndexLayout from "../views/IndexLayout";

const Courses: React.FC = () => {
    const theme: any = useTheme();
    return (
        <>
            <Navbar />
            <Flex>
                <Sidebar />
                <Flex
                    w="80vw"
                    h="100vh"
                    bg="red"
                    m="15vh 0 0 20vw"
                    flexDir="column"
                >
                    <Flex
                        w="100%"
                        bg={theme.colors.secondary}
                        justifyContent="center"
                        py="1rem"
                        h="10vh"
                    ></Flex>
                    <Flex w="100%" h="100%" justifyContent="center">
                        <Flex w="1000px" h="10rem" bg="#f1f2f3"></Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Courses;
