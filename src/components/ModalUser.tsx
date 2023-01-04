import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { Field, Formik } from "formik";
import React from "react";
import { User } from "../../types";
import API from "../utils/API";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    users: User[];
};

const ModalUser: React.FC<Props> = ({ onClose, isOpen, setUsers, users }) => {
    const theme: any = useTheme();

    const toast = useToast();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear usuario</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            bg="gray.100"
                            align="center"
                            justify="center"
                            py="1rem"
                        >
                            <Box bg="white" p={6} rounded="md" w={64}>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        password: "",
                                    }}
                                    onSubmit={async (values) => {
                                        API.createUser(values)
                                            .then((res: any) => {
                                                toast({
                                                    title: "Usuario creado exitosamente",
                                                    status: "success",
                                                    duration: 3000,
                                                });
                                                onClose();
                                                // add the new user to the array of users in the parent component
                                                setUsers([...users, res.data]);
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
                                            <VStack
                                                spacing={4}
                                                align="flex-start"
                                            >
                                                <FormControl>
                                                    <FormLabel htmlFor="name">
                                                        Nombre
                                                    </FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="name"
                                                        name="name"
                                                        type="name"
                                                        variant="filled"
                                                    />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel htmlFor="email">
                                                        Correo
                                                    </FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="Email"
                                                        name="email"
                                                        type="email"
                                                        variant="filled"
                                                        /*  validate={(value: string) => {
                                                            let error;

                                                            if (
                                                                value.length < 5
                                                            ) {
                                                                error =
                                                                    "Password must contain at least 6 characters";
                                                            }

                                                            return error;
                                                        }} */
                                                    />
                                                    <FormErrorMessage>
                                                        {errors.email}
                                                    </FormErrorMessage>
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

                                                            if (
                                                                value.length < 5
                                                            ) {
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
                                                    colorScheme="green"
                                                    width="full"
                                                >
                                                    Crear
                                                </Button>
                                            </VStack>
                                        </form>
                                    )}
                                </Formik>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalUser;
