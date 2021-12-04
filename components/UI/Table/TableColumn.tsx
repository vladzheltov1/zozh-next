import { FC } from "react";

export type ColumnMode = "th" | "td";

export interface ITableColumnProps {
    children: any,
    mode?: ColumnMode
}

export const TableColumn: FC<ITableColumnProps> = (props) => {
    const { children, mode = "td" } = props;

    const Mode = mode;

    return (
        <Mode>{children}</Mode>
    )
}