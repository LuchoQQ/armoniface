import React from "react";
import type { Pdf } from "../../types";
import { Flex, Heading, Icon, Link, Button } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
import ChakraNextImage from "./ChakraNextImage";

type PdfCardProps = {
    pdf: Pdf | undefined;
};

const PdfCard: React.FC<PdfCardProps> = ({pdf}) => {
  const seePdfUrl = pdf?.pdfUrl;
  const downloadPdfUrl = pdf?.pdfUrl.replace("dl=0", "dl=1");

  return (
    <Flex
      key={pdf?._id}
      flexDir="column"
      w="250px"
      minH="370px"
      align="center"
      bg="white"
    >
      <ChakraNextImage src="/assets/pdflogo.webp" w="250px" h="200px" />
      <Flex
        flexDir="column"
        align="center"
        justify="space-evenly"
        h="170px"
        w="100%"
        p="4"
      >
        <Heading
          as="h3"
          mt="2"
          fontSize={{ base: "xl", xl: "2xl" }}
          textAlign="center"
          w="100%"
        >
          {pdf?.pdfTitle}
        </Heading>
        <Flex gap="2" mt="4">
          <Link href={seePdfUrl} isExternal>
            <Button variant="ghost">
              <Icon as={AiOutlineEye} h="5" w="5" />
            </Button>
          </Link>
          <Link href={downloadPdfUrl} isExternal>
            <Button variant="ghost">
              <Icon as={AiOutlineDownload} h="5" w="5" />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PdfCard;
