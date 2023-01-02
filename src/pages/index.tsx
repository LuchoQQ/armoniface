import { Flex, Heading, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import HomeSignIn from "../views/HomeSignIn";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {
    user: {
        name: string;
        email: string;
        image: string;
    };
    expires: string;
};

const Home: NextPage<Props> = (props) => {
    //const [width, setWidth] = useState(0);
    const { data: session, status } = useSession();
    /*     useEffect(() => {
        setWidth(window.innerWidth);
    }, []); */
    const [open, setOpen] = useState(false);
    const theme: any = useTheme();
    if (session) {
        return (
            <>
                <Navbar />
                <Flex w="100%" bg="#f1f2f3">
                    <Sidebar open={open} setOpen={setOpen} />
                    {/* <IndexLayout /> */}
                    <Container open={open} setOpen={setOpen}>
                        <Flex flexDirection="column" align="center">
                            <Flex
                                bgColor="gray.500"
                                w="100%"
                                h="120px"
                                align="center"
                                justify="center"
                                zIndex="0"
                                boxShadow="lg"
                            >
                                {/* <Heading as="h1" size="md" fontWeight="extrabold" color="white" mb="6">Inicio</Heading>  */}
                            </Flex>
                            <Flex
                                mt="-6"
                                w="90%"
                                h="10rem"
                                bgColor="white"
                                zIndex="2"
                                borderRadius="md"
                                align="center"
                                justify="center"
                                boxShadow="lg"
                            >
                                <Heading
                                    as="h2"
                                    size={["lg", "xl"]}
                                    fontWeight="extrabold"
                                    color="#000"
                                >
                                    Bienvenido/a {session?.user?.name}!
                                </Heading>
                            </Flex>
                            {/* <SimpleCarousel /> */}
                            <Link href="/courses">
                                <Flex
                                    px="2rem"
                                    py="1rem"
                                    border={`1px solid ${theme.colors.primary}`}
                                    mt="2rem"
                                    rounded="20px"
                                    transition="all .2s ease"
                                    _hover={{
                                        bg: theme.colors.primary,
                                        color: "white",
                                    }}
                                >
                                    <Text fontFamily="tertiary">
                                        Ir a cursos
                                    </Text>
                                </Flex>
                            </Link>
                        </Flex>
                    </Container>
                </Flex>
            </>
        );
    }

    return (
        <>
            <HomeSignIn />
        </>
    );
};

export async function getServerSideProps(context: Props) {
    const session = await getSession();
    return {
        props: {
            session,
        },
    };
}

export default Home;
