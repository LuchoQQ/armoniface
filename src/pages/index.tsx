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
//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);
//   const { data: session, status } = useSession();
//   useEffect(() => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   }, []);
//   const [open, setOpen] = useState(false);
  const theme: any = useTheme();

  return (
    <>
      <NavbarIndex />
      <Flex pt="80px" h="100vh" bg="#12241d" justifyContent="center">
        {/* <ChakraNextImage
          src="/assets/bg2.png"
          w="500px"
          h="500px"
          alt="logo"
          fit="cover"
          position="absolute"
          left="0"
          zIndex="1"
        /> */}
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
            <Text>ARMONIFACE</Text>
            {/* <Text fontWeight="semibold"></Text> */}
            <Text
              color="secondary"
              letterSpacing={4}
              textDecoration="underline"
            >
              DICK
            </Text>
            <Text fontSize="md" w="600px" mt="6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut luctus quam. Nunc in ligula orci.
            </Text>
            <Text fontSize="md" w="600px">
              Cras vulputate dictum felis eu sodales. Proin nisl neque, maximus
              nec enim id{" "}
            </Text>
            <Button colorScheme="green" mt="2rem">
              QUIERO UNIRME
            </Button>
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
            w="500px"
            h="550px"
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
      <Flex h="100vh" bg="orange" zIndex="100" p="5rem" align="center">
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
      <Flex justifyContent='center' align="center" gap='2rem' pb='4rem' h="100vh" bg="green">
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