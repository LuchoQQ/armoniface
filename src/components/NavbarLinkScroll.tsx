import { Box, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/ActiveClass.module.css";
type Props = {
  path: string;
  text: string;
};

const NavbarLinkScroll: React.FC<Props> = ({ path, text }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Box
        as={Link}
        to={path}
        spy={true}
        smooth={true}
        duration={500}
        cursor='pointer'
        // @ts-ignore
        activeStyle={{
          color: theme.colors.primary,
          fontWeight: 'bold',
          transition: 'all 0.2s ease'
        }}
        //cursor="pointer"
        //fontSize="lg"
        //|mx="1"
        //_hover={{ color: "#cf962d" }}
      >
        {text}
      </Box>
    </>
  );
};

export default NavbarLinkScroll;
