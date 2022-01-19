import { Task } from "@/core/index";
import { Matcher } from "@/libs/Matcher";

export const Task5 = () => {

    const leftList = [
        "Правильное",
        "Силовые",
        "Активный",
        "Занятие",
        "Диета"
    ]

    const rightList = [
        "спортом",
        "тренировки",
        "питание",
        "для похудения",
        "образ жизни",
    ]

    const handleCheck = () => {

    }

    return (
        <Task title="5. Соотнесите слова, чтобы получились правильные словосочетания." action={handleCheck}>
            <Matcher leftList={leftList} rightList={rightList}>

            </Matcher>
        </Task>
    )
}