import { Task } from "@/core/index";
import style from "./style.module.scss";
import { useState } from "react";

const options = {
    misha: "misha",
    kola: "kola"
}

export const Task4 = () => {
    const [check, setCheck] = useState<null | string>(null);

    const handleCheck = (event) => {
        setCheck(event.defaultValue);
    }

    const checkTask = () => { };

    return (
        <Task title="4. Ответьте на вопрос" action={checkTask}>
            <>
                <div className={style.questionBlock}>
                    Четвероклассник Миша со своим другом Колей составляют меню.
                    Каждый из них решил &quot;укомплектовать&quot; корзину с продуктам.
                    Миша включил в список овощи, фрукты, каши и молочные продукты.
                    Коля в свою очередь решил, что такое меню неправильное, и помимо этого
                    решил добавить чипсы, сухарики, лимонады и конфеты. Как ты думаешь, кто
                    из ребят правильно составил меню и почему?
                </div>
                <div className={style.options}>
                    <input
                        type="radio"
                        value={options.misha}
                        checked={check === options.misha}
                        onChange={handleCheck}
                    />Миша
                    <input
                        type="radio"
                        value={options.kola}
                        checked={check === options.kola}
                        onChange={handleCheck}
                    />Коля
                </div>
            </>
        </Task >
    )
}