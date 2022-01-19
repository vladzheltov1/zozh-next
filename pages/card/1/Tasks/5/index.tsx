import { onAnswerSubmit, Task } from "@/core/index";
import { Matcher } from "@/libs/Matcher";
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

const CORRECT_PAIRS_LENGTH = 5;

export const Task5 = () => {
    const [pairs, setPairs] = useState(null);

    const getPairs = (updatedPairs) => {
        setPairs(updatedPairs);
    }

    const handleCheck = () => {
        const isCorrect = checkIfPairsMatch();
        onAnswerSubmit(isCorrect);
    }

    const checkIfPairsMatch = (): boolean => {
        if (!pairs) return false;

        let isCorrect = true;

        pairs.map((pair) => {
            if (pair.right != correctPairs[pair.left]) {
                isCorrect = false;
                return;
            }
        })

        return isCorrect;
    }

    return (
        <Task title="5. Соотнесите слова, чтобы получились правильные словосочетания." action={handleCheck}>
            <Matcher leftList={lists.left} rightList={lists.right} onFinish={getPairs} />
        </Task>
    )
}