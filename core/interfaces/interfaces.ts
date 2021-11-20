import { ReactChild } from "react";

export interface ITaskComponentProps {
    children: ReactChild,
    title: string,
    action: Function
}