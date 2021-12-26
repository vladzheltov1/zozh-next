import { Button, ButtonAppearance } from "@/components/UI";
import { FC, ReactChild } from "react";
import styles from "./NextButton.module.scss";

export interface INextButton {
    children: ReactChild,
    onClick: Function,
    disabled: boolean,
    appearance: ButtonAppearance,
}

export const NextButton: FC<INextButton> = (props) => {
    const {
        onClick = () => void 0,
        appearance = "primary",
        disabled = false,
        children = ""
    } = props;
    return (
        <div className={styles.nextButtonArea}>
            <Button onClick={onClick} appearance={appearance} disabled={disabled}>{children}</Button>
        </div>
    )
}