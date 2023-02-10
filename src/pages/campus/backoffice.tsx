import { Flex } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TableUser from "../../components/TableUsers";
import BackofficeItem from "../../components/BackofficeItem";
import { FaChalkboardTeacher } from "react-icons/fa";
import TableCourses from "../../components/TableCourses";
import { User, Course, Topic } from "../../../types";
import API from "../../utils/API";
import { useRouter } from "next/router";
import TableTopics from "../../components/TableTopics";

const Backoffice: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Usuarios");
  const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  useEffect(() => {
    API.getUsers().then((res: any) => {
      setUsers(res.data);
    });

    API.getCourses().then((res: any) => {
      setCourses(res.data);
    });

    API.getTopics().then((res: any) => {
      setTopics(res.data);
    });
  }, []);

  const router = useRouter();
  const { data: session, status }: any = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  useEffect(() => {
    console.log(session);
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
                text="Usuarios"
                setCategory={setCategory}
                category={category}
              />
              <BackofficeItem
                icon={FaChalkboardTeacher}
                text="Cursos"
                setCategory={setCategory}
                category={category}
              />
              <BackofficeItem
                icon={FaChalkboardTeacher}
                text="Temas"
                setCategory={setCategory}
                category={category}
              />
            </Flex>
            {category === "Usuarios" && (
              <TableUser users={users} setUsers={setUsers} />
            )}
            {category === "Cursos" && (
              <TableCourses courses={courses} setCourses={setCourses} />
            )}
            {category === "Temas" && (
              <TableTopics topics={topics} setTopics={setTopics} />
            )}
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  let role = "";

  if (session) {
    //@ts-ignore
    const data = await API.getUserById(session?.user.id);
    //@ts-ignore

    role = data.data.role;
  }

  console.log(role);
  if (role !== "admin") {
    return {
      redirect: {
        destination: "/campus",
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
