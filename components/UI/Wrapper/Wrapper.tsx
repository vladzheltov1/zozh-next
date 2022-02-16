import { FC } from "react";

export interface IWrappperProps {
    maxWidth?: number | string,
    children?: any
}

export const Wrapper: FC<IWrappperProps> = (props) => {
    const { maxWidth = 1170, children } = props;
    return (
        <div className="wrapper" style={{ maxWidth }}>
            {children && children}
        </div>
    )
}