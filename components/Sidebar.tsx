import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import SidebarLink from "./SidebarLink";
import { BsBook } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
    const theme: any = useTheme();
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
                transition="all 0.5s ease"
            >
                <Flex
                    pl="1rem"
                    mb="2rem"
                    left={open ? "70%" : "0"}
                    transition="all .5s ease"
                    position="relative"
                >
                    <Icon
                        cursor='pointer'
                        as={FaBars}
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
