import { Flex, useTheme } from "@chakra-ui/react";
import React from "react";

const IndexLayout: React.FC = () => {
    const theme: any = useTheme();
    return (
        <>
            <Flex
                h="100vh"
                bg="#fff"
                mt='15vh'
                ml='18vw'
                flexDir="column"
            >
            </Flex>
        </>
    );
};

export default IndexLayout;
