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
import { signIn, signOut, useSession } from "next-auth/react";
import Router from "next/router";

const HomeSignIn: NextPage = (props) => {
    const [width, setWidth] = useState(0);
    const { data: session, status } = useSession();
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const theme: any = useTheme();

    const toast = useToast();
    const onSubmit = async (values: { email: string; password: string }) => {
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
        });
    };
    return (
        <>
            <Flex justifyContent="center">
                <Flex
                    w={width / 2}
                    h="100vh"
                    justifyContent="center"
                    alignItems="center"
                    bg={theme.colors.primary}
                >
                    <Flex>
                        <Box
                            bg="white"
                            p={6}
                            rounded="md"
                            w={64}
                            fontFamily={theme.fonts.tertiary}
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
                                        <VStack spacing={4} align="flex-start">
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
                                                />
                                            </FormControl>
                                            <FormControl
                                                isInvalid={
                                                    !!errors.password &&
                                                    touched.password
                                                }
                                            >
                                                <FormLabel htmlFor="password">
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
                                                type="submit"
                                                colorScheme="purple"
                                                width="full"
                                            >
                                                LogIn
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    signOut();
                                                }}
                                                colorScheme="purple"
                                                width="full"
                                            >
                                                LogOut
                                            </Button>
                                        </VStack>
                                    </form>
                                )}
                            </Formik>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    w={width / 2}
                    h="100vh"
                    justifyContent="center"
                    alignContent="center"
                >
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        w="200px"
                        fit="contain"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export default HomeSignIn;
