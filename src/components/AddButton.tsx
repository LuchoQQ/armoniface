import { Button, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";

type Props = {
    title: string
    onOpen: () => void;
}

const AddButton: React.FC<Props> = ({onOpen, title}) => {
    const theme: any = useTheme()
    return (
        <>
            <Flex px="2rem" py="1rem" onClick={onOpen}>
                <Button
                _hover={{
                    bg: "primary",
                    color: "white",
                }}
                    fontFamily={theme.fonts.tertiary}
                    border="1px solid green"
                    px="1rem"
                    py=".5rem"
                    rounded="20px"
                >
                    {title}
                </Button>
            </Flex>
        </>
    );
};

export default AddButton;
