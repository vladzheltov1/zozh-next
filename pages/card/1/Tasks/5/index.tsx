import { Task, useCore } from "@/core/public";
import { checkIfPairsMatch, Matcher } from "@/libs/Matcher";
import { useState } from "react";

const lists = {
    left: ["Правильное", "Силовые", "Активный", "Занятие", "Диета"],
    right: ["спортом", "тренировки", "питание", "для похудения", "образ жизни"]
}

const correctPairs = {
    "Правильное": "питание",
    "Силовые": "тренировки",
    "Активный": "образ жизни",
    "Занятие": "спортом",
    "Диета": "для похудения"
}

export const Task5 = () => {

    const { onAnswerSubmit } = useCore();

    const [pairs, setPairs] = useState(null);

    const getPairs = (updatedPairs) => {
        setPairs(updatedPairs);
    }

    const handleCheck = () => {
        const isCorrect = checkIfPairsMatch(pairs, correctPairs);
        onAnswerSubmit(isCorrect);
    }

    return (
        <Task title="5. Соотнесите слова, чтобы получились правильные словосочетания." action={handleCheck}>
            <Matcher leftList={lists.left} rightList={lists.right} onFinish={getPairs} />
        </Task>
    )
}

export default Task5;