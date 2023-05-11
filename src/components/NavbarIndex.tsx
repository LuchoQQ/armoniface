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
import {
    AiOutlineMenu,
    AiFillInstagram,
    AiFillMail,
    AiOutlineClose,
} from "react-icons/ai";
import ChakraNextImage from "./ChakraNextImage";
import NavbarLinkScroll from "./NavbarLinkScroll";
import { useTheme } from "@emotion/react";

const NavbarIndex: React.FC = () => {
    const router = useRouter();
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
    const [hidden, setHidden] = useState(!isOpen);

    const theme: any = useTheme();
    return (
        <>
            {/* Desktop navbar */}
            <Flex
                w="100vw"
                h="80px"
                display={['none', 'none', 'none', 'flex', 'flex']}
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
                    h="63px"
                    w="100px"
                    alt="logo"
                    mr="10"
                    fit='contain'
                    cursor="pointer"
                    onClick={() => {
                        router.push("/");
                    }}                    
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
                    border={`1px solid ${theme.colors.primary}`}
                    color="secondary"
                    bg="none"
                    _active={{ bg: "" }}
                >
                    Acceder
                </Button>
            </Flex>

            {/* Mobile navbar */}
            <Flex
                display={["flex", "flex", "flex", "none", "none"]}
                position="fixed"
                top="-4px"
                zIndex="100"
                w="100%"
                h="10vh"
                bg="#f1f2f3"
                justifyContent='space-between'
                px='2rem'
                alignItems='center'
            >
                <ChakraNextImage
                    src="/assets/logo.webp"
                    h="40px"
                    w="80px"
                    alt="logo"
                    ml="4"
                    mt="1"
                />
                <Icon
                    as={AiOutlineMenu}
                    fontSize="3xl"
                    {...getButtonProps()}
                    zIndex="100"
                />
                <motion.div
                    {...getDisclosureProps()}
                    hidden={hidden}
                    initial={false}
                    onAnimationStart={() => setHidden(false)}
                    onAnimationComplete={() => setHidden(!isOpen)}
                    animate={{ width: isOpen ? "100%" : 0 }}
                    style={{
                        background: "#f1f2f3",
                        // backdropFilter: "blur(10px)",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        position: "fixed",
                        right: "0",
                        height: "100vh",
                        top: "0",
                        zIndex: "100",
                    }}
                >
                    <Flex direction="column" mt="10" gap="3rem">
                        <Flex direction="column" gap="2rem" px="4rem" py="2rem">
                            <Icon
                                as={AiOutlineClose}
                                {...getButtonProps()}
                                position="absolute"
                                top="4"
                                right="3"
                                zIndex="100"
                                fontSize="3xl"
                            />
                            <NavbarLinkScroll text="Inicio" path="inicio" />

                            <NavbarLinkScroll text="Nosotros" path="about" />

                            <NavbarLinkScroll text="Cursos" path="courses" />

                            <NavbarLinkScroll
                                text="Contáctanos"
                                path="contact"
                            />
                        </Flex>
                        <Divider />
                        <Flex
                            flexDirection="column"
                            gap="1rem"
                            alignItems="center"
                        >
                            <Button
                                w="80%"
                                fontFamily="primary"
                                color="#dedede"
                                bg="secondary"
                                _hover={{
                                    bg: "#023b3b",
                                }}
                                onClick={() => {
                                    router.push("/login");
                                }}
                            >
                                Acceder
                            </Button>
                        </Flex>
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
            </Flex>
        </>
    );
};

export default NavbarIndex;
