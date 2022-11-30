import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    text: string;
    path: string;
    display: boolean;
};

const SidebarLink: React.FC<Props> = ({ icon, path, text, display }) => {
    const theme: any = useTheme();
    const router = useRouter().pathname;

    return (
        <>
            <Link href={path}>
                <Flex justifyContent="start" gap="1rem" pl="1rem">
                    <Icon
                        as={icon}
                        alignSelf="center"
                        fontSize="xl"
                        fill={
                            path === router ? theme.colors.secondary : "#f1f2f3"
                        }
                    />
                    <Text
                        fontFamily={theme.fonts.tertiary}
                        color="#fff"
                        alignSelf="center"
                        display={display ? "block" : "none"}
                        fontSize="sm"
                    >
                        {text}
                    </Text>
                </Flex>
            </Link>
        </>
    );
};

export default SidebarLink;
