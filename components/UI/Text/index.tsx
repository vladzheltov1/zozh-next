import React from "react";
import style from "./style.module.scss";

export type TextMode =
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
    mode?: TextMode,
    children: any,
    bold?: boolean,
    italic?: boolean,
    color?: string,
    className?: string,
    size?: string | number
}

export const Text = ({
    mode = "div",
    children = "",
    bold = false,
    italic = false,
    color,
    className,
    size
}: ITextProps) => {
    const props = {
        className: [
            style.text,
            bold ? style.text_bold : null,
            italic ? style.text_italic : null,
            className ? className : null
        ].join(" "),
        style: {
            color: color || null,
            fontSize: size || null
        }
    }

    return React.createElement(mode, props, children);
}