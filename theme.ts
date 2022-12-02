import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/libre-baskerville";
import "@fontsource/montserrat/600.css";

const theme = extendTheme({
  colors: {
    primary: "#1f3b31",
    secondary: "#bd9b6b",
    tertiary: "#b3882A",
    background: "#f3f4f5",
},
fonts: {
    primary: "Poppins",
    secondary: "Libre Baskerville",
    tertiary: "Montserrat",
},
});

export default theme;