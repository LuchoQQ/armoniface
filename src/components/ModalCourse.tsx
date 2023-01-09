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
    VStack,
    useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React from "react";
import API from "../utils/API";
import { Course } from "../../types";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
    courses: Course[]
};

const ModalCourse: React.FC<Props> = ({ onClose, isOpen, setCourses, courses }) => {
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
                                        title: "",
                                        topic: "",
                                        url: "",
                                    }}
                                    onSubmit={async (values) => {
                                        API.createCourse(values)
                                            .then((res: any) => {
                                                toast({
                                                    title: "Course creado exitosamente",
                                                    status: "success",
                                                    duration: 3000,
                                                });
                                                console.log(res.data)
                                                setCourses([...courses, res.data])
                                                onClose();
                                                
                                            })
                                            .catch((err) => {
                                                toast({
                                                    title: "Error al crear Course",
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
                                                    <FormLabel htmlFor="title">
                                                        Title
                                                    </FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="title"
                                                        name="title"
                                                        type="text"
                                                        variant="filled"
                                                    />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel htmlFor="topic">
                                                        Topic
                                                    </FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="topic"
                                                        name="topic"
                                                        type="text"
                                                        variant="filled"
                                                    />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel htmlFor="name">
                                                        URL
                                                    </FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="url"
                                                        name="url"
                                                        type="text"
                                                        variant="filled"
                                                    />
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

export default ModalCourse;
