import { Task, useCore } from "@/core/public";
import { ClickList, isChosenCorrect, List } from "@/libs/ClickList";
import { useState } from "react";

const initialState: List[] = [
    { value: "Картофель фри", isSelected: false },
    { value: "Фруктовый салад", isSelected: false },
    { value: "Яблоки", isSelected: false },
    { value: "Конфеты", isSelected: false },
    { value: "Цветная капуста", isSelected: false },
    { value: "Бургер", isSelected: false },
    { value: "Кола", isSelected: false },
    { value: "Салат из морепродуктов", isSelected: false },
    { value: "Колбасы", isSelected: false },
    { value: "Свежевыжатый сок", isSelected: false },
];

const CORRECT_OPTIONS = ["Фруктовый салад", "Яблоки", "Цветная капуста", "Салат из морепродуктов", "Свежевыжатый сок"];

export const Task1 = () => {
    const [options, setOptions] = useState(initialState);

    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(isChosenCorrect(options, CORRECT_OPTIONS))
    };

    const updateState = (newList) => {
        setOptions(newList);
    }

    return (
        <Task title="1. Выберите полезные и сбалансированные продукты питания" action={checkTask}>
            <ClickList list={options} updateState={updateState} />
        </Task>
    )
}

export default Task1;