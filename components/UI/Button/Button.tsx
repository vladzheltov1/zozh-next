import React from "react";
import classNames from "classnames";
import { Color } from '@/types/Color';
import { useRouter } from 'next/router';
import * as style from "./Button.module.scss";

/**
 * Button properties
 */
export interface IButtonProps {
    /**
     * Текст внутри кнопки
     */
    children?: any,

    /**
     * html-аттрибут у кнопки
     */
    type?: "button" | "submit" | "reset",

    /**
     * Вариация кнопки
     */
    mode?: "default" | "primary" | "secondary",

    /**
     * Цвет фона кнопки. По умолчанию - "blue"
     */
    color?: Color,

    /**
     * Визуальная вариация кнопки с белым фоном и цветной рамкой
     */
    ghost?: boolean,

    /**
     * Функция, которая будет вызвана при нажатии на кнопку
     */
    onClick?: Function,

    /**
     * Путь, куда будет перенаправлен пользователь при нажатии на кнопку
     */
    redirect?: string

    /**
     * Выключение кнопки. Она будет видна, но не доступна для действий пользователя
     */
    disabled?: boolean
}

export const Button: React.FC<IButtonProps> = (props) => {

    const {
        children,
        type = "button",
        mode = "default",
        color = "blue",
        ghost = false,
        onClick = () => void 0,
        redirect,
        ...restProps
    } = props;

    const action = () => redirect ? router.push(redirect) : onClick();

    const router = useRouter();

    const className = classNames(
        style["button"],
        style[`button_${color}`],
        {
            [style[`button_${color}_ghost`]]: ghost && mode === "default",
            [style[`button_${mode}`]]: mode !== "default",
        }
    )

    return (
        <button
            type={type}
            onClick={action}
            className={className}
            {...restProps}
        >
            {children}
        </button>
    )
}