import { Button } from "@/components/UI";
import { Color } from "@/types/Color";
import { FC, ReactChild } from "react";
import styles from "./NextButton.module.scss";

export interface INextButton {
    children: ReactChild,
    onClick: Function,
    disabled: boolean,
    color: Color,
}

export const NextButton: FC<INextButton> = (props) => {
    const { onClick = () => void 0, color = "blue", disabled = false, children = "" } = props;
    return (
        <div className={styles.nextButtonArea}>
            <Button onClick={onClick} color={color} disabled={disabled}>{children}</Button>
        </div>
    )
}