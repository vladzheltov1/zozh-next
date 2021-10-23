import { useContext, useState, FC } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable
} from "react-beautiful-dnd";
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

    const onDragEnd = (result) => {
        const tempItems = Array.from(items);
        const [newOrder] = tempItems.splice(result.source.index, 1);
        tempItems.splice(result.destination.index, 0, newOrder);

        setItems(tempItems);
    }


    return (
        <TaskComponent title={"2. Заполните пропуски, перетаскивая нужные слова"} next={changeNode}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="task1_wordArea" direction="horizontal">
                    {(droppableProvided) => (
                        <div className={style.word_container} {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id.toString()}
                                    index={index}
                                >
                                    {(draggableProvided) => (
                                        <div
                                            className={style.word}
                                            {...draggableProvided.draggableProps}
                                            {...draggableProvided.dragHandleProps}
                                            ref={draggableProvided.innerRef}
                                        >
                                            {item.value}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </TaskComponent >
    )
}