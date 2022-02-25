import { Radio, Select } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { useState } from "react";
import style from "./style.module.scss";

type CheckType = "yes" | "no" | null;

export const Task4 = () => {
    const [check, setCheck] = useState<CheckType>(null);

    const { onAnswerSubmit } = useCore();

    const handleCheck = (event) => setCheck(event.target.defaultValue);

    const checkTask = () => {
        onAnswerSubmit(check === "yes");
    };

    return (
        <Task title="4. Ответьте на вопрос" action={checkTask}>
            <>
                <div className={style.questionBlock}>
                    Четвероклассник Миша прочитал в интернете, что соблюдение диеты
                    помогает людям стать стройными и здоровыми. Он решил проверить это.
                    Миша решил, что целую неделю будет питаться только фруктами и овощами,
                    а перед сном съедать творожок. Правильную ли диету выбрал Мишу?
                </div>
                <div className={style.options}>
                    <Radio
                        value={"yes"}
                        checked={check === "yes"}
                        onChange={handleCheck}
                        title="Да"
                    />
                    <Radio
                        value={"no"}
                        checked={check === "no"}
                        onChange={handleCheck}
                        title="Нет"
                    />
                </div>
                {check == "yes" && (
                    <div className={style.bottomWordRow}>
                        <div style={{ fontSize: 20 }}>потому что фрукты и овощи полезны для здоровья.</div>
                    </div>
                )}
                {check == "no" && (
                    <div className={style.bottomWordRow}>
                        <div style={{ fontSize: 20 }}>потому что</div>
                        <Select list={["овощи", "фрукты"]} />&nbsp;
                        <div style={{ fontSize: 20 }}> - вредные для здоровья продукты.</div>
                    </div>
                )}
            </>
        </Task>
    )
}

export default Task4;