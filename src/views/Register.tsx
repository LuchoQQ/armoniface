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
import ChakraNextImage from "../components/ChakraNextImage";
import API from "../utils/API";

const Register: NextPage = (props) => {
    const toast = useToast();
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
                                    name: "",
                                    email: "",
                                    password: "",
                                    registerCode: "",
                                }}
                                onSubmit={async (values) => {
                                    API.createUser(values)
                                        .then((res: any) => {
                                            toast({
                                                title: "Usuario creado exitosamente",
                                                status: "success",
                                                duration: 3000,
                                            });
                                            // Router.push("/login");
                                        })
                                        .catch((err) => {
                                            toast({
                                                title: "Error al crear usuario",
                                                description: err.message,
                                            });
                                        });
                                }}
                            >
                                {({ handleSubmit, errors, touched }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Flex
                                            gap={4}
                                            flexDirection="column"
                                            align="flex-start"
                                        >
                                            <FormControl>
                                                <FormLabel
                                                    htmlFor="name"
                                                    fontSize="sm"
                                                >
                                                    Nombre Completo
                                                </FormLabel>
                                                <Field
                                                    as={Input}
                                                    id="name"
                                                    name="name"
                                                    type="name"
                                                    variant="filled"
                                                    size="sm"
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor="email" fontSize='sm'>
                                                    Correo Electrónico
                                                </FormLabel>
                                                <Field
                                                    as={Input}
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    size="sm"
                                                    variant="filled"
                                                />
                                            </FormControl>
                                            <FormControl
                                                isInvalid={
                                                    !!errors.password &&
                                                    touched.password
                                                }
                                            >
                                                <FormLabel htmlFor="password" fontSize='sm'>
                                                    Contraseña
                                                </FormLabel>
                                                <Field
                                                    as={Input}
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    size="sm"
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
                                            <FormControl
                                                isInvalid={
                                                    !!errors.registerCode &&
                                                    touched.registerCode
                                                }
                                            >
                                                <FormLabel htmlFor="registerCode" fontSize='sm'>
                                                    Código de registro
                                                </FormLabel>
                                                <Field
                                                    as={Input}
                                                    id="registerCode"
                                                    name="registerCode"
                                                    type="registerCode"
                                                    size="sm"
                                                    variant="filled"
                                                    validate={(
                                                        value: string
                                                    ) => {
                                                        let error;
                                                        if (
                                                            value !== "armonia"
                                                        ) {
                                                            error =
                                                                "Código de registro incorrecto";
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>
                                                    {errors.registerCode}
                                                </FormErrorMessage>
                                            </FormControl>
                                            <Button
                                                type="submit"
                                                bg="linear-gradient(143deg, rgba(40,110,84,1) 16%, rgba(31,59,49,1) 100%)"
                                                _hover={{
                                                    bg: "white",
                                                    color: "primary",
                                                    border: "2px solid #1f3b31",
                                                }}
                                                color="white"
                                                width="full"
                                            >
                                                Registrarme
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

export default Register;
