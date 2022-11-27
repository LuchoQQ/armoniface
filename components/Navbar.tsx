import { Flex, Image, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import logo from "../public/logo.webp";

const Navbar: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Flex w="100vw" h="2rem">
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
            </Flex>
        </>
    );
};

export default Navbar;
