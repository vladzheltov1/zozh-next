import { Text } from "@/components/UI";
import { NextButton } from "@/core/public";
import { useTypedSelector } from "@/core/redux/hooks/redux";
import { FC, ReactChild } from "react";

export interface ITaskComponentProps {
    children: ReactChild,
    title: string,
    action: Function
}

export const Task: FC<ITaskComponentProps> = (props) => {
    const { children, title = "", action = () => void 0 } = props;

    const { task } = useTypedSelector(state => state);

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}
            <NextButton appearance={task.buttonAppearance} disabled={task.buttonDisabled} onClick={action} >
                Готово
            </NextButton>
        </div>
    )
}