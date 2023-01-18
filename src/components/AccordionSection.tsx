import {
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Text,
    Button,
    Flex,
} from "@chakra-ui/react";
import React from "react";
import { Course } from "../../types";

type Selected = {
    url: string;
    title: string;
};

type Props = {
    topic: string;
    courses: Course[];
    setSelected: React.Dispatch<React.SetStateAction<Selected>>;
};
const AccordionSection: React.FC<Props> = ({ topic, courses, setSelected }) => {
    return (
        <AccordionItem p="1rem">
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    <Text fontFamily="secondary" fontSize="sm">{topic}</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel py={4}>
                <Flex flexDir='column' gap='1rem'>
                {courses.map((course, index) => {
                    return (
                        <Button
                        size="sm"
                            key={index}
                            variant="outline"
                            colorScheme="secondary"
                            onClick={() =>
                                setSelected({
                                    url: course.url,
                                    title: course.title,
                                })
                            }
                        >
                            {course.title}
                        </Button>
                    );
                })}
                
                
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default AccordionSection;
