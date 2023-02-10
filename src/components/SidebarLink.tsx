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

const SidebarLink: React.FC<Props> = ({
    icon,
    path,
    text,
    display,
    onClick,
}) => {
    const router = useRouter().pathname;

    return (
        <>
            <Link href={path} onClick={onClick}>
                <Flex
                    justifyContent="start"
                    gap="1rem"
                    pl="1rem"
                    position='relative'
                    _before={{
                        content: `""`,
                        position: 'absolute',
                        height: '100%',
                        bg: 'red',
                        left: '0',
                        top: '0'
                    }}
                >
                    <Icon
                        as={icon}
                        alignSelf="center"
                        fontSize="2xl"
                        fill='tertiary'

                    />
                    <Text
                        fontFamily="secondary"
                        color="#fff"
                        _hover={{
                            color: '#dedede'
                        }}
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
