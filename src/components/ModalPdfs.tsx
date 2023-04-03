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
import { Course, Pdf, Topic } from "../../types";
import { AxiosResponse } from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  courses: Course[];
  setPdfs: React.Dispatch<React.SetStateAction<Pdf[]>>;
  pdfs: Pdf[];
};

const ModalCourse: React.FC<Props> = ({
  onClose,
  isOpen,
  setCourses,
  courses,
  setPdfs,
  pdfs,
}) => {
  const [checkbox, setCheckbox] = React.useState(false);
  const toast = useToast();

  const addPdfToCourse = (values: {
    pdfTitle: string;
    pdfUrl: string;
    courseName: string;
  }) => {
    const courseOfPdf = courses.find(
      (course) => course.title === values.courseName
    );
    const courseOfPdfId = courseOfPdf?._id;

    API.addPdfToCourse(courseOfPdfId, values).then((res: any) => {
      setPdfs([...pdfs, res.data]);
      toast({
        title: "PDF agregado exitosamente",
        status: "success",
        duration: 3000,
      });
      onClose();
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m="auto">
          <ModalHeader borderBottom="1px solid grey">Crear curso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center" justify="center" py="1rem">
              <Box bg="white" py="4" rounded="md" w={64}>
                <Formik
                  initialValues={{
                    pdfTitle: "",
                    courseName: "",
                    pdfUrl: "",
                  }}
                  onSubmit={(values) => {
                    console.log("valuesOnSubmit", values);
                    addPdfToCourse(values);
                  }}
                >
                  {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={4} align="flex-start">
                        <FormControl isRequired>
                          <FormLabel htmlFor="pdfTitle">
                            Título del PDF
                          </FormLabel>
                          <Field
                            as={Input}
                            id="pdfTitle"
                            name="pdfTitle"
                            type="text"
                            variant="filled"
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel htmlFor="courseName">
                            ¿A qué curso quieres asignar el PDF?
                          </FormLabel>
                          <Field
                            as={Select}
                            id="courseName"
                            name="courseName"
                            type="text"
                            variant="filled"
                            placeholder="Selecciona un curso"
                          >
                            {courses.map((course: Topic, key) => {
                              return (
                                <option key={key} value={course.title}>
                                  {course.title}
                                </option>
                              );
                            })}
                          </Field>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="pdfUrl">PDFURL</FormLabel>
                          <Field
                            as={Input}
                            id="pdfUrl"
                            name="pdfUrl"
                            type="text"
                            variant="filled"
                            required={true}
                          />
                        </FormControl>
                        <Button type="submit" colorScheme="green" width="full">
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
