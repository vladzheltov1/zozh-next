import { ButtonAppearance, Text } from "@/components/UI";
import { NextButton } from "@/core/index";
import { useCore } from "@/core/redux/public/scripts";
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
    const { buttonAppearance, buttonDisabled } = useCore();

    const [button, setButton] = useState<ButtonState>({
        appearance: "primary",
        disabled: false
    });

    useEffect(() => {
        setButton({ appearance: buttonAppearance, disabled: buttonDisabled });
    }, [buttonAppearance, buttonDisabled])

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