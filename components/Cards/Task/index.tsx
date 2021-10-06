import { Text } from "@/components/UI";
import React, { CSSProperties, FC } from "react";

export interface ITaskProps {
    title: string,
    children: any,
    nextButton: any
}

export const Task = ({
    title = "",
    children,
    nextButton
}) => {

    const style = {
        nextButtonArea: {
            position: "absolute",
            bottom: 20
        }
    }

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}

            <div style={style.nextButtonArea}>
                {nextButton}
            </div>
        </div>
    )
}