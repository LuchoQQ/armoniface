import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type Props = {
    children: ReactElement;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Container: React.FC<Props> = ({ open, setOpen, children }) => {
    return (
        <>
            <Flex
                minH="85vh"
                w={open ? "85vw" : "100vw"}
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
