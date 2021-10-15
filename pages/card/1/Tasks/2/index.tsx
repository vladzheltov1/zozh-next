import { useContext, useState, FC } from "react";
import { ReactSortable } from "react-sortablejs";
import { CardContext } from "@/contexts/cardContext";
import { useTask } from "@/hooks/useTask";
import style from "./style.module.scss";

export interface IItem {
    id: number,
    value: string
}

export const Task2: FC = () => {
    const { changeNode } = useContext(CardContext);
    const { TaskComponent } = useTask();

    const [items, setItems] = useState<Array<IItem>>([
        { id: 1, value: "профилактику" },
        { id: 2, value: "жизни" },
        { id: 3, value: "укрепление" },
        { id: 4, value: "образ" },
        { id: 5, value: "развитие" }
    ]);

    return (
        <TaskComponent title={"2. Заполните пропуски, перетаскивая нужные слова"} next={changeNode}>
            <div className={style.word_container}>
                <ReactSortable list={items} setList={setItems}>
                    {items.map(item => (
                        <div key={item.id} className={style.word}>{item.value}</div>
                    ))}
                </ReactSortable>
            </div>
        </TaskComponent>
    )
}