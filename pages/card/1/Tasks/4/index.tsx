import { Radio, Select } from "@/components/UI";
import { Task } from "@/core/index";
import { useState } from "react";
import style from "./style.module.scss";
import { onAnswerSubmit } from "@/core/helpers";

const options = {
    misha: "misha",
    kola: "kola"
}

export const Task4 = () => {
    const [check, setCheck] = useState<null | string>(null);

    const [values, setValues] = useState({
        value1: null,
        value2: null,
        value3: null,
        value4: null
    });

    const [items, setItems] = useState({
        group1: [{ id: 0, value: "---" }, { id: 1, value: "овощи" }, { id: 2, value: "чипсы" }],
        group2: [{ id: 0, value: "---" }, { id: 1, value: "сухарики" }, { id: 2, value: "фрукты" }],
        group3: [{ id: 0, value: "---" }, { id: 1, value: "каши" }, { id: 2, value: "лемонад" }],
        group4: [{ id: 0, value: "---" }, { id: 1, value: "конфеты" }, { id: 2, value: "молочные продукты" }]
    })

    const handleCheck = (event) => setCheck(event.target.defaultValue);

    const handleClick = (event, value) => setValues({ ...values, [value]: event.target.value });

    const checkTask = () => {
        const correct = ["чипсы", "сухарики", "лемонад", "конфеты"];
        let isCorrect = true;
        for (let key in values) {
            if (correct.indexOf(values[key]) === -1 || check === options.kola) isCorrect = false;
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
                        value={options.misha}
                        checked={check === options.misha}
                        onChange={handleCheck}
                        title="Миша"
                    />
                    <Radio
                        value={options.kola}
                        checked={check === options.kola}
                        onChange={handleCheck}
                        title="Коля"
                    />
                </div>
                {check && (
                    <div className={style.bottomWordRow}>
                        <div style={{ fontSize: 20 }}>потому что</div>
                        <Select list={items.group1} onChange={() => handleClick(event, "value1")} />,
                        <Select list={items.group2} onChange={() => handleClick(event, "value2")} />,
                        <Select list={items.group3} onChange={() => handleClick(event, "value3")} /> и
                        <Select list={items.group4} onChange={() => handleClick(event, "value4")} />
                        <div style={{ fontSize: 20 }}> - вредные для здоровья продукты.</div>
                    </div>
                )}
            </>
        </Task>
    )
}