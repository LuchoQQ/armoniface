import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useTheme } from "@emotion/react";
import { useSession } from "next-auth/react";
import React from "react";

const Navbar: React.FC = () => {
    const { data: session, status } = useSession();

    const theme: any = useTheme();
    return (
        <>
            <Flex
                w="100%"
                h="15vh"
                justifyContent="center"
                px="3rem"
                bg="#f1f2f3"
                alignContent="center"
                position='fixed'
                boxShadow="lg"
            >
                <Image
                    src="/logo.webp"
                    alt="logo"
                    h="60px"
                    alignSelf="center"
                />
                <Flex ml="auto" gap="2rem" alignSelf="center">
                    <Flex gap="1rem">
                        <Image src="/profile.svg" h="40px" rounded="50%" />
                        <Text
                            fontFamily={theme.fonts.tertiary}
                            alignSelf="center"
                            fontSize="sm"
                        >
                            {session?.user?.name}
                        </Text>
                        <Icon
                            as={AiOutlineArrowDown}
                            alignSelf="center"
                            fontSize="sm"
                            fill={theme.colors.secondary}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Navbar;
