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

const Home: NextPage = () => {
  const [width, setWidth] = useState(0);
  /*     useEffect(() => {
        setWidth(window.innerWidth);
    }, []); */
  const [open, setOpen] = useState(false);
  const theme: any = useTheme();

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
              bgColor="secondary"
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
            {/* <SimpleCarousel /> */}
          </Flex>
        </Container>
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
