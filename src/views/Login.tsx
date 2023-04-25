import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  useToast,
  Icon,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { Formik, Field } from "formik";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import ChakraNextImage from "../components/ChakraNextImage";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Login: NextPage = (props) => {
  const toast = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        toast({
          title: "Usuario o contraseña incorrectos",
          description: "Verifica tus datos",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login exitoso",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      setLoading(false);
    });
  };

  return (
    <>
      <Flex h="100vh" w="100vw" m="0" flexDir="column">
        <Flex
          w="100vw"
          h="80px"
          bg="#f1f2f3"
          alignItems="center"
          px={{ base: "1.5rem", md: "5rem" }}
          gap="2rem"
          boxShadow="lg"
          zIndex={100}
          fontSize="xl"
        >
          <ChakraNextImage
            src="/assets/logo.webp"
            h="63px"
            w="100px"
            alt="logo"
            mr="10"
            fit="contain"
            cursor="pointer"
            onClick={() => {
              router.push("/");
            }}
          />
          <Icon
            as={AiOutlineArrowLeft}
            ml="auto"
            fontSize="4xl"
            onClick={() => {
              router.push("/");
            }}
            cursor="pointer"
          />
        </Flex>
        <Flex
          justifyContent="center"
          bg="linear-gradient(143deg, rgba(40,110,84,1) 16%, rgba(31,59,49,1) 100%)"
          w="100%"
          h="100%"
        >
          <Flex justifyContent="center" alignItems="center">
            <Flex>
              <Box
                bg="white"
                p={6}
                rounded="md"
                w={{ base: "300px", sm: "400px" }}
                fontFamily="tertiary"
              >
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={onSubmit}
                >
                  {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <Flex
                        gap={8}
                        flexDirection="column"
                        align="flex-start"
                        fontFamily="secondary"
                      >
                        <FormControl>
                          <FormLabel htmlFor="email">Correo</FormLabel>
                          <Field
                            as={Input}
                            id="email"
                            name="email"
                            type="email"
                            variant="filled"
                            fontFamily="primary"
                          />
                        </FormControl>
                        <FormControl
                          isInvalid={!!errors.password && touched.password}
                        >
                          <FormLabel htmlFor="password" fontFamily="secondary">
                            Contraseña
                          </FormLabel>
                          <Field
                            as={Input}
                            id="password"
                            name="password"
                            type="password"
                            variant="filled"
                            validate={(value: string) => {
                              let error;
                              if (value.length <= 5) {
                                error =
                                  "Password must contain at least 6 characters";
                              }
                              return error;
                            }}
                          />
                          <FormErrorMessage>{errors.password}</FormErrorMessage>
                        </FormControl>
                        <Button
                          isLoading={loading}
                          type="submit"
                          bg="linear-gradient(143deg, rgba(40,110,84,1) 16%, rgba(31,59,49,1) 100%)"
                          _hover={{
                            bg: "white",
                            color: "primary",
                            border: "2px solid #1f3b31",
                          }}
                          color="white"
                          width="full"
                          fontFamily="primary"
                        >
                          Ingresar
                        </Button>
                      </Flex>
                    </form>
                  )}
                </Formik>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
