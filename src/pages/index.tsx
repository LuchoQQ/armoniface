import { Flex, Grid, Icon, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import NavbarIndex from "../components/NavbarIndex";
import IndexPage from "../views/IndexPage";
import AboutPage from "../views/AboutPage";
import CoursesPage from "../views/CoursesPage";

import ContactUsPage from "../views/ContactUsPage";
import ChakraNextImage from "../components/ChakraNextImage";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <>
      <Grid justifyContent="center" overflow="hidden">
        <NavbarIndex />
        <IndexPage />
        <AboutPage />
        <CoursesPage />
        <ContactUsPage />
        <Flex
          w="100%"
          p="1rem"
          bg="#dedede"
          alignItems="center"
          px="20%"
          gap="1rem"
          justifyContent="space-between"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          <Flex
            gap="1rem"
            flexDir={{ base: "column", md: "row" }}
            align="center"
          >
            <ChakraNextImage
              src="/assets/logo.webp"
              h="90px"
              w="150px"
              fit="cover"
              alt="logo"
            />
            <Flex
              flexDir="column"
              justifyContent="center"
              align={{ base: "center", md: "start" }}
            >
              <Text
                fontFamily="secondary"
                fontSize={["xl", "xl", "xl", "3xl", "3xl"]}
              >
                ARMONIFACE
              </Text>
              <Text
                fontFamily="primary"
                fontSize={["md", "md", "md", "md", "md"]}
                textAlign="center"
              >
                © 2023 Armoniface. Todos los derechos rervados
              </Text>
            </Flex>
          </Flex>

          <Flex gap="1rem">
            <Link
              href="https://www.instagram.com/armonifacectes/"
              target="_blank"
            >
              <Icon
                as={AiOutlineInstagram}
                fontSize={["xl", "xl", "2xl", "2xl", "4xl"]}
              />
            </Link>

            <Icon
              as={HiOutlineMail}
              fontSize={["xl", "xl", "2xl", "2xl", "4xl"]}
            />

            <Icon
              as={AiOutlinePhone}
              fontSize={["xl", "xl", "2xl", "2xl", "4xl"]}
            />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
};

export async function getServerSideProps() {
  const session = await getSession();

  /* return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  }; */

  return {
    props: {
      session,
    },
  };
}

export default Home;
