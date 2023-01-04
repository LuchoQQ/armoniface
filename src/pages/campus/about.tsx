import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Container from "../../components/Container";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import Login from "../../views/Login";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Register from "../../views/Register";

const About = () => {
  const [width, setWidth] = useState(0);
  const { data: session, status } = useSession();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const [open, setOpen] = useState(false);
  const theme: any = useTheme();
  const router = useRouter();
  if (session) {
    return (
      <>
        <Navbar />
        <Flex w="100%" bg="#f1f2f3">
          <Sidebar open={open} setOpen={setOpen} />
          {/* <IndexLayout /> */}
          <Container open={open} setOpen={setOpen}>
            <Flex flexDirection="column" align="center" bg="green">
              <Flex
                bgColor="gray.500"
                w="100%"
                h="120px"
                align="center"
                justify="center"
                zIndex="0"
                boxShadow="lg"
              >
                <Heading as="h1" size="lg" fontWeight="extrabold" color="white">
                  Sobre nosotros
                </Heading>
              </Flex>
              <Flex gap="10">
                <Flex flexDirection="column" bg="yellow">
                  <Heading as="h2" color="green">Armoniface</Heading>
                  <Text>¿Quienes somos?
                    blabla
                  </Text>
                  <Text>¿Que hacemos?
                    blabla
                  </Text>
                </Flex>
                <Flex flexDirection="column" bg="yellow">
                  <Text>Ubicacion</Text>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </>
    );
  }
};

export default About;
