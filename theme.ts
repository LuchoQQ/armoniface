import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/merriweather-sans/800.css"; 
const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
        bg: "#f1f2f3",
      },
    },
  },
  colors: {
    primary: "#025940",
    secondary: "#FCA120",
    tertiary: "#adbfa8",
    background: "#dedede",
    font: "#dedede",
    fontSecondary: "#202020",
  },
  fonts: {
    primary: "Montserrat",
    secondary: 'Merriweather Sans'
  },
});

export default theme;
