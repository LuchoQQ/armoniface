import { Button, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";

type Props = {
  title: string;
  onOpen: () => void;
};

const AddButton: React.FC<Props> = ({ onOpen, title }) => {
  const theme: any = useTheme();
  return (
    <>
      <Flex ml="4" py="1rem" onClick={onOpen}>
        <Button
          px="1rem"
          py=".5rem"
          w="160px"
          h="50px"
          rounded="20px"
          transition="all .2s ease"
          bg="secondary"
          color="fontSecondary"
          _hover={{ bg: "#e09e24" }}
          _active={{ bg: "" }}
          fontFamily="tertiary"
        >
          {title}
        </Button>
      </Flex>
    </>
  );
};

export default AddButton;
