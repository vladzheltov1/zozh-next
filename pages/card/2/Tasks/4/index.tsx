import { Radio, Select } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { useState } from "react";
import style from "./style.module.scss";

type CheckType = "yes" | "no" | null;

export const Task4 = () => {
    const [check, setCheck] = useState<CheckType>(null);

    const { onAnswerSubmit } = useCore();

    const [value, setValue] = useState(null);

    const groups = ["овощи", "фрукты"]

    const handleCheck = (event) => setCheck(event.target.defaultValue);

    const handleClick = (event, value) => setValue(event.target.value);

    const checkTask = () => {
        const correct = ["чипсы", "сухарики", "лемонад", "конфеты"];
        let isCorrect = true;
        for (let key in values) {
            if (correct.indexOf(values[key]) === -1 || check === "no") isCorrect = false;
        }
        onAnswerSubmit(isCorrect);
    };

    return (
        <Task title="4. Ответьте на вопрос" action={checkTask}>
            <>
                <div className={style.questionBlock}>
                    Четвероклассник Миша со своим другом Колей составляют меню.
                    Каждый из них решил &quot;укомплектовать&quot; корзину с продуктам.
                    Миша включил в список овощи, фрукты, каши и молочные продукты.
                    Коля в свою очередь решил, что такое меню неправильное, и помимо этого
                    решил добавить чипсы, сухарики, лимонад и конфеты. Как ты думаешь, кто
                    из ребят правильно составил меню и почему?
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
                {check == "yes" ? (
                    <div className={style.bottomWordRow}>
                        <div style={{ fontSize: 20 }}>потому что фрукты и овощи полезны для здоровья.</div>
                    </div>
                ) : (
                    <div className={style.bottomWordRow}>
                        <div style={{ fontSize: 20 }}>потому что</div>
                        <Select list={groups} onChange={() => handleClick(event, "value1")} />,
                        <div style={{ fontSize: 20 }}> - вредные для здоровья продукты.</div>
                    </div>
                )}
            </>
        </Task>
    )
}