import {
  Box,
  Divider,
  Flex,
  Grid,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import ChakraCarousel from "../components/ChakraCarousel";

const AboutPage: React.FC = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return (
    <>
      <Flex
        minW={width}
        minH={height}
        bg="background"
        px={["0rem", "0rem", "5rem", "5rem", "5rem"]}
        py={["5rem", "5rem", "5rem", "0rem", "0rem"]}
        id="about"
        flexDir="column"
      >
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          flexDir={["column", "column", "column", "row", "row"]}
          gap={["5rem", "5rem", "4rem", "4rem", "4rem"]}
        >
          <Flex
            w={["100%", "100%", "100%", "50%", "50%"]}
            h="100%"
            p={["0rem", "0rem", "5rem", "5rem", "5rem"]}
            justifyContent="center"
            alignItems="center"
          >
            {/* <ChakraNextImage src="/client.jpg" fit="contain" /> */}
            <Box w={["400px", "400px", "500px", "500px", "500px", "700px"]}>
              <ChakraCarousel />
            </Box>
          </Flex>
          <Flex
            w={["100%", "100%", "100%", "50%", "50%"]}
            px={["5rem", "5rem", "0rem", "0rem", "0rem"]}
            flexDir="column"
            fontFamily="primary"
          >
            <Flex flexDir="column" maxW={["600px"]} fontSize={["md"]} px="4rem">
              <Text
                mb="1rem"
                fontWeight="bold"
                textAlign="center"
                fontSize="3xl"
              >
                ¿Quienes somos?
              </Text>
              <Text textAlign="justify">
                &nbsp;Somos María Inés Manzanares y María Angélica Macoratti
                fuimos compañeras en la Facultad de Odontología de la UNNE,
                donde también surgió una buena amistad, culminamos la carrera
                juntas y nos recibimos el mismo día en diciembre del 2013.
                Tenemos una excelente relación tanto laboral como humana, esto
                hizo que podamos formarnos juntas en el mundo de la Armonización
                Orofacial
              </Text>
              <Text
                mt="3rem"
                mb="1rem"
                fontWeight="bold"
                fontSize="3xl"
                textAlign="center"
              >
                ¿Que es Armoniface?
              </Text>
              <Text textAlign="justify">
                &nbsp;Es un espacio de trabajo dirigidos por ambas profesionales
                Especializadas en Brasil en la rama de la Armonización
                Orofacial, donde brindamos nuestros conocimientos y experiencias
                a colegas odontologos y médicos que tengan interés en esta nueva
                rama que crece exponencialmente
              </Text>
              {/* <Text mt="1.5rem" mb="1rem" fontWeight="bold">
                Algunos de los cursos que dictamos:
              </Text> */}
            </Flex>
            {/* <UnorderedList
              fontSize={["xs", "xs", "md", "md", "md"]}
            >
              <ListItem>Toxina botulinica</ListItem>
              <ListItem mt="1rem">Acido Hialurónico nivel inicial</ListItem>
              <ListItem mt="1rem">Acido Hialurónico nivel avanzado</ListItem>
              <ListItem mt="1rem">Bioestimulacion de colageno </ListItem>
            </UnorderedList> */}
          </Flex>
        </Flex>

        {/* <Flex
          justifyContent="center"
          align="center"
          gap="3rem"
          bg="#dedede"
          id="services"
          fontFamily="tertiary"
          pb="2rem"
          pt={["4rem", "0rem", "0rem", "5rem", "5rem"]}
          wrap="wrap"
        >
          <AboutIcon icon={AiFillMedicineBox} text="Armonizacion" />
          <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
          <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
          <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
          <AboutIcon icon={AiFillMedicineBox} text="Belleza" />
        </Flex> */}
      </Flex>
    </>
  );
};

export default AboutPage;
