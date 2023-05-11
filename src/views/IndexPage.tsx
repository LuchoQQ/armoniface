import {
  Button,
  Flex,
  Icon,
  Text,
  chakra,
  keyframes,
  shouldForwardProp,
  useTheme,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChakraNextImage from "../components/ChakraNextImage";
import { isValidMotionProp, motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const IndexPage: React.FC = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  const theme: any = useTheme();

  const animationKeyframes = keyframes`
    0% { transform: scale(1) rotate(0); border-radius: 20%;  x: '500px'}
    100% { transform: scale(1) rotate(360deg); border-radius: 20%; x: '0px' }
  `;
  const animation = `${animationKeyframes} 90s linear infinite`;
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <Flex
        w="100vw"
        minH={{ base: "100vh", "2xl": "85vh" }}
        position="relative"
        id="inicio"
      >
        <ChakraNextImage src="/assets/bg.jpeg" position="absolute" />
        <Flex
          position="relative"
          w="100%"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          <Flex
            w={["100%", "100%", "50%", "50%", "50%"]}
            h={{ base: "50%", md: "100%" }}
            flexDir="column"
            justifyContent="center"
            alignItems={[
              "center",
              "center",
              "center",
              "center",
              "flex-end",
              "center",
            ]}
            pt={["5rem", "5rem", "5rem", "0rem", "0rem"]}
          >
            <Text
              fontFamily="primary"
              fontSize={["2xl", "3xl", "2xl", "4xl", "5xl"]}
              color="#f1f2f3"
            >
              <span style={{ fontWeight: "bold" }}>Capacitate</span> en <br />
              <span
                style={{
                  fontWeight: "900",
                  fontFamily: theme.fonts.secondary,
                }}
              >
                ARMONIZACIÓN FACIAL
              </span>{" "}
              <br />
              con <span style={{ fontWeight: "bold" }}>especialistas</span> del
              área
              <br />
              <Link href="#courses">
              <Button
                fontSize="sm"
                bg="#fff"
                color="secondary"
                fontFamily="secondary"
                fontWeight="regular"
                mt="4"               
              >
                Ver más
                <Icon ml="1rem" as={AiOutlineArrowRight} fontSize="lg" />
              </Button>
              </Link>
            </Text>
          </Flex>
          <Flex
            w={["100%", "100%", "50%", "50%", "50%"]}
            h={{ base: "50%", md: "100%" }}
            flexDir="column"
            justifyContent="end"
            zIndex={2}
          >
            <ChakraNextImage
              src="/assets/indexpic.png"
              h={{ base: "500px", md: "520px", lg: "650px", "2xl": "950px" }}
              fit="contain"
              alt="logo pic"                          
            />
          </Flex>
        </Flex>
        <Flex
          w="100%"
          bg="transparent"
          position="absolute"
          alignSelf="flex-end"
          display={{base: "none", sm: "flex"}}
        >
          <ChakraBox
            animate={{
              x: [0, -width],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            left="0"
            w="100%"
          >
            <Flex
              h="20vh"
              alignItems="center"
              gap="5rem"
              fontSize="9xl"
              fontFamily={theme.fonts.secondary}
              color="rgba(255,255,255,0.03)"
              whiteSpace="nowrap"
              w="100%"
            >
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
              <Text>ARMONIFACE</Text>
            </Flex>
          </ChakraBox>
        </Flex>
      </Flex>
    </>
  );
};

export default IndexPage;
