import { Radio } from "@/components/UI";
import { Task } from "@/core/index";
import { DragItem, DropArea, reorder } from "@/helpers/DragAndDrop";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ChooseList } from "./ChooseList";
import style from "./style.module.scss";

const options = {
    misha: "misha",
    kola: "kola"
}

export const Task4 = () => {
    const [check, setCheck] = useState<null | string>(null);

    const [items, setItems] = useState({
        group1: [{ id: 0, value: "овощи", isChosen: false }, { id: 1, value: "чипсы", isChosen: false }],
        group2: [{ id: 0, value: "сухарики", isChosen: false }, { id: 1, value: "фрукты", isChosen: false }],
        group3: [{ id: 0, value: "каши", isChosen: false }, { id: 1, value: "лемонад", isChosen: false }],
        group4: [{ id: 0, value: "конфеты", isChosen: false }, { id: 1, value: "молочные продукты", isChosen: false }]
    })

    const handleCheck = (event) => {
        setCheck(event.target.defaultValue);
    }

    const checkTask = () => {
        const correct = ["чипсы", "сухарики", "лемонад", "конфеты"];

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
                        <ChooseList list={items.group1} />,
                        <ChooseList list={items.group2} />,
                        <ChooseList list={items.group3} /> и
                        <ChooseList list={items.group4} />
                        <div style={{ fontSize: 20 }}> - вредные для здоровья продукты.</div>
                    </div>
                )}
            </>
        </Task>
    )
}