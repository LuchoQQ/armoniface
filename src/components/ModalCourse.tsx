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
import { AxiosResponse } from "axios";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
    courses: Course[];
};

const ModalCourse: React.FC<Props> = ({
    onClose,
    isOpen,
    setCourses,
    courses,
}) => {
    const [topics, setTopics] = React.useState<Topic[]>([]);
    useEffect(() => {
        API.getTopics()
            .then((res: any) => {
                setTopics(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const [checkbox, setCheckbox] = React.useState(false);
    const toast = useToast();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear curso</ModalHeader>
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
                                                setCourses([
                                                    ...courses,
                                                    res.data,
                                                ]);
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

                                                <FormControl>
                                                    <FormLabel htmlFor="topic">
                                                        Tema
                                                    </FormLabel>
                                                    <Field
                                                        as={Select}
                                                        id="topic"
                                                        name="topic"
                                                        type="text"
                                                        variant="filled"
                                                        placeholder="Selecciona un tema"
                                                    >
                                                        {topics.map(
                                                            (
                                                                topic: Topic,
                                                                key
                                                            ) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            key
                                                                        }
                                                                        value={
                                                                            topic.title
                                                                        }
                                                                    >
                                                                        {
                                                                            topic.title
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </Field>
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
                                                        required={true}
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
