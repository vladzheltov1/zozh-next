import { Task, useCore } from "@/core/public"
import { CrossWord } from "@/libs/CrossWord"
import { useState } from "react"

const solution = "теннис";

export const Task3 = () => {
    const [line, setLine] = useState("");

    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(solution.toLocaleLowerCase() === line.toLocaleLowerCase());
    }

    const onFinish = (updatedLine) => {
        setLine(updatedLine);
    }

    return (
        <Task title="3. Ответьте на вопрос" action={checkTask}>
            <CrossWord letters={6} onFinish={onFinish} question="Назовите вид спорта, где при помощи ракеток отправлять мяч на сторону соперника так, чтобы тот не смог его отразить." />
        </Task>
    )
}