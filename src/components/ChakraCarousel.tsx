import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Grid,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import ChakraNextImage from "./ChakraNextImage";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image: "/client.jpg",
    },
    {
      image: "/client2.jpg",
    },
    {
      image: "/client3.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={["400px", "400px", "500px", "500px", "500px", "700px"]}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "4%", md: "0%" }}
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        top={{ base: "50%" }}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        position="absolute"
        right={{ base: "4%", md: "0%" }}
        top={{ base: "50%" }}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Grid key={index} height={"6xl"} position="relative">
            {/* This is the block you need to change, to customize the caption */}
            <ChakraNextImage
              src={card.image}
              h={["400px", "400px", "500px", "500px", "500px", "700px"]}
              fit="contain"
            />
          </Grid>
        ))}
      </Slider>
    </Box>
  );
}
