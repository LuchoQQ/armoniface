import { Flex, useToast } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TableUser from "../../components/TableUsers";
import BackofficeItem from "../../components/BackofficeItem";
import { FaChalkboardTeacher } from "react-icons/fa";
import TableCourses from "../../components/TableCourses";
import { User, Course } from "../../../types";
import API from "../../utils/API";
const Backoffice: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState("Users");
    const [users, setUsers] = useState<User[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    useEffect(() => {
        const users = API.getUsers().then((res: any) => {
            setUsers(res.data);
        });

        const courses = API.getCourses().then((res: any) => {
            setCourses(res.data);
        });
    }, []);

    return (
        <>
            <Navbar />
            <Flex w="100%" h="100vh">
                <Sidebar open={open} setOpen={setOpen} />
                <Container open={open} setOpen={setOpen}>
                    <Flex flexDir="column">
                        <Flex w="100%" py="2rem" gap="3rem" px="2rem">
                            <BackofficeItem
                                icon={AiOutlineUsergroupAdd}
                                text="Users"
                                setCategory={setCategory}
                            />
                            <BackofficeItem
                                icon={FaChalkboardTeacher}
                                text="Courses"
                                setCategory={setCategory}
                            />
                        </Flex>
                        {category === "Users" && (
                            <TableUser users={users} setUsers={setUsers} />
                        )}
                        {category === "Courses" && (
                            <TableCourses courses={courses} setCourses={setCourses}/>
                        )}
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
