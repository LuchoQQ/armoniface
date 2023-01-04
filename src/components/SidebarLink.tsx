import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    text: string;
    path: string;
    display: boolean;
    onClick?: () => void;
};

const SidebarLink: React.FC<Props> = ({ icon, path, text, display, onClick }) => {
    const router = useRouter().pathname;

    return (
        <>
            <Link href={path} onClick={onClick}>
                <Flex justifyContent="start" gap="1rem" pl="1rem">
                    <Icon
                        as={icon}
                        alignSelf="center"
                        fontSize="2xl"
                        fill={
                            path === router ? "secondary" : "#f1f2f3"
                        }
                    />
                    <Text
                        fontFamily="tertiary"
                        color={path === router ? "secondary" : "#f1f2f3"}
                        alignSelf="center"
                        display={display ? "block" : "none"}
                        fontSize="md"
                    >
                        {text}
                    </Text>
                </Flex>
            </Link>
        </>
    );
};

export default SidebarLink;
