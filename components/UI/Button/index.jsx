import { useRouter } from 'next/router';
import React from "react";
import * as style from "./style.module.scss";

/**
 * UI Button component.
 * @todo If the button is secondary and ghost, the system ignores the dark color and leaves the button blue.
 */
export const Button = ({
    children = "",
    redirect = "",
    ghost = false,
    color = "blue",
    primary = false,
    secondary = false,
    onClick = () => void 0,
}) => {
    const router = useRouter();

    const props = {
        onClick: redirect ? () => router.push(redirect) : () => onClick(),
        className: [
            style.button,
            style[`button_${color}`],
            ghost && style[`button_${color}_ghost`],
            secondary && style[`button_secondary`],
            primary && style[`button_primary`],
        ].join(" ")
    };

    return React.createElement("button", props, children);
}