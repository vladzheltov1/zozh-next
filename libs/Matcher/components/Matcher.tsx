import { FC, useState } from "react";
import styles from "../styles/Matcher.module.scss";

export interface IMatcherProps {
    leftList: Array<any>,
    rightList: Array<any>
}

export const Matcher: FC<IMatcherProps> = (props) => {

    const { } = useState();

    const { leftList, rightList } = props;
    return (
        <div className={styles.listWrapper}>
            <div className={styles.list}>
                {leftList.map((item) => (
                    <div key={item} className={styles.leftListItem}>{item}</div>
                ))}
            </div>
            <div className={styles.list}>
                {rightList.map((item) => (
                    <div key={item} className={styles.rightListItem}>{item}</div>
                ))}
            </div>
        </div>
    )
}