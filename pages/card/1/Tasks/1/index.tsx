import { Task, useCardState, useTaskState } from "@/core/index";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

export const Task1 = () => {
    const { onAnswerSubmit } = useTaskState();
    const { changeScore, changeNode } = useCardState();

    const [options, setOptions] = useState([
        { id: 1, value: "Курение", isSelected: false },
        { id: 2, value: "4-часовой сон", isSelected: false },
        { id: 3, value: "Закалка", isSelected: false },
        { id: 4, value: "Молочная диета", isSelected: false },
        { id: 5, value: "Употребление алкоголя", isSelected: false },
        { id: 6, value: "Здоровое питание", isSelected: false },
        { id: 7, value: "Употребление фаст-фуда", isSelected: false },
        { id: 8, value: "Физическая активность", isSelected: false },
        { id: 9, value: "Сбитый режим дня", isSelected: false },
    ]);

    const correct_options = [1, 2, 5, 7, 9];

    const checkTask = () => {
        const chosen_options = options.filter(option => option.isSelected);

        if (chosen_options.length === correct_options.length) {
            const correct = () => {
                let res = true;

                chosen_options.forEach((option => {
                    if (!correct_options.includes(option.id)) {
                        res = false;
                    }
                }))

                return res;
            }

            if (correct()) {
                onAnswerSubmit(true);
                return;
            }

        }
        onAnswerSubmit(false);
    }

    const optionToggleClick = (id) => {
        setOptions(
            options.map(option => {
                if (option.id === id) {
                    option.isSelected = !option.isSelected;
                }
                return option;
            })
        )
    }

    useEffect(() => {
        setTimeout(() => changeNode, 2000);
    })

    return (
        <Task title="1. Что из этого негативно влияет на здоровье человека?" action={checkTask}>
            <div className={style.task_wrapper}>
                {options.map(option => (
                    <div
                        className={`${style.task_option} ${option.isSelected ? style.task_option_selected : null}`}
                        key={option.id}
                        onClick={() => optionToggleClick(option.id)}
                    >
                        {option.value}
                    </div>
                ))}
            </div>
        </Task>
    )
}