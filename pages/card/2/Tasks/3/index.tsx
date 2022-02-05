import { Space } from "@/components/UI";
import { Task } from "@/core/public";
import { DragAndDropBlock, DragItem, DropArea, IContainerBundle, onDragEnd } from "@/libs/DragAndDrop2";
import { useState } from "react";
import style from "./style.module.scss";

export const Task3 = () => {

    const [containers, setContainers] = useState<IContainerBundle>({
        root: ["Текст", "Другой текст"],
        good: [],
        bad: []
    });

    const checkTask = () => { }

    return <Task title="3. Отсортируйте продукты в правильные контейнеры" action={checkTask}>
        <DragAndDropBlock onDragEnd={result => onDragEnd(result, containers, setContainers)}>
            <>
                <div className={style.containerPair}>
                    <DropArea direction="horizontal" droppableId={"good"} className={style.containerGood}>
                        {containers.good.map((item, index) => (
                            <DragItem
                                key={index}
                                index={index}
                            >
                                {item}
                            </DragItem>
                        ))}
                    </DropArea>
                    <DropArea direction="horizontal" droppableId={"bad"} className={style.containerBad}>
                        {containers.bad.map((item, index) => (
                            <DragItem
                                key={index}
                                index={index}
                            >
                                {item}
                            </DragItem>
                        ))}
                    </DropArea>
                </div>
                <Space height={30} />
                <DropArea direction="horizontal" droppableId={"root"} className={style.containerDefault}>
                    {containers.root.map((item, index) => (
                        <DragItem
                            key={index}
                            index={index}
                        >
                            {item}
                        </DragItem>
                    ))}
                </DropArea>
            </>
        </DragAndDropBlock>
    </Task>
}