import React from "react";
import {
    Icon,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";
import { Course } from "../../types";
import ModalCourse from "./ModalCourse";
import AddButton from "./AddButton";
import API from "../utils/API";

type Props = {
    courses: Course[];
    setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
};

const TableCourses: React.FC<Props> = ({ courses, setCourses }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const theme: any = useTheme();
    const toast = useToast();
    const onDelete = (id: string) =>
        API.deleteCourse(id)
            ?.then((res) => {
                toast({
                    title: "Curso eliminado",
                    status: "success",
                });
                const index = courses.findIndex((course) => course._id === id);
                const newCourses = [...courses];
                newCourses.splice(index, 1);
                setCourses(newCourses);
                // find the index of the user with the id that was deleted and remove it from the array
            })
            .catch((err) => {
                toast({
                    title: "Error al crear usuario",
                    description: err.message,
                });
            });
    return (
        <>
            <ModalCourse
                isOpen={isOpen}
                onClose={onClose}
                setCourses={setCourses}
                courses={courses}
            />

            <AddButton onOpen={onOpen} title="Agregar Curso" />
            <TableContainer w="100%">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Titulo</Th>
                            <Th>Tema</Th>
                            <Th>Borrar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses?.map((course, key) => {
                            return (
                                <Tr
                                    key={key}
                                    position="relative"
                                    _after={{
                                        content: '""',

                                        position: "absolute",
                                        h: "1px",
                                        w: "80%",
                                        left: "10%",
                                        top: "100%",
                                        bg: "#cccccc",
                                    }}
                                >
                                    <>
                                        <Td>{course?.title}</Td>
                                        <Td>{course?.topic}</Td>
                                        <Td>
                                            <Icon
                                                as={BsTrash}
                                                fontSize="2xl"
                                                cursor="pointer"
                                                _hover={{ color: "#cf962d" }}
                                                onClick={() =>
                                                    onDelete(course._id)
                                                }
                                            />
                                        </Td>
                                    </>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableCourses;
