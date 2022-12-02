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
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineFolderAdd, AiOutlineMail } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Container from "../../src/components/Container";
import Navbar from "../../src/components/Navbar";
import Sidebar from "../../src/components/Sidebar";
import { Course, User } from "../../types";
import API from "../../src/utils/API";
const UserProfile: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<User>();
    const [courses, setCourses] = useState<Course[]>([]);
    const [myCourses, setMyCourses] = useState<Course[]>([]);
    const { pid } = router.query;
    const [open, setOpen] = useState(false);

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
                console.log(res.data);
            });
        }
    }, [pid]);
    return (
        <>
            <Navbar />
            <Sidebar open={open} setOpen={setOpen} />
            <Flex w="100%">
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
                                        alt='profile'
                                    />
                                ) : (
                                    <Image
                                        src={user?.avatar}
                                        width={150}
                                        height={150}
                                        style={{ borderRadius: "50%" }}
                                        alt='profile'
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
                                    {myCourses.map((course) => {
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
                                    {courses.map((course) => {
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
                                                                    user?._id,
                                                                    course
                                                                ).then(
                                                                    (
                                                                        res: any
                                                                    ) => {
                                                                        console.log(
                                                                            res
                                                                        );
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
