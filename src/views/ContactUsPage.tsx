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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState(false);
  const toast = useToast();
  const templateParams = {
    from_name: name,
    email: email,
    message: message,
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setButton(true);
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        "template_52sowpt",
        templateParams,
        `${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Enviado exitosamente!",
            status: "success",
            duration: 7000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      })
      .catch((res) => console.log(res));
  };

  return (
    <Flex align="center" justify="center" bg="background" id="contact">
      <Box
        borderRadius="lg"
        p={{ base: 5, lg: 16 }}
        w="100%"
        h="100%"
        // backdropFilter="blur(10px)"
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              ¿Te gustaría formar parte?
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
                      bg: "primary",
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
                      bg: "primary",
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
                <form onSubmit={handleSubmit} id="contact_form">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Tu Nombre"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="primary"
                      color="white"
                      _hover={{
                        bg: "#037d5a",
                      }}
                      _active={{ bg: "primary" }}
                      w="100%"
                      disabled={button}
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactUsPage;
