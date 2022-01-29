import { CSSProperties, FC, useEffect, useState } from "react";
import { MatcherManager, Pair } from "../scripts";
import styles from "../styles/Matcher.module.scss";


const DEFAULT_COLORS = [
    "#F04728CC",
    "#F5950ACC",
    "#EDD562",
    "#35CC63CC",
    "#3496E1CC",
    "#9C5ABBCC",
]

const chosenInitialState = { left: null, right: null };

type Position = "left" | "right";

export interface IMatcherProps {
    /**
     * Список, с которого начинается действие
     */
    leftList: Array<any>,
    /**
     * Список, с котором происходит сопоставление
     */
    rightList: Array<any>,
    /**
     * Функция, которая будет вызвана, когда все элементы распределены по парам
     * @param pairs Pair
     */
    onFinish: Function,
    /**
     * Цвета активных элементов 
     */
    colors?: "default" | Array<string>
}

export const Matcher: FC<IMatcherProps> = (props) => {
    const { leftList, rightList, onFinish, colors = "default" } = props;

    const [chosen, setChosen] = useState(chosenInitialState);
    const [pairs, setPairs] = useState<Pair[]>([]);

    const manager = new MatcherManager(pairs);

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

    // FIXME: найти способ вынести данный функционал в кастомный хук
    useEffect(() => {
        makePair();
    }, [chosen]);

    const prepareForAction = (item) => {
        setPairs(manager.checkIfExistsAndDeletePair(item));
    }

    const makePair = () => {
        if (chosen.left === null || chosen.right === null) return;

        const color = getColor(chosen.left);
        const singlePair = { ...chosen, color };

        setPairs([...pairs, singlePair]);
        setChosen(chosenInitialState);
    }

    const getColor = (item: string) => {
        const availableColors = colors === "default" ? DEFAULT_COLORS : colors;
        return availableColors[leftList.indexOf(item) % leftList.length];
    }

    /**
     * Отправление полученных данных в функцию, которая поставит все данные в локальный `state` вышестоящего компонента.
     */
    useEffect(() => {
        if (!checkIfFunctionIsCorrect()) {
            throw new Error("Ошибка события: невозможно вызвать onFinish!");
        }

        if (pairs.length === leftList.length) {
            onFinish(pairs);
        }
    }, [pairs])

    const checkIfFunctionIsCorrect = (): boolean => {
        return typeof onFinish === "function";
    }

    const getStyleForItem = (value: string, position: Position): CSSProperties => {
        const style = { backgroundColor: "" };

        pairs.forEach((pair) => {
            if (pair[position] === value) {
                style.backgroundColor = pair.color;
            }
        })

        return style;
    }

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