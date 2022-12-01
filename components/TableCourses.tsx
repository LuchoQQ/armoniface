import React from "react";
import {
    Button,
    Flex,
    Icon,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";
import { Course } from "../types";
import ModalCourse from "./ModalCourse";
import AddButton from "./AddButton";

type Props = {
    courses: Course[];
};

const TableCourses: React.FC<Props> = ({ courses }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const theme: any = useTheme();
    return (
        <>
            <ModalCourse isOpen={isOpen} onClose={onClose} />

            <AddButton onOpen={onOpen} title="Agregar Curso" />
            <TableContainer w="100%">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses?.map((course) => {
                            return (
                                <Tr>
                                    <>
                                        <Td>{course.title}</Td>
                                        <Td>{course.description}</Td>
                                        <Td>
                                            <Icon
                                                as={ImNewTab}
                                                fontSize="2xl"
                                            />
                                        </Td>
                                        <Td>
                                                <Icon
                                                    as={BsTrash}
                                                    fontSize="2xl"
                                                />
                                        </Td>
                                        <Td>
                                            <Icon
                                                as={AiOutlineEdit}
                                                fontSize="2xl"
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
