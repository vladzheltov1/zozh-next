import { Text } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { ClickList, List } from "@/libs/ClickList";
import { useState } from "react";

const initialState: List[] = [
    { value: "shaiba", isSelected: false },
    { value: "net", isSelected: false },
    { value: "ball1", isSelected: false },
    { value: "rocketka2", isSelected: false },
    { value: "ball2", isSelected: false },
    { value: "rocketka", isSelected: false },
    { value: "american_football", isSelected: false },
    { value: "ball", isSelected: false },
];

const correct = ["net", "american_football", "ball"];

export const Task1 = () => {
    const [list, setList] = useState(initialState);

    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(isCorrect())
    }

    const isCorrect = () => {
        const chosen = list.filter(item => item.isSelected);

        if (correct.length !== chosen.length) {
            return false;
        }

        for (let i = 0; i < chosen.length; i++) {
            if (!correct.includes(chosen[i].value)) {
                return false;
            }
        }
        return true;
    }

    return (
        <Task title="1. Выберите футбольный инвентарь" action={checkTask}>
            <Text mode="small">*вспомните, какие виды футбола бывают в разных странах</Text>
            <ClickList list={list} mode="picture" path="/pictures/cards/card3/task1/" ext=".png" updateState={setList} />
        </Task>
    )
}

export default Task1;