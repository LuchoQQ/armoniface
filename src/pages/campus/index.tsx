import { Button, Flex, Heading, Text } from "@chakra-ui/react";
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
import ChakraNextImage from "../../components/ChakraNextImage";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { data: session, status }: any = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  return (
    <>
      <Navbar />
      <Flex w="100%" bg="#f1f2f3">
        <Sidebar open={open} setOpen={setOpen} />
        {/* <IndexLayout /> */}
        <Container open={open} setOpen={setOpen}>
          <Flex flexDirection="column" align="center">
            <Flex
              bgColor="tertiary"
              w="100%"
              h="120px"
              align="center"
              justify="center"
              zIndex="0"
              boxShadow="lg"
            ></Flex>
            <Flex
              mt="-12"
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
            <Flex my={{base: "10", md: "20"}} gap="8" w="100%" align="center" justify="space-evenly" flexDir={{base: "column", md: "row"}}>
              <Button                
                bg="bg"
                color="white"
                _hover={{
                  bg: "bg",
                }}
                _active={{ bg: "bg" }}
                onClick={() => router.push("/campus/courses")}
                w={{base: "48", xl: "96"}}
                h={{base: "48", xl: "96"}}
                p="0"
                position="relative"              
              >
                <ChakraNextImage src="/client.jpg" alt="Ir a cursos" h="100%" w="100%" filter='auto' blur='6px' transition="ease 0.3s" _hover={{blur: "8px", transition: "ease 0.2s"}} />
                <Text  position="absolute" fontSize={{base: "4xl", xl: "7xl"}} color="#fff">Cursos</Text>
              </Button>
              <Button                
                bg="bg"
                color="white"
                _hover={{
                  bg: "bg",
                }}
                _active={{ bg: "bg" }}
                onClick={() => router.push("/campus/reading")}
                w={{base: "48", xl: "96"}}
                h={{base: "48", xl: "96"}}
                p="0"
                position="relative"              
              >
                <ChakraNextImage src="/client3.jpg" alt="Ir a cursos" h="100%" w="100%" filter='auto' blur='6px' transition="ease 0.3s" _hover={{blur: "8px", transition: "ease 0.2s"}} />
                <Text  position="absolute" fontSize={{base: "4xl", xl: "7xl"}} color="#fff">Lectura</Text>
              </Button>              
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  console.log(session);
  if (session !== null) {
    return {
      props: {
        session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default Home;
