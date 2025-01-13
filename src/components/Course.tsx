import React from "react";
import { Container }  from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

interface CourseProps {
    courseNumber: string;
    courseTitle: string;
}

export const Course = (props: Readonly<CourseProps>) => {
    return (
            <SectionTitle
                preTitle={props.courseNumber}
                title={props.courseTitle}
            >
            </SectionTitle>
    )
};