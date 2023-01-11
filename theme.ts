import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/800.css";
import "@fontsource/libre-baskerville";
import "@fontsource/montserrat/600.css";
import "@fontsource/merriweather-sans/700.css"
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
    secondary: "#cf962d",
    tertiary: "#adbfa8",
    background: "#f2b29b",
  },
  fonts: {
    primary: "Merriweather Sans",
    secondary: "Libre Baskerville",
    tertiary: "Montserrat",
  },
});

export default theme;
