import {
    Box,
    Flex,
    Icon,
    Image,
    Select,
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
    useToast,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineFolderAdd, AiOutlineMail } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Course, User } from "../../../types";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import API from "../../utils/API";
const UserProfile: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<User>();
    const [courses, setCourses] = useState<Course[]>([]);
    const [myCourses, setMyCourses] = useState<Course[]>([]);
    const { pid } = router.query;
    const [open, setOpen] = useState(false);

    const toast = useToast();
    const theme: any = useTheme();
    useEffect(() => {
        if (pid !== undefined) {
            API.getUserById(pid).then((res: any) => {
                setUser(res.data);
            });
            API.getCourses().then((res: any) => {
                setCourses(res.data);
            });

            API.getMyCoursesByUserId(pid).then((res: any) => {
                setMyCourses(res.data);
            });
        }
    }, [pid]);
    return (
        <>
            <Navbar />
            <Sidebar open={open} setOpen={setOpen} />
            <Flex w="100%" h="100vh">
                <Container open={open} setOpen={setOpen}>
                    <>
                        <Flex flexDir="column" w="100%" alignItems="center">
                            <Flex
                                fontFamily={theme.fonts.tertiary}
                                gap=".5rem"
                                p="2rem"
                                rounded="20px"
                                bg="#f1f2f3"
                                w="100%"
                            >
                                {user?.avatar === null ? (
                                    <Image
                                        src="/profile.svg"
                                        width={150}
                                        height={150}
                                        style={{ borderRadius: "50%" }}
                                        alt="profile"
                                    />
                                ) : (
                                    <Image
                                        src={user?.avatar}
                                        width={150}
                                        height={150}
                                        style={{ borderRadius: "50%" }}
                                        alt="profile"
                                    />
                                )}
                                <Flex flexDir="column">
                                    <Box>
                                        <Text fontSize="xl">{user?.name}</Text>
                                        <Text
                                            fontSize="sm"
                                            color="#404040"
                                            mb="1rem"
                                        >
                                            {user?._id}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Flex gap="1rem">
                                            <Icon
                                                as={MdOutlineAdminPanelSettings}
                                                fontSize="xl"
                                                alignSelf="center"
                                            />
                                            <Text fontSize="lg">
                                                {user?.role}
                                            </Text>
                                        </Flex>
                                        <Flex gap="1rem">
                                            <Icon
                                                as={AiOutlineMail}
                                                alignSelf="center"
                                            />
                                            <Text>{user?.email}</Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Text
                            px="1rem"
                            fontFamily={theme.fonts.tertiary}
                            mb="1rem"
                        >
                            My Courses
                        </Text>
                        <TableContainer>
                            <Table variant="simple">
                                <TableCaption></TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Titulo</Th>
                                        <Th>Descripcion</Th>
                                        <Th>Quitar</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr></Tr>
                                </Tbody>
                                <Tfoot>
                                    {myCourses?.map((course) => {
                                        return (
                                            <>
                                                <Tr>
                                                    <Th>
                                                        <Text>
                                                            {course?.title}
                                                        </Text>
                                                    </Th>
                                                    <Th>
                                                        <Text>
                                                            {
                                                                course?.description
                                                            }
                                                        </Text>
                                                    </Th>
                                                    <Th as={Flex}>
                                                        <Icon
                                                            fill="red"
                                                            as={BsTrash}
                                                            fontSize="2xl"
                                                            onClick={() => {
                                                                API.deleteCourseFromUser(
                                                                    pid,
                                                                    course._id
                                                                ).then(
                                                                    (
                                                                        res: any
                                                                    ) => {
                                                                        // pull the course from the list of courses
                                                                        const newCourses =
                                                                            myCourses.filter(
                                                                                (
                                                                                    c
                                                                                ) => {
                                                                                    return (
                                                                                        c._id !==
                                                                                        course._id
                                                                                    );
                                                                                }
                                                                            );
                                                                        setMyCourses(
                                                                            newCourses
                                                                        );
                                                                        toast({
                                                                            title: "Course removed",
                                                                            description:
                                                                                "The course was removed from the user",
                                                                            status: "error",
                                                                        });
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                    </Th>
                                                </Tr>
                                            </>
                                        );
                                    })}
                                    <Tr></Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                        <Text px="1rem" fontFamily={theme.fonts.tertiary}>
                            Add Courses
                        </Text>
                        <TableContainer>
                            <Table variant="simple">
                                <TableCaption></TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Titulo</Th>
                                        <Th>Descripcion</Th>
                                        <Th>Añadir</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr></Tr>
                                </Tbody>
                                <Tfoot>
                                    {courses?.map((course) => {
                                        return (
                                            <>
                                                <Tr>
                                                    <Th>
                                                        <Text>
                                                            {course?.title}
                                                        </Text>
                                                    </Th>
                                                    <Th>
                                                        <Text>
                                                            {
                                                                course?.description
                                                            }
                                                        </Text>
                                                    </Th>
                                                    <Th as={Flex}>
                                                        <Icon
                                                            as={
                                                                AiOutlineFolderAdd
                                                            }
                                                            fontSize="2xl"
                                                            fill="green"
                                                            onClick={() => {
                                                                API.addCourseToUser(
                                                                    pid,
                                                                    course._id
                                                                ).then(
                                                                    (
                                                                        res: any
                                                                    ) => {
                                                                        // add the course to the list of courses
                                                                        const newCourses =
                                                                            [
                                                                                ...myCourses,
                                                                                course,
                                                                            ];
                                                                        setMyCourses(
                                                                            newCourses
                                                                        );
                                                                        toast({
                                                                            title: "Course added",
                                                                            description:
                                                                                "The course was added",
                                                                            status: "success",
                                                                        });
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                    </Th>
                                                </Tr>
                                            </>
                                        );
                                    })}
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </>
                </Container>
            </Flex>
        </>
    );
};

export default UserProfile;
