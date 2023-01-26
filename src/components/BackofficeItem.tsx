import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    text: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    category: string;
};

const BackofficeItem: React.FC<Props> = ({
    icon,
    text,
    setCategory,
    category,
}) => {
    const theme: any = useTheme();
    return (
        <>
            <Flex
                cursor="pointer"
                onClick={() => setCategory(text)}
                rounded="20px"
                border={`1px solid ${theme.colors.secondary} `}
                px="1rem"
                py=".5rem"
                bg={text === category ? "primary" : "#f1f2f3"}
                boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'
            >
                <Icon as={icon} fontSize="xl" fill={text === category ? '#202020' : '#202020'}/>
                <Text
                    ml="2"
                    fontFamily="secondary"
                    color={
                        text === category ? '#f1f2f3' : "#202020"
                    }
                >
                    {text}
                </Text>
            </Flex>
        </>
    );
};

export default BackofficeItem;
