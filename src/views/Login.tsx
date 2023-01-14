import React from "react";
import {
    Flex,
    Image,
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Checkbox,
    Button,
    theme,
    Text,
    useToast,
    Theme,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import Router from "next/router";
import ChakraNextImage from "../components/ChakraNextImage";
import Link from "next/link";

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
                    title: "An error occurred.",
                    description: res.error,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            }
            toast({
                title: "Login sucessfull",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            setLoading(false);
        });
    };
    const { data: session, status }: any = useSession();
   

    return (
        <>
            <Flex
                justifyContent="center"
                bg="linear-gradient(143deg, rgba(40,110,84,1) 16%, rgba(31,59,49,1) 100%)"
            >
                <Flex
                    w={{ base: "", sm: "50%" }}
                    h="100vh"
                    justifyContent="center"
                    alignItems="center"
                >
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
                                            fontFamily='secondary'
                                        >
                                            <FormControl>
                                                <FormLabel htmlFor="email">
                                                    Correo
                                                </FormLabel>
                                                <Field
                                                    as={Input}
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    variant="filled"
                                                    fontFamily='primary'
                                                />
                                            </FormControl>
                                            <FormControl
                                                isInvalid={
                                                    !!errors.password &&
                                                    touched.password
                                                }
                                            >
                                                <FormLabel htmlFor="password" fontFamily='secondary'>
                                                    Contraseña
                                                </FormLabel>
                                                <Field
                                                    as={Input}
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    variant="filled"
                                                    validate={(
                                                        value: string
                                                    ) => {
                                                        let error;
                                                        if (value.length <= 5) {
                                                            error =
                                                                "Password must contain at least 6 characters";
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>
                                                    {errors.password}
                                                </FormErrorMessage>
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
                                                fontFamily='primary'
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
                <Flex
                    display={{ base: "none", lg: "block" }}
                    w="50%"
                    h="100vh"
                    justifyContent="center"
                    alignContent="center"
                    position="relative"
                    backgroundImage={`url("/assets/armonilogin.jpg")`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                >
                    <ChakraNextImage
                        src="/assets/logo.webp"
                        alt="logo"
                        fit="contain"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="250px"
                        h="200px"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default Login;
