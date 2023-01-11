import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";

type Props = {
    path: string;
    text: string;
};

const NavbarLinkScroll: React.FC<Props> = ({ path, text }) => {
    const router = useRouter();

    return (
        <>
            <Box as={Link} to={path} spy={true} smooth={true} duration={500} cursor='pointer'>
                {text}
            </Box>
        </>
    );
};

export default NavbarLinkScroll;
