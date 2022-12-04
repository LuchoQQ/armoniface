import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  url: string;
  title: string;
};

const MediaPlayer: React.FC<Props> = ({ url, title }) => {
  console.log(url);
  return (
    <>
      <Heading as="h3" my="6" ml={{base: 2, md: "4", "2xl": "8"}} size={{sm: "md", md: "lg", xl:"xl"}} fontWeight="bold" color="#000">
        {title}
      </Heading>
      <Box w="100%" h="100%">
        <iframe
          allow="autoplay"
          allowFullScreen
          allowTransparency
          frameBorder="0"
          src={url}
          scrolling="no"
          name="videoPlayer"
          style={{ width: "95%", height: "95%", margin: "auto" }}
        ></iframe>
      </Box>

      {/*             <div style="position:relative; width:1px; min-width:100%;padding-bottom:56.25%;">
                <iframe
                    allow="autoplay"
                    class="spotlightr"
                    allowtransparency="true"
                    style="width:1px; min-width:100%; height: 100%; position:absolute"
                    allowfullscreen="true"
                    src="https://videos.cdn.spotlightr.com/watch/MTMyODAxNg==?fallback=true"
                    frameborder="0"
                    scrolling="no"
                    name="videoPlayer"
                >
                    {" "}
                </iframe>
            </div> */}
    </>
  );
};

export default MediaPlayer;
