import colors from "@/styles/var.module.scss";
import { Color } from "@/types/Color";
import React, { FC, ReactChild, useState } from "react";
import style from "./Tabs.module.scss";

export interface ITabsProps {
    children: ReactChild[],
    accentColor?: Color
}

export const Tabs: FC<ITabsProps> = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const { children, accentColor = "green" } = props;

    return (
        <div className={style.tabContainer}>
            <div className={style.tabTitleList}>
                {children.map((child, index) => (
                    <div
                        className={`${style.tabTitleItem} ${index === currentTab && (style.activeTab)}`}
                        onClick={() => setCurrentTab(index)} key={index}
                        style={{ backgroundColor: (index === currentTab && colors[`${accentColor}40`]) }}
                    >
                        {child["props"].title}
                    </div>
                ))}
            </div>
            <div className={style.tabBody} style={{ borderColor: colors[`${accentColor}40`] }}>
                {children[currentTab]}
            </div>
        </div>
    )
}