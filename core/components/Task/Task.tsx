import { Button, Text } from "@/components/UI";
import { ITaskComponentProps, useTaskState } from "@/core/index";
import { FC } from "react";
import styles from "./Task.module.scss";

export const Task: FC<ITaskComponentProps> = (props) => {
    const { children, title = "", action = () => void 0 } = props;

    const { buttonColor, buttonDisabled } = useTaskState();

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}
            <div className={styles.nextButtonArea}>
                <Button onClick={() => action()} color={buttonColor} disabled={buttonDisabled}>Готово</Button>
            </div>
        </div>
    )
}