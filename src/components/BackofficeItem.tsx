import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    text: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const BackofficeItem: React.FC<Props> = ({ icon, text, setCategory }) => {
    return (
        <>
            <Flex onClick={() => setCategory(text)}>
                <Icon as={icon} fontSize="xl" />
                <Text>{text}</Text>
            </Flex>
        </>
    );
};

export default BackofficeItem;
