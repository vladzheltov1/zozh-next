import { FC, useState } from "react";
import style from "./style.module.scss";



export type List = {
    id: number,
    value: string | number,
    isChosen: boolean
}

export interface IChooseListProps {
    list: List[],
}

export const ChooseList: FC<IChooseListProps> = (props) => {
    const {
        list
    } = props;

    const [currentList, setCurrentList] = useState(list);

    const handleClick = (event) => {
        const nextList = [];
        currentList.forEach(item => {
            if (item.value === event.target.innerText) {
                item.isChosen = !item.isChosen;
            }
            nextList.push(item);
        });
        console.log(currentList);
        console.log(nextList);
        setCurrentList({ ...nextList });
    }

    return (
        <div className={style.chooseListContainer}>
            {currentList.map(item => (
                <>
                    {item.isChosen ? (
                        <div className={style.chooseListItem} key={item.id} onClick={handleClick}>{item.value}</div>
                    ) : (
                        <div className={style.chooseListItem} key={item.id} onClick={handleClick}>{item.value}</div>
                    )}
                </>
            ))}
        </div>
    )
}