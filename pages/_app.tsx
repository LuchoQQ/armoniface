import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/libre-baskerville";
import "@fontsource/montserrat/600.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
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

    return (
        <>
            <SessionProvider session={pageProps.session}>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
