import { useRouter } from 'next/router';
import React from "react";
import * as style from "./style.module.scss";

/**
 * Тип для props компонента.
 */
interface IButtonProps {
    children: any,
    redirect?: string
    ghost?: boolean,
    color?: string,
    primary?: boolean,
    secondary?: boolean,
    onClick?: Function
}

/**
 * Кнопка.
 * @todo Когда кнопка secondary и ghost, система игнорирует тёмный цвет и оставляет кнопку синей.
 */
export const Button = ({
    children = "",
    redirect = "",
    ghost = false,
    color = "blue",
    primary = false,
    secondary = false,
    onClick = () => void 0,
}: IButtonProps) => {

    const router = useRouter();
    const props = {
        onClick: redirect ? () => router.push(redirect) : () => onClick(),
        className: [
            style.button,
            style[`button_${color}`],
            ghost ? style[`button_${color}_ghost`] : null,
            secondary ? style[`button_secondary`] : null,
            primary ? style[`button_primary`] : null,
        ].join(" ")
    };

    return React.createElement("button", props, children);
}