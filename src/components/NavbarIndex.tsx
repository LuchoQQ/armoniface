import {
    Box,
    Button,
    Flex,
    Icon,
    useDisclosure,
    Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiFillInstagram, AiFillMail } from "react-icons/ai";
import ChakraNextImage from "./ChakraNextImage";
import NavbarLinkScroll from "./NavbarLinkScroll";

const NavbarIndex: React.FC = () => {
    const router = useRouter();
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
    const [hidden, setHidden] = useState(!isOpen);

    return (
        <>
            {/* Desktop navbar */}
            <Flex
                w="100vw"
                h="80px"
                display={{ base: "none", md: "flex" }}
                bg="#f1f2f3"
                // justifyContent="flex-end"
                alignItems="center"
                px="5rem"
                gap="2rem"
                boxShadow="lg"
                position="fixed"
                zIndex={100}
                fontSize="xl"
            >
                <ChakraNextImage
                    src="/assets/logo.webp"
                    h="50px"
                    w="100px"
                    alt="logo"
                    mr="10"
                />
                <Divider orientation="vertical" />
                <NavbarLinkScroll text="Inicio" path="inicio" />
                <Divider orientation="vertical" />
                <NavbarLinkScroll text="Nosotros" path="about" />
                <Divider orientation="vertical" />
                <NavbarLinkScroll text="Cursos" path="courses" />
                <Divider orientation="vertical" />
                <NavbarLinkScroll text="Contáctanos" path="contact" />
                <Divider orientation="vertical" />
                <Button
                    fontSize="lg"
                    ml="auto"
                    onClick={() => {
                        router.push("/login");
                    }}
                    bg="secondary"
                    color="fontSecondary"
                    _hover={{ bg: "#e09e24" }}
                    _active={{ bg: "" }}
                >
                    Acceder
                </Button>
                <Button
                    fontSize="lg"
                    bg="secondary"
                    color="fontSecondary"
                    _hover={{ bg: "#e09e24" }}
                    _active={{ bg: "" }}
                    onClick={() => {
                        router.push("/register");
                    }}
                >
                    Inscríbete
                </Button>
            </Flex>

            {/* Mobile navbar */}
            <Box
                position="relative"
                display={{ base: "block", md: "none" }}
                zIndex="100"
            >
                <Box bg="#f1f2f3" h="47px" position="fixed" w="100vw">
                    <ChakraNextImage
                        src="/assets/logo.webp"
                        h="40px"
                        w="80px"
                        alt="logo"
                        ml="4"
                        mt="1"
                    />
                </Box>
                <Icon
                    as={AiOutlineMenu}
                    {...getButtonProps()}
                    position="absolute"
                    top="4"
                    right="3"
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
                        background: "#adbfa8",
                        // backdropFilter: "blur(10px)",
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
                            <Box
                                fontFamily="tertiary"
                                alignSelf="flex-start"
                                fontSize="md"
                            >
                                Inicio
                            </Box>
                            <Box
                                fontFamily="tertiary"
                                alignSelf="flex-start"
                                fontSize="md"
                            >
                                Sobre nosotros
                            </Box>

                            <Box
                                fontFamily="tertiary"
                                alignSelf="flex-start"
                                fontSize="md"
                            >
                                Galería
                            </Box>
                            <Box
                                fontFamily="tertiary"
                                alignSelf="flex-start"
                                fontSize="md"
                            >
                                Contáctanos
                            </Box>
                        </Flex>
                        <Divider />
                        <Flex flexDirection="column" gap="1rem">
                            <Button
                                fontFamily="tertiary"
                                color="fontSecondary"
                                bg="secondary"
                                _hover={{ bg: "#e09e24" }}
                                _active={{ bg: "" }}
                            >
                                Acceder
                            </Button>
                            <Button
                                fontFamily="tertiary"
                                color="fontSecondary"
                                bg="secondary"
                                _hover={{ bg: "#e09e24" }}
                                _active={{ bg: "" }}
                            >
                                Registrarse
                            </Button>
                        </Flex>
                        <Divider />
                        <Flex gap="2rem" justify="center">
                            <Icon
                                fill="#black"
                                fontSize="3xl"
                                as={AiFillInstagram}
                            ></Icon>
                            <Icon
                                fill="#black"
                                fontSize="3xl"
                                as={AiFillMail}
                            ></Icon>
                        </Flex>
                    </Flex>
                </motion.div>
            </Box>
        </>
    );
};

export default NavbarIndex;
