import { useContext, useState, FC } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable
} from "react-beautiful-dnd";
import { CardContext } from "@/contexts/CardContext";
import { useTask } from "@/hooks/useTask";
import { Space, Text } from "@/components/UI";
import { reorder } from "@/helpers/DragAndDrop";
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

    const [gaps, setGaps] = useState({
        gap1: { id: 0, value: null },
        gap2: { id: 0, value: null },
        gap3: { id: 0, value: null },
        gap4: { id: 0, value: null },
        gap5: { id: 0, value: null }
    });

    const onDragEnd = ({ destination, source }) => {
        const { resultItems, resultGaps } = reorder(destination, source, items, gaps);

        if (resultItems) setItems(resultItems);
        if (resultGaps) setGaps(resultGaps);
    };

    return (
        <TaskComponent title={"2. Заполните пропуски, перетаскивая нужные слова"} next={changeNode}>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Droppable droppableId="menu_box" direction={"horizontal"}>
                    {(providedDroppable) => (
                        <div
                            className={style.word_container}
                            ref={providedDroppable.innerRef}
                            {...providedDroppable.droppableProps}
                        >
                            {items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={`task2_option${item.id}`}
                                    index={index}
                                >
                                    {(providedDraggable) => (
                                        <div
                                            className={style.word}
                                            ref={providedDraggable.innerRef}
                                            {...providedDraggable.draggableProps}
                                            {...providedDraggable.dragHandleProps}
                                        >
                                            {item.value}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {providedDroppable.placeholder}
                        </div>
                    )}
                </Droppable>
                <Space height={20} />
                <Text size={"1.4rem"} className={style.task1_text}>
                    Здоровый образ жизни -
                    <Droppable droppableId={"gap1"} direction="horizontal">
                        {(providedDroppable) => (
                            <div
                                className={style.intext_droppableArea}
                                ref={providedDroppable.innerRef}
                                {...providedDroppable.droppableProps}
                            >
                                {gaps.gap1.value ? (
                                    <Draggable draggableId={"gap1_value"} index={1}>
                                        {(providedDraggable) => (
                                            <div
                                                className={style.word}
                                                ref={providedDraggable.innerRef}
                                                {...providedDraggable.dragHandleProps}
                                                {...providedDraggable.draggableProps}
                                            >
                                                {gaps.gap1.value}
                                            </div>
                                        )}
                                    </Draggable>
                                ) : null}
                                {providedDroppable.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Text>
            </DragDropContext>
        </TaskComponent >
    )
}