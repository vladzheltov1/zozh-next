import { Text } from "@/components/UI";
import { NextButton } from "@/core/index";
import { taskStore } from "@/core/redux";
import { Color } from "@/types/Color";
import { FC, ReactChild, useEffect, useState } from "react";

export interface ITaskComponentProps {
    children: ReactChild,
    title: string,
    action: Function
}

type ButtonState = {
    color: Color,
    disabled: boolean
}

export const Task: FC<ITaskComponentProps> = (props) => {
    const { children, title = "", action = () => void 0 } = props;

    const [button, setButton] = useState<ButtonState>({
        color: "blue",
        disabled: false
    })

    useEffect(() => {
        const unsubscribe = taskStore.subscribe(() => {
            const { buttonColor, buttonDisabled } = taskStore.getState();
            setButton({ color: buttonColor, disabled: buttonDisabled });
        });
        return () => unsubscribe();
    })

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}
            <NextButton color={button.color} disabled={button.disabled} onClick={action} >
                Готово
            </NextButton>
        </div>
    )
}