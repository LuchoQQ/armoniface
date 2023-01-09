import {Box} from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage: any = ({src, alt, priority, fit,...props}: any) => {
  const isPriority = priority ? true : false;

  return (
    <Box height="100%" position="relative" width="100%" {...props}>
      <Image alt={alt} priority={true} fill style={{ objectFit: fit }} quality="100" src={src} sizes="100%" />
    </Box>
  );
};

export default ChakraNextImage;
