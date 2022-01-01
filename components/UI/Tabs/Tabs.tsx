import { createContext, FC } from "react";
import { ITabProps } from ".";
import style from "./Tabs.module.scss";

export interface ITabsProps {
    children: FC<ITabProps>[]
}

export const Tabs: FC<ITabsProps> = (props) => {
    const { children } = props;

    const titles = [];

    console.log(children);

    children.forEach(child => {
        titles.push(child.props.title);
        console.log(titles)
    })

    console.log(titles);
    return (
        <div>
            <div>
                {titles.map(title => (
                    { title }
                ))}
            </div>
            {children[0]}
        </div>
    )
}