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
import { Course, Topic } from "../../types";
import ModalCourse from "./ModalCourse";
import AddButton from "./AddButton";
import API from "../utils/API";
import ModalTopic from "./ModalTopic";

type Props = {
    topics: Topic[];
    setTopics: React.Dispatch<React.SetStateAction<Topic[]>>;
};

const TableTopics: React.FC<Props> = ({ topics, setTopics }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const theme: any = useTheme();
    const toast = useToast();
    const onDelete = (id: string) =>
        API.deleteTopic(id)
            ?.then((res) => {
                toast({
                    title: "Curso eliminado",
                    status: "success",
                });
                const index = topics.findIndex((topic) => topic._id === id);
                const newTopics = [...topics];
                newTopics.splice(index, 1);
                setTopics(newTopics);
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
            <ModalTopic
                isOpen={isOpen}
                onClose={onClose}
                setTopics={setTopics}
                topics={topics}
            />

            <AddButton onOpen={onOpen} title="Agregar Tema" />
            <TableContainer w="100%">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Titulo</Th>
                            <Th>Tema</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {topics?.map((topic, key) => {
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
                                        <Td>{topic?.title}</Td>
                                        <Td>
                                            <Icon
                                                as={ImNewTab}
                                                fontSize="2xl"
                                                cursor="pointer"
                                                _hover={{ color: "#cf962d" }}
                                            />
                                        </Td>
                                        <Td>
                                            <Icon
                                                as={BsTrash}
                                                fontSize="2xl"
                                                cursor="pointer"
                                                _hover={{ color: "#cf962d" }}
                                                onClick={() =>
                                                    onDelete(topic._id)
                                                }
                                            />
                                        </Td>
                                        <Td>
                                            <Icon
                                                as={AiOutlineEdit}
                                                fontSize="2xl"
                                                cursor="pointer"
                                                _hover={{ color: "#cf962d" }}
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

export default TableTopics;
