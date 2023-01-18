import { Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
    icon: IconType;
    text: string;
};

const AboutIcon: React.FC<Props> = ({ icon, text }) => {
    const theme: any = useTheme();

    return (
        <>
            <Flex flexDir="column">
                <Flex justifyContent='center'>
                    <Flex
                        w="4rem"
                        h="4rem"
                        alignItems="center"
                        justifyContent="center"
                        rounded="50%"
                        border={`1px solid ${theme.colors.primary}`}
                    >
                        <Icon as={icon} fontSize="4xl" fill="primary" />
                    </Flex>
                </Flex>
                <Text fontFamily='secondary' mt='1rem' textAlign='center'>{text}</Text>
            </Flex>
        </>
    );
};

export default AboutIcon;
