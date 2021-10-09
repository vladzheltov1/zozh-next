// import { Task } from "@/components/Cards/Task";
import { Button } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { useContext, useState } from "react";
import style from "./style.module.scss";
import { useTask } from "../../../../../hooks/useTask";

export const Task1 = () => {
    const { changeNode, changeScore } = useContext(CardContext);
    const { TaskComponent, wrongAnswer } = useTask();
    const [wrong, setWrong] = useState(false);
    const [options, setOptions] = useState([
        { id: 1, value: "Курение", isSelected: false },
        { id: 9, value: "4-часовой сон", isSelected: false },
        { id: 3, value: "Закалка", isSelected: false },
        { id: 4, value: "Молочная диета", isSelected: false },
        { id: 2, value: "Употребление алкоголя", isSelected: false },
        { id: 5, value: "Здоровое питание", isSelected: false },
        { id: 8, value: "Употребление фаст-фуда", isSelected: false },
        { id: 6, value: "Физическая активность", isSelected: false },
        { id: 7, value: "Сбитый режим дня", isSelected: false },
    ]);

    const correct_options = [1, 9, 2, 8, 7];

    const checkTask = () => {
        const chosen_options = options.filter(option => option.isSelected);

        if (chosen_options.length === correct_options.length) {
            const correct = chosen_options.map(option => {
                if (!correct_options.includes(option.id)) {
                    return false;
                }
                return true;
            });

            if (correct.includes(false)) {
                console.log("Wrong, but that's the other condition.")
            }
        }

        console.log("Wrong");
        wrongAnswer();
    }

    const handleClick = (id) => {
        setOptions(
            options.map(option => {
                if (option.id === id) {
                    option.isSelected = !option.isSelected;
                }
                return option;
            })
        )
    }

    return (
        <TaskComponent title="1. Что из этого негативно влияет на здоровье человека?" next={checkTask}>
            <div className={style.task_wrapper}>
                {options.map(option => (
                    <div
                        className={`${style.task_option} ${option.isSelected ? style.task_option_selected : null}`}
                        key={option.id}
                        onClick={() => handleClick(option.id)}
                    >
                        {option.value}
                    </div>
                ))}
            </div>
        </TaskComponent>
    )
}