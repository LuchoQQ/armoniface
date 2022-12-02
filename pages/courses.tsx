import { Flex } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import Container from "../src/components/Container";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import IndexLayout from "../src/views/IndexLayout";

const Courses: React.FC = () => {
    const theme: any = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar />
            <Flex>
                <Sidebar open={open} setOpen={setOpen} />
                <Container open={open} setOpen={setOpen}>
                    <Flex w="10rem" h="10rem" bg="blue"></Flex>
                </Container>
            </Flex>
        </>
    );
};

export default Courses;
