import { Task, useCore } from "@/core/public";
import { ClickList, isChosenCorrect, List } from "@/libs/ClickList";
import { useState } from "react";

const initialState: List[] = [
    { value: "Курение", isSelected: false },
    { value: "4-часовой сон", isSelected: false },
    { value: "Закалка", isSelected: false },
    { value: "Молочная диета", isSelected: false },
    { value: "Употребление алкоголя", isSelected: false },
    { value: "Здоровое питание", isSelected: false },
    { value: "Употребление фаст-фуда", isSelected: false },
    { value: "Физическая активность", isSelected: false },
    { value: "Сбитый режим дня", isSelected: false },
];

const CORRECT_OPTIONS = ["Курение", "4-часовой сон", "Употребление алкоголя", "Употребление фаст-фуда", "Сбитый режим дня"];

export const Task1 = () => {
    const { onAnswerSubmit } = useCore();
    const [options, setOptions] = useState(initialState);

    const checkTask = () => {
        onAnswerSubmit(isChosenCorrect(options, CORRECT_OPTIONS));
    }

    const updateState = (newState) => {
        setOptions(newState);
    }

    return (
        <Task title="1. Что из этого негативно влияет на здоровье человека?" action={checkTask}>
            <ClickList list={options} updateState={updateState} />
        </Task>
    )
}

export default Task1;