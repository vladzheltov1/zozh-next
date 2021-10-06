import { Task } from "@/components/Cards/Task";
import { Button } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { useContext, useState } from "react";
import style from "./style.module.scss";

export const Task1 = () => {
    const { changeNode, changeScore } = useContext(CardContext);
    const [options, setOptions] = useState([
        { id: 1, value: "Курение", isSelected: false },
        { id: 9, value: "4-часовой сон", isSelected: false },
        { id: 3, value: "Закалка", isSelected: false },
        { id: 4, value: "Молочная диета", isSelected: false },
        { id: 2, value: "Употребление алкоголя", isSelected: false },
        { id: 5, value: "Здоровое питание", isSelected: false },
        { id: 8, value: "Нездоровое питание", isSelected: false },
        { id: 6, value: "Физическая активность", isSelected: false },
        { id: 7, value: "Сбитый режим дня", isSelected: false },
    ])

    const checkTask = () => {

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
        <Task title="1. Что из этого негативно влияет на здоровье человека?" nextButton={<Button onClick={checkTask}>Готово</Button>}>
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
        </Task>
    )
}