import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiFillInstagram, AiFillMail } from "react-icons/ai";
import ChakraNextImage from "./ChakraNextImage";

const NavbarIndex: React.FC = () => {
  const router = useRouter();
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return (
    <>
      {/* Desktop navbar */}
      <Flex
        w="100%"
        h="80px"
        display={{ base: "none", md: "flex" }}
        bg="#f1f2f3"
        justifyContent="flex-end"
        alignItems="center"
        px="5rem"
        gap="2rem"
        boxShadow="lg"
        position="fixed"
        zIndex={100}
      >
        <ChakraNextImage
          src="/assets/logo.webp"
          h="50px"
          w="100px"
          alt="logo"
        />
        <Text
          fontSize="xl"
          mr="auto"
          ml="4rem"
          onClick={() => {
            router.push("/");
          }}
        >
          Inicio
        </Text>
        <Button
          fontSize="xl"
          onClick={() => {
            router.push("/login");
          }}
        >
          Acceder
        </Button>
        <Flex
          px="1rem"
          py=".5rem"
          bg="primary"
          rounded="20px"
          onClick={() => {
            router.push("/register");
          }}
        >
          <Button fontSize="xl" color="#f1f2f3">
            Registrarse
          </Button>
        </Flex>
      </Flex>

      {/* Mobile navbar */}
      <Box position="relative">
        <Icon
          as={AiOutlineMenu}
          {...getButtonProps()}
          position="absolute"
          top="2"
          right="1"
          zIndex="100"
        />
        <motion.div
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          onAnimationStart={() => setHidden(false)}
          onAnimationComplete={() => setHidden(!isOpen)}
          animate={{ width: isOpen ? 300 : 0 }}
          style={{
            //   background: 'red',
            backdropFilter: "blur(10px)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "absolute",
            right: "0",
            height: "100vh",
            top: "0",
          }}
        >
          <Flex direction="column" mt="10" gap="3rem">
            <Flex direction="column" gap="2rem">
              <Box fontFamily="tertiary" alignSelf="flex-start" fontSize="md">
                Inicio
              </Box>
              <Box fontFamily="tertiary" alignSelf="flex-start" fontSize="md">
                Sobre nosotros
              </Box>

              <Box fontFamily="tertiary" alignSelf="flex-start" fontSize="md">
                Galería
              </Box>
              <Box fontFamily="tertiary" alignSelf="flex-start" fontSize="md">
                Contáctanos
              </Box>
            </Flex>
            <Divider />
            <Flex flexDirection="column" gap="1rem">
              <Button fontFamily="tertiary" colorScheme="green">
                Acceder
              </Button>
              <Button fontFamily="tertiary" colorScheme="green">
                Registrarse
              </Button>
            </Flex>
            <Divider />
            <Flex gap="2rem" justify="center">
              <Icon fill="#black" fontSize="3xl" as={AiFillInstagram}></Icon>
              <Icon fill="#black" fontSize="3xl" as={AiFillMail}></Icon>
            </Flex>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default NavbarIndex;
