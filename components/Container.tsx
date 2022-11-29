import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
    children: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Container: React.FC<Props> = ({ open, setOpen, children }) => {
    return (
        <>
            <Flex
                h="85vh"
                w={open ? "85vw" : "100vw"}
                justifyContent="center"
                alignContent="center"
                ml={open ? "15rem" : "4rem"}
                transition="all .5s ease"
                mt="15vh"
                flexDir='column'
                bg='#f1f2f3'
            >
                {children}
            </Flex>
        </>
    );
};

export default Container;
