import { Space, Text } from "@/components/UI";
import { Task, TaskContext } from "@/core/index";
import { DragItem, DropArea, reorder } from "@/helpers/DragAndDrop";
import { FC, useContext, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import style from "./style.module.scss";

export interface IItem {
    id: number,
    value: string
}

export const Task2: FC = () => {
    const { handleAnswer } = useContext(TaskContext);

    const [items, setItems] = useState<Array<IItem>>([
        { id: 1, value: "профилактику" },
        { id: 2, value: "жизни" },
        { id: 3, value: "укрепление" },
        { id: 4, value: "образ" },
        { id: 5, value: "развитие" }
    ]);

    const [gaps, setGaps] = useState({
        gap1: { id: 0, value: null },
        gap2: { id: 0, value: null },
        gap3: { id: 0, value: null },
        gap4: { id: 0, value: null },
        gap5: { id: 0, value: null }
    });

    const onDragEnd = (result) => {
        const { destination, source } = result;
        const [resultItems, resultGaps] = reorder(destination, source, items, gaps, "menu_box");

        setItems(resultItems);
        setGaps(resultGaps);
    };

    const correct = {
        gap1: "образ",
        gap2: "жизни",
        gap3: "укрепление",
        gap4: "профилактику",
        gap5: "развитие"
    };

    const checkTask = () => {
        console.log("CHECK");
        let isCorrect = true;
        for (let key in gaps) {
            if (gaps[key].value !== correct[key]) {
                isCorrect = false;
                break;
            }
        }
        handleAnswer(isCorrect);
    }

    return (
        <Task title={"2. Заполните пропуски, перетаскивая нужные слова"} action={checkTask}>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <DropArea droppableId="menu_box" direction="horizontal" className={style.word_container}>
                    {items.map((item, index) => (
                        <DragItem
                            key={item.id}
                            draggableId={`task2_option${item.id}`}
                            index={index}
                            className={style.word}
                        >
                            {item.value}
                        </DragItem>
                    ))}
                </DropArea>
                <Space height={20} />
                <Text size={"1.4rem"} className={style.task1_text}>
                    Здоровый образ жизни -
                    {/* Образ */}
                    <DropArea droppableId={"gap1"} direction="horizontal" className={style.intext_droppableArea} isDropDisabled={gaps.gap1.value != null}>
                        {gaps.gap1.value ? (
                            <DragItem
                                draggableId={"gap1_value"}
                                index={1}
                                className={style.word}
                            >
                                {gaps.gap1.value}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    {/* Жизни */}
                    <DropArea droppableId={"gap2"} direction="horizontal" className={style.intext_droppableArea} isDropDisabled={gaps.gap2.value != null}>
                        {gaps.gap2.value ? (
                            <DragItem
                                draggableId={"gap2_value"}
                                index={2}
                                className={style.word}
                            >
                                {gaps.gap2.value}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    человека, направленный на
                    {/* Укрепление */}
                    <DropArea droppableId={"gap3"} direction="horizontal" className={style.intext_droppableArea} isDropDisabled={gaps.gap3.value != null}>
                        {gaps.gap3.value ? (
                            <DragItem
                                draggableId={"gap3_value"}
                                index={3}
                                className={style.word}
                            >
                                {gaps.gap3.value}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    здоровья,
                    {/* Профилактику */}
                    <DropArea droppableId={"gap4"} direction="horizontal" className={style.intext_droppableArea} isDropDisabled={gaps.gap4.value != null}>
                        {gaps.gap4.value ? (
                            <DragItem
                                draggableId={"gap4_value"}
                                index={4}
                                className={style.word}
                            >
                                {gaps.gap4.value}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    болезней и
                    {/* Развитие */}
                    <DropArea droppableId={"gap5"} direction="horizontal" className={style.intext_droppableArea} isDropDisabled={gaps.gap5.value != null}>
                        {gaps.gap5.value ? (
                            <DragItem
                                draggableId={"gap5_value"}
                                index={5}
                                className={style.word}
                            >
                                {gaps.gap5.value}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    организма в целом.
                </Text>
            </DragDropContext>
        </Task >
    )
}