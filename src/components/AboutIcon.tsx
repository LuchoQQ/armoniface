import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
    icon: IconType,
    text: string
}

const AboutIcon: React.FC<Props> = ({icon, text}) => {
    return (
        <>
            <Flex flexDir="column">
                <Flex
                    w="4rem"
                    h="4rem"
                    justifyContent="center"
                    alignItems="center"
                    rounded="50%"
                    bg="primary"
                    flexDir="column"
                >
                    <Icon
                        as={icon}
                        fontSize="4xl"
                        fill="secondary"
                    />
                </Flex>
                <Text textAlign="center">{text}</Text>
            </Flex>
        </>
    );
};

export default AboutIcon;
