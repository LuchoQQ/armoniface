import {
    Button,
    Flex,
    Icon,
    Table,
    TableContainer,
    Tbody,
    Td,
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
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    useToast,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { Field, Formik } from "formik";
import Image from "next/image";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";
import { User } from "../types";
import API from "../utils/API";
import AddButton from "./AddButton";
import ModalUser from "./ModalUser";
type Props = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const TableUser: React.FC<Props> = ({ users, setUsers }) => {
    const theme: any = useTheme();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onDelete = (id: string) =>
        API.deleteUser(id)?.then((res) => {
            // find the index of the user with the id that was deleted and remove it from the array
            const index = users.findIndex((user) => user._id === id);
            const newUsers = [...users];
            newUsers.splice(index, 1);
            setUsers(newUsers);
            toast({
                title: "Usuario eliminado",
                status: "success",
            });
        });
    return (
        <>
            <ModalUser isOpen={isOpen} onClose={onClose} users={users} setUsers={setUsers}/>

            <AddButton onOpen={onOpen} title="Agregar Usuario" />
            <TableContainer w="100%">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Avatar</Th>
                            <Th>Nombre</Th>
                            <Th>Correo</Th>
                            <Th>Ver más</Th>
                            <Th>Borrar</Th>
                            <Th>Editar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users?.map((user, index) => {
                            return (
                                <Tr key={index}>
                                    <>
                                        <Td>
                                            <Image
                                                src={"/profile.svg"}
                                                alt="user avatar"
                                                width={50}
                                                height={50}
                                                style={{
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        </Td>
                                        <Td>{user.name}</Td>
                                        <Td>{user.email}</Td>
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
                                                onClick={() =>
                                                    onDelete(user._id)
                                                }
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

export default TableUser;
