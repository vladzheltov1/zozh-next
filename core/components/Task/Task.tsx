import { ButtonAppearance, Text } from "@/components/UI";
import { NextButton } from "@/core/index";
import { useTypedSelector } from "@/core/redux/hooks/redux";
import { FC, ReactChild, useState } from "react";

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

    const { task } = useTypedSelector(state => state);

    const [button, setButton] = useState<ButtonState>({
        appearance: "primary",
        disabled: false
    });

    // useEffect(() => {
    //     setButton({ appearance: buttonAppearance, disabled: buttonDisabled });
    // }, [buttonAppearance, buttonDisabled])

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