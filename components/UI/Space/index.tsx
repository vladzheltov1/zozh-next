import React from "react";
import style from "./style.module.scss";

export interface ISpaceProps {
    height: string | number
}

export const Space = ({ height = 0 }: ISpaceProps) => {

    const props = {
        className: style.space,
        style: { height }
    }

    return React.createElement("div", props, null);
}