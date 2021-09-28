import style from "./style.module.scss";
import React from 'React'

export const Space = ({ height = 0 }) => {

    const props = {
        className: style.space,
        style: height
    }

    return React.createElement("div", props, null);
}