import { Text } from "@/components/UI";
import { NextButton } from "@/core/index";
import { taskStore } from "@/core/redux";
import { Color } from "@/types/Color";
import { FC, ReactChild, useState } from "react";

export interface ITaskComponentProps {
    children: ReactChild,
    title: string,
    action: Function
}

export const Task: FC<ITaskComponentProps> = (props) => {
    const { children, title = "", action = () => void 0 } = props;

    const [buttonColor, setButtonColor] = useState<Color>("blue");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    taskStore.subscribe(() => {
        const { buttonColor, buttonDisabled } = taskStore.getState();
        setButtonDisabled(buttonDisabled);
        setButtonColor(buttonColor);
    })

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