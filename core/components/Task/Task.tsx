import { Text } from "@/components/UI";
import { NextButton, useTaskState } from "@/core/index";
import { FC, ReactChild } from "react";

export interface ITaskComponentProps {
    children: ReactChild,
    title: string,
    action: Function
}

export const Task: FC<ITaskComponentProps> = (props) => {
    const { children, title = "", action = () => void 0 } = props;

    const { buttonColor, buttonDisabled } = useTaskState();

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}
            <NextButton color={buttonColor} disabled={buttonDisabled} onClick={action} >
                Готово
            </NextButton>
        </div>
    )
}