import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import SidebarLink from "./SidebarLink";
import { BsBook } from "react-icons/bs";
import { RiAdminLine, RiLogoutBoxLine } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import { useSession, signOut } from "next-auth/react";
type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
    const { data: session, status } = useSession();

    return (
        <>
            <Flex
                w={open ? "15rem" : "4rem"}
                h="100vh"
                bg="primary"
                flexDir="column"
                py="2rem"
                gap="2rem"
                mt="80px"
                position="fixed"
                transition="all 0.5s ease"
            >
                <Flex
                    pl="1rem"
                    mb="1rem"
                    left={open ? "70%" : "0"}
                    transition="all .5s ease"
                    position="relative"
                >
                    <Icon
                        cursor="pointer"
                        as={HiBars3}
                        fill="#f1f2f3"
                        fontSize="2xl"
                        onClick={() => setOpen(!open)}
                        transform={open ? "rotate(90deg)" : "rotate(0)"}
                        transition="all .2s ease"
                    />
                </Flex>
                <SidebarLink
                    icon={AiOutlineHome}
                    path="/"
                    text="Inicio"
                    display={open}
                />
                <SidebarLink
                    icon={BsBook}
                    path="/courses"
                    text="Cursos"
                    display={open}
                />
                {session?.user?.email === "admin@admin.com" && (
                    <SidebarLink
                        icon={RiAdminLine}
                        path="/backoffice"
                        text="Administrar"
                        display={open}
                    />
                )}
                <SidebarLink
                    icon={RiLogoutBoxLine}
                    path="/"
                    text="Salir"
                    display={open}
                    onClick={() => signOut()}
                />
                {/* <Flex>
                <Icon as={AiOutlineHome} fill="#f1f2f3" fontSize="2xl" onClick={() => signOut()}/>
                
                </Flex> */}
            </Flex>
        </>
    );
};

export default Sidebar;
