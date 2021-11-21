import { Color } from "@/types/Color";
import classNames from "classnames";
import React from "react";
import style from "./Text.module.scss";

export type TextModes =
    | "div"
    | "span"
    | "label"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p";

export interface ITextProps {
    /**
     * Наполнители тега
     */
    children: any,

    /**
     * Вариация текста
     */
    mode?: TextModes,

    /**
     * Отображение текста - bold
     */
    bold?: boolean,

    /**
     * Отображение текста - italic
     */
    italic?: boolean,

    /**
     * Цвет текста
     */
    color?: Color | string,

    /**
     * Размер текста
     */
    size?: string | number,

    /**
     * Дополнительные классы для компонента 
     */
    className?: string
}

export const Text: React.FC<ITextProps> = (props) => {

    const {
        children,
        mode = "div",
        bold,
        italic,
        color,
        size,
        ...restProps
    } = props;

    const className = classNames(
        style.text,
        {
            [style.text_bold]: bold,
            [style.text_italic]: italic
        }
    );

    const extraStyles = {
        color: color || null,
        fontSize: size || null
    }

    const Mode = mode;

    return (
        <Mode className={className} style={extraStyles} {...restProps}>
            {children}
        </Mode>
    )
}