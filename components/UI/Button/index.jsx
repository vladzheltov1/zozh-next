import React from "react";
import style from "./style.module.scss";

export const Button = ({
    children = "",
    redirect = "",
    ghost = false,
    color = "blue",
    primary = false,
    secondary = false,
    onClick = () => void 0,
}) => {
    const props = {
        className: [
            style.button,
            `${style.button}_${color}`
        ].join(" "),
        onClick: () => onClick()
    };

    return React.createElement("button", props, children);
}