import Random from "@/libs/Random";
import { CSSProperties, FC, useState } from "react";
import { MatcherManager } from "../scripts";
import styles from "../styles/Matcher.module.scss";

export interface IMatcherProps {
    leftList: Array<any>,
    rightList: Array<any>
}

/**
 * @todo 1. Менять цвет шарика, когда элемент выбран(находится в паре)/активен
 *       2. Рандомно генерировать цвет фона по клику на левый элемент, чтобы потом поставить его как цвет пары.
 *       3. Переделать систему обновления состояния (функция вызывается при любом обновлении компонента)
 */
export const Matcher: FC<IMatcherProps> = (props) => {
    const { leftList, rightList } = props;

    const chosenInitialState = { left: null, right: null };

    const [chosen, setChosen] = useState(chosenInitialState);
    const [pairs, setPairs] = useState([]);

    const manager = new MatcherManager(pairs);
    const random = new Random();

    const onLeftClick = (item: string) => {
        prepareForAction(item);

        const updatedLeftListData = chosen.left === item ? null : item;
        setChosen({ ...chosen, left: updatedLeftListData });
    }

    const onRightClick = (item: string) => {
        if (!chosen.left) return;

        prepareForAction(item);
        setChosen({ ...chosen, right: item });
    }

    const prepareForAction = (item) => {
        setPairs(manager.checkIfExistsAndDeletePair(item));
    }

    const makePair = () => {
        if (chosen.left === null || chosen.right === null) return;

        const color = random.getColor(0.7);
        const singlePair = { ...chosen, color };

        setPairs([...pairs, singlePair]);
        setChosen(chosenInitialState);
    }

    const getStyleForItem = (value: string, position: "left" | "right"): CSSProperties => {
        const style = { backgroundColor: "" };

        pairs.forEach((pair) => {
            if (pair[position] === value) {
                style.backgroundColor = pair.color;
            }
        })

        return style;
    }

    // Вызывается каждый раз, когда происходит перересовка компонента
    // Должен быть способ сделать это по-другому
    makePair();

    return (
        <div className={styles.listWrapper}>
            <div className={styles.list}>
                {leftList.map((item) => (
                    <div
                        key={item}
                        onClick={() => onLeftClick(item)}
                        style={getStyleForItem(item, "left")}
                        className={`${styles.leftListItem} ${chosen.left === item && styles.chosenItem}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className={styles.list}>
                {rightList.map((item) => (
                    <div
                        key={item}
                        onClick={() => onRightClick(item)}
                        style={getStyleForItem(item, "right")}
                        className={`${styles.rightListItem}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}