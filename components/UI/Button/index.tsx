import { Color } from '@/types/Color';
import { useRouter } from 'next/router';
import React from "react";
import * as style from "./style.module.scss";

export interface IButtonProps {
    children?: any,
    redirect?: string
    ghost?: boolean,
    color?: Color,
    primary?: boolean,
    secondary?: boolean,
    onClick?: Function,
    disabled?: boolean
}

export const Button = ({
    children = "",
    redirect = "",
    ghost = false,
    color = "blue",
    primary = false,
    secondary = false,
    onClick = () => void 0,
    disabled = false
}: IButtonProps) => {

    const router = useRouter();

    const classList = [
        style['button'],
        style[`button_${color}`],
        secondary ? style[`button_secondary`] : null,
        primary ? style[`button_primary`] : null
    ];

    if (ghost && !primary && !secondary) {
        classList.push(style[`button_${color}_ghost`]);
    }

    return (
        <button
            onClick={redirect ? () => router.push(redirect) : () => onClick()}
            className={classList.join(" ")}
            disabled={disabled}
        >
            {children}
        </button>
    )
}