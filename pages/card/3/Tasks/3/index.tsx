import { Task } from "@/core/public"
import { CrossWord } from "@/libs/CrossWord"

export const Task3 = () => {

    const checkTask = () => { }

    return (
        <Task title="3. Ответьте на вопрос" action={checkTask}>
            <CrossWord letters={6} question="Назовите вид спорта, где при помощи ракеток отправлять мяч на сторону соперника так, чтобы тот не смог его отразить." />
        </Task>
    )
}