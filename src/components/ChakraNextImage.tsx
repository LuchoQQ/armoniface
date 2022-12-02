import {Box} from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage: any = ({src, alt, priority, ...props}: any) => {
  const isPriority = priority ? true : false;

  return (
    <Box height="100%" position="relative" width="100%" {...props}>
      <Image alt={alt} priority={isPriority} layout="fill" objectFit="fill" quality="100" src={src} />
    </Box>
  );
};

export default ChakraNextImage;
