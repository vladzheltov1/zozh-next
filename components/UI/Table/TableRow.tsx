import { FC } from "react";

export interface ITableRowProps {
    children: any,
}

export const TableRow: FC<ITableRowProps> = (props) => {
    const { children } = props;
    return (
        <tr>{children}</tr>
    )
}