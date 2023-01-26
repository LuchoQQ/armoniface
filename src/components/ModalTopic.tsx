import {
    Box,
    Button,
    Checkbox,
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
    Select,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React, { useEffect } from "react";
import API from "../utils/API";
import { Course, Topic } from "../../types";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    setTopics: React.Dispatch<React.SetStateAction<Topic[]>>;
    topics: Topic[];
};

const ModalTopic: React.FC<Props> = ({
    onClose,
    isOpen,
    setTopics,
    topics,
}) => {
    useEffect(() => {
        API.getTopics()
            .then((res: any) => {
                setTopics(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const toast = useToast()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Tema</ModalHeader>
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
                                    }}
                                    onSubmit={async (values) => {
                                        API.createTopic(values)
                                            .then((res: any) => {
                                                toast({
                                                    title: "Tema creado exitosamente",
                                                    status: "success",
                                                    duration: 3000,
                                                });
                                                setTopics([
                                                    ...topics,
                                                    res.data,
                                                ]);
                                                onClose();
                                            })
                                            .catch((err) => {
                                                toast({
                                                    title: "Error al crear Tema",
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
                                                        Titulo
                                                    </FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="title"
                                                        name="title"
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

export default ModalTopic;
