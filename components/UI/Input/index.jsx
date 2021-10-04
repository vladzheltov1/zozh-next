import React from "react";
import style from "./style.module.scss";

const _VALID_MODES = [
    "input",
    "textarea"
]

export const Input = ({
    mode = "input",
    type = "text",
    disabled = false,
    placeholder = "",
    value = "",
    onChange = () => void 0,
    onClick = () => void 0
}) => {
    if (!_VALID_MODES.includes(mode)) mode = _VALID_MODES[0];

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