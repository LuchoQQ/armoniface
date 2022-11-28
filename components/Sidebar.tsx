import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import SidebarLink from "./SidebarLink";
import { BsBook } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
const Sidebar: React.FC = () => {
    const theme: any = useTheme();
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Flex
                w={open ? "15rem" : "4rem"}
                h="90vh"
                bg={theme.colors.primary}
                flexDir="column"
                py="2rem"
                gap="2rem"
                mt="15vh"
                position="fixed"
                transition='all 0.5s ease'
            >
                <Flex pl='1rem' mb='2rem' left={open ? '70%' : '0'} transition='all .5s ease' position='relative'>
                    <Icon as={FaBars} fill="#f1f2f3" fontSize="2xl" onClick={() => setOpen(!open)}/>
                </Flex>
                <SidebarLink
                    icon={AiOutlineHome}
                    path="/"
                    text="Home"
                    display={open}
                />
                <SidebarLink
                    icon={BsBook}
                    path="/courses"
                    text="Courses"
                    display={open}
                />
                <SidebarLink
                    icon={RiAdminLine}
                    path="/backoffice"
                    text="Backoffice"
                    display={open}
                />
            </Flex>
        </>
    );
};

export default Sidebar;
