import { Radio } from "@/components/UI";
import { Task } from "@/core/index";
import { DragItem, DropArea, reorder } from "@/helpers/DragAndDrop";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import style from "./style.module.scss";

const options = {
    misha: "misha",
    kola: "kola"
}

export const Task4 = () => {
    const [check, setCheck] = useState<null | string>(null);
    const [gaps, setGaps] = useState({
        gap1: { id: 0, value: null },
        gap2: { id: 1, value: null },
        gap3: { id: 2, value: null },
        gap4: { id: 3, value: null },
    });
    const [items, setItems] = useState([
        { id: 0, value: "овощи" },
        { id: 1, value: "фрукты" },
        { id: 2, value: "каши" },
        { id: 3, value: "молочные продукты" },
        { id: 4, value: "чипсы" },
        { id: 5, value: "сухарики" },
        { id: 6, value: "лемонад" },
        { id: 7, value: "конфеты" },
    ])

    const handleCheck = (event) => {
        setCheck(event.target.defaultValue);
    }

    const onDragEnd = (destination, source) => {
        const [result, resGaps] = reorder(destination, source, items, gaps, null);
        setItems(result);
        setGaps(resGaps);
    }

    const checkTask = () => {
        const correct = ["чипсы", "сухарики", "лемонад", "конфеты"];

    };

    return (
        <Task title="4. Ответьте на вопрос" action={checkTask}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={style.questionBlock}>
                    Четвероклассник Миша со своим другом Колей составляют меню.
                    Каждый из них решил &quot;укомплектовать&quot; корзину с продуктам.
                    Миша включил в список&nbsp;
                    {check ? (
                        <>
                            <DropArea droppableId="word1" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[0].value} index={0} className={style.dropItem}>
                                    <div>{items[0].value}</div>
                                </DragItem>
                            </DropArea>
                            ,&nbsp;
                            <DropArea droppableId="word2" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[1].value} index={1} className={style.dropItem}>
                                    <div>{items[1].value}</div>
                                </DragItem>
                            </DropArea>
                            ,&nbsp;
                            <DropArea droppableId="word3" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[2].value} index={2} className={style.dropItem}>
                                    <div>{items[2].value}</div>
                                </DragItem>
                            </DropArea>
                            &nbsp;и&nbsp;
                            <DropArea droppableId="word4" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[3].value} index={3} className={style.dropItem}>
                                    <div>{items[3].value}</div>
                                </DragItem>
                            </DropArea>.&nbsp;
                        </>
                    ) : (
                        <>
                            овощи, фрукты, каши и молочные продукты.
                        </>
                    )}
                    Коля в свою очередь решил, что такое меню неправильное, и помимо этого
                    решил добавить&nbsp;
                    {check ? (
                        <>
                            <DropArea droppableId="word5" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[4].value} index={4} className={style.dropItem}>
                                    <div>{items[4].value}</div>
                                </DragItem>
                            </DropArea>,&nbsp;
                            <DropArea droppableId="word6" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[5].value} index={5} className={style.dropItem}>
                                    <div>{items[5].value}</div>
                                </DragItem>
                            </DropArea>,&nbsp;
                            <DropArea droppableId="word7" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[6].value} index={6} className={style.dropItem}>
                                    <div>{items[6].value}</div>
                                </DragItem>
                            </DropArea>
                            &nbsp;и&nbsp;
                            <DropArea droppableId="word8" isDropDisabled={true} className={style.dropArea}>
                                <DragItem draggableId={items[7].value} index={7} className={style.dropItem}>
                                    <div>{items[7].value}</div>
                                </DragItem>
                            </DropArea>.&nbsp;
                            Как ты думаешь, кто
                            из ребят правильно составил меню и почему?
                        </>
                    ) : (
                        <>
                            чипсы, сухарики, лимонад и конфеты. Как ты думаешь, кто
                            из ребят правильно составил меню и почему?
                        </>
                    )}
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
                        <DropArea droppableId="gap1" className={style.wordRowArea}>
                            {gaps.gap1.value && (
                                <DragItem draggableId="gap1Value" index={gaps.gap1.id + 8} className={style.dropItem}>
                                    <div>{gaps.gap1.value}</div>
                                </DragItem>
                            )}
                        </DropArea>,
                        <DropArea droppableId="gap2" className={style.wordRowArea}>
                            {gaps.gap2.value && (
                                <DragItem draggableId="gap2Value" index={gaps.gap2.id + 8} className={style.dropItem}>
                                    <div>{gaps.gap2.value}</div>
                                </DragItem>
                            )}
                        </DropArea>,
                        <DropArea droppableId="gap3" className={style.wordRowArea}>
                            {gaps.gap3.value && (
                                <DragItem draggableId="gap3Value" index={gaps.gap3.id + 8} className={style.dropItem}>
                                    <div>{gaps.gap3.value}</div>
                                </DragItem>
                            )}
                        </DropArea> и
                        <DropArea droppableId="gap4" className={style.wordRowArea}>
                            {gaps.gap4.value && (
                                <DragItem draggableId="gap4Value" index={gaps.gap4.id + 8} className={style.dropItem}>
                                    <div>{gaps.gap4.value}</div>
                                </DragItem>
                            )}
                        </DropArea>
                        <div style={{ fontSize: 20 }}> - вредные для здоровья продукты.</div>
                    </div>
                )}
            </DragDropContext>
        </Task >
    )
}