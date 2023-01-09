import { Button, Flex, Grid, Heading, Icon, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Container from "../components/Container";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useTheme } from "@emotion/react";
import ChakraNextImage from "../components/ChakraNextImage";
import NavbarIndex from "../components/NavbarIndex";
import {
  FaBriefcaseMedical,
  FaHandHoldingMedical,
  FaLaptopMedical,
} from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
const Home: NextPage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { data: session, status } = useSession();
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  const [open, setOpen] = useState(false);
  const theme: any = useTheme();

  return (
    <>
      <NavbarIndex />
      <Flex w={width} h={height} bg="#12241d" justifyContent="center">
        <ChakraNextImage
          src="/assets/bg2.png"
          w={width}
          h={height}
          alt="logo"
          fit="cover"
          position="absolute"
          left="0"
          zIndex="1"
        />
        <Flex
          w="50%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex="1"
          flexDir="column"
          fontFamily="secondary"
        >
          <Grid fontSize="5xl" color="#dedede">
            <Text fontSize="lg" color="secondary">
              Health&Care
            </Text>
            <Text>A better life starts</Text>
            <Text fontWeight="semibold">with a beautiful</Text>
            <Text
              color="secondary"
              letterSpacing={4}
              textDecoration="underline"
            >
              SMILE
            </Text>
            <Text fontSize="md" w="600px" mt="6rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut luctus quam. Nunc in ligula orci.
            </Text>
            <Text fontSize="md" w="600px" mt="2rem">
              Cras vulputate dictum felis eu sodales. Proin nisl neque, maximus
              nec enim id{" "}
            </Text>
            <Flex gap="2rem" mt="3rem">
              <Button bg="secondary" _hover={{ color: "#000" }}>
                Registrarse
              </Button>
              <Button
                bg="transparent"
                border={`1px solid ${theme.colors.secondary}`}
                _hover={{ color: "#000" }}
              >
                Acceder
              </Button>
            </Flex>
          </Grid>
        </Flex>
        <Flex
          w="50%"
          h="100%"
          bg=""
          justifyContent="center"
          position="relative"
        >
          <ChakraNextImage
            src="/assets/imac2.png"
            w="700px"
            h="750px"
            alignSelf="flex-end"
            fit="contain"
            position="relative"
            _before={{
              content: '""',
              width: "1px",
              h: "1px",
              bg: "#",
              left: "50%",
              position: "absolute",
              top: "200px",
              boxShadow: "0px 0px 1000px 70px #fff",
            }}
          />
        </Flex>
      </Flex>
      <Flex  w={width} bg="#" zIndex="100" p="5rem">
        <Flex w="50%" h="500px" bg="" gap="1rem">
          <ChakraNextImage src="/client.jpg" fit="contain" />
        </Flex>
        <Flex
          w="50%"
          h="500px"
          bg=""
          fontFamily="secondary"
          fontSize="3xl"
          flexDir="column"
        >
          <Text fontWeight="bold">Formate con especializados en el área</Text>
          <Text mt='1rem'>
            ¿Por qué <span style={{ fontWeight: "bold" }}>elegirnos?</span>
          </Text>
          <Text fontSize="xs" mt='1rem' w="500px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vulputate euismod urna, ac iaculis nulla elementum eu. Maecenas id
            mauris eget odio dapibus facilisis et sed nibh. Praesent id accumsan
            purus. Nullam suscipit non est in vulputate. Cras quis nisi
            facilisis nisi venenatis venenatis quis sit amet tellus. Etiam
            molestie lorem est, eget rhoncus magna convallis sed.
          </Text>
          <UnorderedList fontSize='xs' mt='2rem' fontWeight='bold'>
            <ListItem>Belleza facial</ListItem>
            <ListItem mt='1rem'>Armonizacion</ListItem>
            <ListItem mt='1rem'>Armonizacion</ListItem>
            <ListItem mt='1rem'>Armonizacion</ListItem>
          </UnorderedList>
        </Flex>
        
      </Flex>
      <Flex justifyContent='center' w={width} gap='2rem' pb='4rem'>
        <Flex w='4rem' h='4rem'  justifyContent='center' alignItems='center' rounded='50%' bg='primary' flexDir='column'>
            <Icon as={AiFillMedicineBox} fontSize='4xl' fill='secondary'/>
        </Flex>
        <Flex w='4rem' h='4rem'  justifyContent='center' alignItems='center' rounded='50%' bg='primary' flexDir='column'>
            <Icon as={AiFillMedicineBox} fontSize='4xl' fill='secondary'/>
        </Flex>
        <Flex w='4rem' h='4rem'  justifyContent='center' alignItems='center' rounded='50%' bg='primary' flexDir='column'>
            <Icon as={AiFillMedicineBox} fontSize='4xl' fill='secondary'/>
        </Flex>
        <Flex w='4rem' h='4rem'  justifyContent='center' alignItems='center' rounded='50%' bg='primary' flexDir='column'>
            <Icon as={AiFillMedicineBox} fontSize='4xl' fill='secondary'/>
        </Flex>
        <Flex w='4rem' h='4rem'  justifyContent='center' alignItems='center' rounded='50%' bg='primary' flexDir='column'>
            <Icon as={AiFillMedicineBox} fontSize='4xl' fill='secondary'/>
        </Flex>
      </Flex>
    </>
  );
};

