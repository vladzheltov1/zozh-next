import React from "react";
import style from "./style.module.scss";

const _VALID_MODES = [
    "div",
    "span",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p"
];

const _DEFAULT_MODE = _VALID_MODES[0];

export const Text = ({
    mode = _DEFAULT_MODE,
    children = "",
    bold = false,
    italic = false,
    color = "",
}) => {
    if (!_VALID_MODES.includes(mode)) mode = _DEFAULT_MODE;

    const props = {
        className: [
            style.text,
            bold ? style.text_bold : null,
            italic ? style.text_italic : null
        ].join(" "),
        style: {
            color: color || null
        }
    }

    return React.createElement(mode, props, children);
}