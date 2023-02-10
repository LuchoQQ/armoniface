import {
  Grid,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import NavbarIndex from "../components/NavbarIndex";
import IndexPage from "../views/IndexPage";
import AboutPage from "../views/AboutPage";
import CoursesPage from "../views/CoursesPage";

import ContactUsPage from "../views/ContactUsPage";
const Home: NextPage = () => {

  return (
    <>
      <Grid justifyContent="center" overflow="hidden">
        <NavbarIndex />
        <IndexPage />
        <AboutPage />
        <CoursesPage />
        <ContactUsPage />
      </Grid>
    </>
  );
};

export async function getServerSideProps() {
  const session = await getSession();

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
/* 
  return {
    props: {
      session,
    },
  }; */
}

export default Home;
