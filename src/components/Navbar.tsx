import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useSession } from "next-auth/react";
import React from "react";
import ChakraNextImage from "./ChakraNextImage";
import Image from "next/image";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();

  const theme: any = useTheme();
  return (
    <>
      <Flex
        w="100%"
        h="80px"
        justifyContent="center"
        px="3rem"
        bg="#f1f2f3"
        alignContent="center"
        position="fixed"
        boxShadow="lg"
        zIndex='100'
      >
        <ChakraNextImage
          src="/assets/logo.webp"
          alt="logo"
          h="60px"
          w="110px"
          alignSelf="center"
        />
        <Flex ml="auto" gap="2rem" alignSelf="center">
          <Flex gap="1rem">
            <Image src="/profile.svg" height={40} width={40} style={{ borderRadius: "50%"}} alt="profile" />
            <Text
              fontFamily={theme.fonts.tertiary}
              alignSelf="center"
              fontSize="sm"
            >
              {session?.user?.name}
            </Text>
          </Flex>
        </Flex> 
      </Flex>
    </>
  );
};

export default Navbar;
