import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

// "position:relative; width:1px; min-width:100%;padding-bottom:56.25%;"
const Home: NextPage = () => {
    return (
        <>
            <Flex w="100vw" h="100vw">
                <div
                    style={{
                        position: "relative",
                        width: "1px",
                        minWidth: "100%",
                        paddingBottom: "56,25%",
                    }}
                >
                    <iframe
                        allow="autoplay"
                        className="spotlightr"
                        src="https://videos.cdn.spotlightr.com/watch/MTMyMjc1NQ==?fallback=true"
                        scrolling="no"
                        name="videoPlayer"
                        style={{
                            width: "720px",
                            height: "480px",
                        }}
                        allowFullScreen={true}
                    >
                        {" "}
                    </iframe>
                </div>
            </Flex>
        </>
    );
};

export default Home;
