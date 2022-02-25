import { Radio, Select } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { useState } from "react";
import style from "./style.module.scss";

enum Options {
    misha = "misha",
    kola = "kola"
}

const items = {
    group1: ["", "овощи", "чипсы"],
    group2: ["", "сухарики", "фрукты"],
    group3: ["", "каши", "лемонад"],
    group4: ["", "конфеты", "молочные продукты"]
}

export const Task4 = () => {
    const [check, setCheck] = useState<string>(null);

    const { onAnswerSubmit } = useCore();

    const [values, setValues] = useState({
        value1: null,
        value2: null,
        value3: null,
        value4: null
    });

    const handleChange = (event, key) => {
        setValues({ ...values, [key]: event.target.value });
    }

    const handleCheck = (event) => {
        setCheck(event.target.defaultValue);
    }

    const checkTask = () => {
        onAnswerSubmit(isCorrect());
    };

    const isCorrect = () => {
        const correct = ["чипсы", "сухарики", "лемонад", "конфеты"];
        for (let key in values) {
            if ((!correct.includes(values[key])) || (check === Options.kola)) {
                return false;
            }
        }
        return true;
    }

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
                        value={Options.misha}
                        checked={check === Options.misha}
                        onChange={handleCheck}
                        title="Миша"
                    />
                    <Radio
                        value={Options.kola}
                        checked={check === Options.kola}
                        onChange={handleCheck}
                        title="Коля"
                    />
                </div>
                {check && (
                    <div className={style.bottomWordRow}>
                        <div style={{ fontSize: 20 }}>потому что</div>
                        <Select list={items.group1} onChange={event => handleChange(event, "value1")} />,
                        <Select list={items.group2} onChange={event => handleChange(event, "value2")} />,
                        <Select list={items.group3} onChange={event => handleChange(event, "value3")} /> и
                        <Select list={items.group4} onChange={event => handleChange(event, "value4")} />
                        <div style={{ fontSize: 20 }}> - вредные для здоровья продукты.</div>
                    </div>
                )}
            </>
        </Task>
    )
}

export default Task4;