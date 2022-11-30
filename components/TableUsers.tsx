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
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";
import { User } from "../types";

type Props = {
    users: User[];
};

const TableUser: React.FC<Props> = ({ users }) => {
    const theme: any = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        a
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex px="2rem" py="1rem" onClick={onOpen}>
                    <Text
                        fontFamily={theme.fonts.tertiary}
                        border="1px solid green"
                        px="1rem"
                        py=".5rem"
                        rounded="20px"
                    >
                        Agregar usuario
                    </Text>
            </Flex>
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
                        {users?.map((user) => {
                            return (
                                <Tr>
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
                                            <Icon as={BsTrash} fontSize="2xl" />
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
