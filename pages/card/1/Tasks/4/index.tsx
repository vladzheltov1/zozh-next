import { Task } from "@/core/index";
import style from "./style.module.scss";
import { useState } from "react";
import { Radio } from "@/components/UI";
import { DragItem, DropArea } from "@/helpers/DragAndDrop";
import { DragDropContext } from "react-beautiful-dnd";

const options = {
    misha: "misha",
    kola: "kola"
}

export const Task4 = () => {
    const [check, setCheck] = useState<null | string>(null);

    const handleCheck = (event) => {
        setCheck(event.target.defaultValue);
    }

    const onDragEnd = () => {

    }

    const checkTask = () => { };

    return (
        <Task title="4. Ответьте на вопрос" action={checkTask}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={style.questionBlock}>
                    Четвероклассник Миша со своим другом Колей составляют меню.
                    Каждый из них решил &quot;укомплектовать&quot; корзину с продуктам.
                    Миша включил в список
                    {check ? (
                        <>
                            <DropArea droppableId="gap1" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId="vegetables" index={0} className={style.dropItem}>
                                    <div>овощи</div>
                                </DragItem>
                            </DropArea>
                            ,
                            <DropArea droppableId="gap2" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId="fruit" index={1} className={style.dropItem}>
                                    <div>фрукты</div>
                                </DragItem>
                            </DropArea>
                            ,
                            <DropArea droppableId="gap3" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId="cereals" index={2} className={style.dropItem}>
                                    <div>каши</div>
                                </DragItem>
                            </DropArea>
                            и
                            <DropArea droppableId="gap4" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId="dairyProducts" index={3} className={style.dropItem}>
                                    <div>молочные продукты</div>
                                </DragItem>
                            </DropArea>.
                        </>
                    ) : (
                        <>
                            овощи, фрукты, каши и молочные продукты.
                        </>
                    )}
                    Коля в свою очередь решил, что такое меню неправильное, и помимо этого
                    решил добавить чипсы, сухарики, лимонады и конфеты. Как ты думаешь, кто
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
                {check !== null && (
                    <div style={{ fontSize: 20 }}>потому что</div>
                )}
            </DragDropContext>
        </Task >
    )
}