import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    text: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    category: string
};

const BackofficeItem: React.FC<Props> = ({ icon, text, setCategory, category }) => {
    const theme: any = useTheme()
    return (
        <>
            <Flex cursor="pointer"  onClick={() => setCategory(text)}  rounded='20px' border={`1px solid ${theme.colors.secondary} `} px='1rem' py='.5rem'>
                <Icon as={icon} fontSize="xl" />
                <Text ml="2" color={text ===  category ? theme.colors.secondary : '#202020'}>{text}</Text>
            </Flex>
        </>
    );
};

export default BackofficeItem;
