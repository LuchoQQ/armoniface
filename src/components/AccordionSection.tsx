import {
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Text,
    Button,
} from "@chakra-ui/react";
import React from "react";
import { Course } from "../../types";

type Props = {
    topic: string;
    courses: Course[];
    setUrl: React.Dispatch<React.SetStateAction<string>>;
};
const AccordionSection: React.FC<Props> = ({ topic, courses, setUrl }) => {
    return (
        <AccordionItem p="1rem">
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    <Text fontFamily="tertiary">{topic}</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel py={4}>
                {courses.map((course, index) => (
                    <Button
                        key={index}
                        onClick={() => {
                            setUrl({
                                url: course.url,
                                title: course.title,
                            });
                        }}
                    >
                        {course.title}
                    </Button>
                ))}
            </AccordionPanel>
        </AccordionItem>
    );
};

export default AccordionSection;
