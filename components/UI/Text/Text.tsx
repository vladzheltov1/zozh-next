import { Color } from "@/types/Color";
import classNames from "classnames";
import React, { CSSProperties } from "react";
import styles from "./Text.module.scss";

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
     * Отображение текста - light
     */
    light?: boolean,

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

    /**
     * Дополнительные стили для компонента
     */
    style?: CSSProperties
}

export const Text: React.FC<ITextProps> = (props) => {
    const { children, mode = "div", bold, italic, color, size, light, style = "", ...restProps } = props;

    const className = classNames(
        styles.text,
        {
            [styles.text_bold]: bold,
            [styles.text_italic]: italic,
            [styles.text_light]: light
        }
    );

    const extraStyles = {
        color: color || null,
        fontSize: size || null,
        ...style,
    }

    const Mode = mode;

    return (
        <Mode className={className} style={extraStyles} {...restProps}>
            {children}
        </Mode>
    )
}