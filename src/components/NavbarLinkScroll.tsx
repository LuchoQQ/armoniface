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
            <Box as={Link} to={path} spy={true} smooth={true} duration={500} cursor='pointer' fontSize="lg" color="fontSecondary" mx="1" _hover={{color: "#cf962d"}}>
                {text}
            </Box>
        </>
    );
};

export default NavbarLinkScroll;
