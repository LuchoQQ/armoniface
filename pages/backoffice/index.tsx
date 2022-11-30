import {
    Flex,
    Icon,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineUsergroupAdd } from "react-icons/ai";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { ImNewTab } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import TableUser from "../../components/TableUsers";
import BackofficeItem from "../../components/BackofficeItem";
import { FaChalkboardTeacher } from "react-icons/fa";

const Backoffice: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState("Users");
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const users = axios
            .get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users`)
            .then((res) => {
                setUsers(res.data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <Flex w="100vw">
                <Sidebar open={open} setOpen={setOpen} />
                <Container open={open} setOpen={setOpen}>
                    <Flex flexDir="column">
                        <Flex w="100%" py="2rem" gap="3rem" px='2rem'  >
                            <BackofficeItem icon={AiOutlineUsergroupAdd} text="Users" setCategory={setCategory} />
                            <BackofficeItem icon={FaChalkboardTeacher} text="Courses" setCategory={setCategory} />
                        </Flex>
                            { category === "Users" && <TableUser users={users} /> }
                    </Flex>
                </Container>
            </Flex>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    const role = "admin";

    if (role !== "admin") {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    } else {
        return {
            props: {
                session,
            },
        };
    }
}

export default Backoffice;
