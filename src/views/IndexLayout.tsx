import { Flex, Image, Text, useTheme } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";

const IndexLayout: React.FC = () => {
    const { data: session, status } = useSession();

    const theme: any = useTheme();
    return (
        <>
            <Flex w="100%" h="20vh" bg={theme.colors.secondary}></Flex>
            <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                position="relative"
                top="-10vh"
            >
                <Flex minW="80%" h="10rem" bg="#fff" rounded="20px">
                    <Flex px="4rem" gap="1rem">
                        <Image
                            alignSelf="center"
                            src="/profile.svg"
                            h="60%"
                            rounded="50%"
                        />
                        <Text
                            fontFamily={theme.fonts.tertiary}
                            alignSelf="center"
                            fontSize="xl"
                        >
                            ¡Bienvenido/a {session?.user?.name?.split(" ")[0]}!
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default IndexLayout;