export async function getServerSideProps() {
  const session = await getSession();
  return {
    props: {
      session,
    },
  };
}

export default Home;

/* import { Flex, Text, Image as ChakraImage } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import React from "react";
import ChakraNextImage from "../components/ChakraNextImage";

const Index: React.FC = () => {
    const theme: any = useTheme();
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        setWidth(window.innerWidth);

        setHeight(window.innerHeight);
    }, []);
    return (
        <>
            <Flex
                fontFamily="tertiary"
                alignItems="center"
                px="5rem"
                position="fixed"
                zIndex={100}
                w="100%"
                bg='#fff'
            >
                <Image
                    src="/assets/logo.webp"
                    width={100}
                    height={100}
                    alt="logo"
                />
                <Flex gap="1rem" ml="20%" color="#000" mr="auto">
                    <Text>Nosotros</Text>
                    <Text>Cursos</Text>
                    <Text>Contacto</Text>
                </Flex>
                <Flex>
                    <Text
                        bg="secondary"
                        px="1rem"
                        py=".5rem"
                        color="#000"
                        rounded="10px"
                        mr="auto"
                    >
                        Acceder
                    </Text>
                </Flex>
            </Flex>

            <Flex position="relative" overflow="hidden" h={height}>
                <Flex
                    flexDir="column"
                    w="50%"
                    justifyContent="end"
                    alignItems="end"
                    mr="5rem"
                >
                    <ChakraNextImage
                        src="/assets/bg.png"
                        alt="bg"
                        position="absolute"
                        w="100%"
                        h="100vh"
                        left='0'
                        zIndex={1}
                    />
                    <Flex
                        flexDir="column"
                        fontFamily="secondary"
                        position="relative"
                        zIndex={100}
                        mb="10rem"
                    >
                        <Text fontSize="xs" color="secondary">
                            HEALT & CARE
                        </Text>
                        <Text
                            fontSize="3xl"
                            letterSpacing="0.05rem"
                            color="#f1f2f3"
                        >
                            A better life starts
                        </Text>
                        <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            letterSpacing="0.05rem"
                            color="#f1f2f3"
                        >
                            with a beautiful
                        </Text>
                        <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            letterSpacing="0.2rem"
                            color="secondary"
                            fontFamily={"secondary"}
                        >
                            smile
                        </Text>
                        <Text fontSize="0.7rem" mt="1rem" color="#dedede">
                            Quis ut laborum ut eu. Eu eiusmod ut tempor quis
                            cillum aute. Laboris cupidatat
                        </Text>
                        <Text fontSize="0.7rem" mt="1rem" color="#dedede">
                            Quis ut laborum ut eu. Eu eiusmod ut tempor
                        </Text>
                        <Flex gap="2rem" mt="1rem" w="100%">
                            <Text
                                bg="secondary"
                                px="1rem"
                                py=".5rem"
                                rounded="10px"
                                color="#000"
                                border="1px solid #000"
                            >
                                Cursos
                            </Text>
                            <Text
                                px="1rem"
                                py=".5rem"
                                color="secondary"
                                border={`1px solid ${theme.colors.secondary}`}
                                rounded="10px"
                            >
                                Cursos
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w="50%" ml="10rem" position="relative">
                    <Flex
                        position="absolute"
                        w="400px"
                        h="80%"
                        rounded="50%"
                        bg="#dedede"
                        zIndex={20}
                        alignSelf="end"
                    ></Flex>
                    <ChakraNextImage
                        src="/assets/dentist.png"
                        alt="dentist"
                        fit="cover"
                        w="300px"
                        h="400px"
                        alignSelf="end"
                        position="relative"
                        zIndex={50}
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default Index;
 */
