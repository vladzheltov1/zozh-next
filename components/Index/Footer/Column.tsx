import { FC, ReactNode } from "react";
import footerStyles from "./style.module.scss";

export interface IColumnProps {
    children: ReactNode | ReactNode[]
}

export const Column: FC<IColumnProps> = (props) => {
    const { children } = props;

    return (
        <div className={footerStyles.column}>{children}</div>
    )
}