import { CSSProperties } from "react";
import dragItemStyles from "./DragItem.module.scss";
import dropAreaStyles from "./DropArea.module.scss";

export const TextWithGaps = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7,
} as CSSProperties

export {
    dragItemStyles,
    dropAreaStyles
};

