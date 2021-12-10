import { ButtonAppearance, Text } from "@/components/UI";
import { NextButton } from "@/core/index";
import { taskStore } from "@/core/redux";
import { FC, ReactChild, useEffect, useState } from "react";

export interface ITaskComponentProps {
    children: ReactChild,
    title: string,
    action: Function
}

type ButtonState = {
    appearance: ButtonAppearance,
    disabled: boolean
}

export const Task: FC<ITaskComponentProps> = (props) => {
    const { children, title = "", action = () => void 0 } = props;

    const [button, setButton] = useState<ButtonState>({
        appearance: "primary",
        disabled: false
    })

    useEffect(() => {
        const unsubscribe = taskStore.subscribe(() => {
            const { buttonAppearance, buttonDisabled } = taskStore.getState();
            setButton({ appearance: buttonAppearance, disabled: buttonDisabled });
        });
        return () => unsubscribe();
    })

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}
            <NextButton appearance={button.appearance} disabled={button.disabled} onClick={action} >
                Готово
            </NextButton>
        </div>
    )
}