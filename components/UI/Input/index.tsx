import React from "react";
import style from "./style.module.scss";

export type InputModes =
    | "input"
    | "textarea";

export type InputTypes =
    | "text"
    | "password"
    | "email"
    | "number"
    | "color"
    | "date"
    | "image"
    | "range"
    | "reset"
    | "time";

export interface IInputProps {
    mode?: InputModes,
    type?: InputTypes,
    disabled?: boolean,
    placeholder?: string,
    value?: string,
    onChange?: Function,
    onClick?: Function
}

export const Input = ({
    mode = "input",
    type = "text",
    disabled = false,
    placeholder = "",
    value = "",
    onChange = () => void 0,
    onClick = () => void 0
}: IInputProps) => {
    const props = {
        type,
        disabled,
        placeholder,
        value,
        onChange: () => onChange(),
        onClick: () => onClick(),
        className: [
            style.input
        ].join(" "),
    }

    return React.createElement(mode, props, null);
}