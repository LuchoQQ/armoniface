import {
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const toast = useToast();
  const templateParams = {
    from_name: name,
    email: email,
    message: message,
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAlreadySubmitted(true);
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        "template_52sowpt",
        templateParams,
        `${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then(
        (result) => {
          toast({
            title: "Mensaje enviado",
            description: "Nos pondremos en contacto a la brevedad",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error",
            description: "Hubo un error al enviar el mensaje",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Flex
        w="100vw"
        flexWrap="wrap"
        justifyContent="center"
        // align="center"
        flexDir="column"
        id="contact"
        p="2rem"
        bg="#fff"
      >
        <Text
          my={{ base: "2rem", md: "0" }}
          fontSize={["2xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
          fontFamily="secondary"
          textAlign="center"
          fontWeight="bold"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            left: "20%",
            top: "100%",
            width: "60%",
            h: "1px",
            bg: "#202020",
          }}
          // mt="2rem"
        >
          CONTÁCTANOS
        </Text>
        <Flex
          bg="#fff"
          boxShadow="0px 0px 10px 15px #dedede"
          mt="4rem"
          flexDir="column"
          gap="2rem"
          fontFamily="primary"
          rounded="20px"
          p="2rem"
          maxW="500px"
          mb="2rem"
          alignSelf="center"
        >
          <Text
            fontSize={["md", "md", "lg", "lg", "lg", "xl"]}
            fontFamily="primary"
            textAlign="center"
            position="relative"
          >
            Para saber más información acerca de los cursos, consultanos por
            nuestro email o redes sociales!
          </Text>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="flushed"
            />

            <Input
              type="email"
              name="email"
              placeholder="Tu Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="flushed"
            />
            <Textarea
              name="message"
              placeholder="Tu Mensaje..."
              rows={6}
              resize="none"
              value={message}
              variant="flushed"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" disabled={alreadySubmitted}>
              Enviar
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default ContactUsPage;
