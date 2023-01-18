import { Button, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";

type Props = {
    title: string;
    onOpen: () => void;
};

const AddButton: React.FC<Props> = ({ onOpen, title }) => {
    const theme: any = useTheme();
    return (
        <>
            <Flex ml="4" py="1rem">
                <Button
                    boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
                    px="1rem"
                    py=".5rem"
                    w="160px"
                    h="50px"
                    rounded="20px"
                    transition="all .2s ease"
                    border={`1px solid ${theme.colors.primary}`}
                    bg="#f1f2f3"
                    fontFamily="primary"
                    onClick={onOpen}
                >
                    {title}
                </Button>
            </Flex>
        </>
    );
};

export default AddButton;
