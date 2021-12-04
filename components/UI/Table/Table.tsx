import { Color } from "@/types/Color";
import classNames from "classnames";
import { FC } from "react";
import tableStyle from "./Table.module.scss";

export interface ITableProps {
    title?: string,
    accentColor?: Color,
    children: any,
    width?: number | string
}

export const Table: FC<ITableProps> = (props) => {
    const { title, children, accentColor = "green", width = "100%" } = props;

    const className = classNames(
        tableStyle.table,
        [tableStyle["table_" + accentColor]]
    )

    return (
        <table className={className} style={{ width }}>
            {title && <caption>{title}</caption>}
            {children}
        </table>
    )
}