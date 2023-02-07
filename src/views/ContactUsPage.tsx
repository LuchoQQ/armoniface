import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { FormEventHandler, useState } from "react";
import { BsEnvelope, BsInstagram, BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactUsPage: React.FC = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [button, setButton] = useState(false);
  const toast = useToast();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setButton(true);
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        "template_i039ffz",
        `#contact_form`,
        `${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
          toast({
            title: "Enviado exitosamente!",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      })
      .catch((res) => console.log(res));
  };

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundImage: `url("/assets/contact.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        p={{ base: 5, lg: 16 }}
        w="100%"
        h="100%"
        backdropFilter="blur(10px)"
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Contáctanos
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://www.instagram.com/armonifacectes/">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsInstagram size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                minW="450px"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Tu Nombre" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsEnvelope />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Tu Correo"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Tu Mensaje..."
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    w="100%"
                    disabled={button}                
                  >
                    Enviar
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUsPage;
