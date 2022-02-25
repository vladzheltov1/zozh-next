import { Space } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { DragAndDropBlock, DragItem, DropArea, IContainerBundle, onDragEnd } from "@/libs/DragAndDrop2";
import Image from "next/image";
import { useState } from "react";
import style from "./style.module.scss";

const initialState = {
    root: ["apple", "french-fries", "hamburger", "eggplant", "pizza", "porridge"],
    good: [],
    bad: []
}

export const Task3 = () => {
    const [containers, setContainers] = useState<IContainerBundle>(initialState);

    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(isCorrect());
    }

    const isCorrect = (): boolean => {
        const correct = {
            good: ["apple", "eggplant", "porridge"],
            bad: ["pizza", "hamburger", "french-fries"]
        }

        for (let i = 0; i < containers.good.length; i++) {
            if (!correct.good.includes(containers.good[i])) {
                return false;
            }
        }

        for (let i = 0; i < containers.bad.length; i++) {
            if (!correct.bad.includes(containers.bad[i])) {
                return false;
            }
        }

        return true;
    }

    return <Task title="3. Отсортируйте продукты в правильные контейнеры" action={checkTask}>
        <DragAndDropBlock onDragEnd={result => onDragEnd(result, containers, setContainers)}>
            <>
                <div className={style.containerPair}>
                    <DropArea direction="horizontal" droppableId={"good"} className={style.containerGood}>
                        {containers.good.map((item, index) => (
                            <DraggablePicture key={index} path={item} index={index} />
                        ))}
                    </DropArea>
                    <DropArea direction="horizontal" droppableId={"bad"} className={style.containerBad}>
                        {containers.bad.map((item, index) => (
                            <DraggablePicture key={index} path={item} index={index} />
                        ))}
                    </DropArea>
                </div>
                <Space height={30} />
                <DropArea direction="horizontal" droppableId={"root"} className={style.containerDefault}>
                    {containers.root.map((item, index) => (
                        <DraggablePicture key={index} path={item} index={index} />
                    ))}
                </DropArea>
            </>
        </DragAndDropBlock>
    </Task>
}

const DraggablePicture = ({ path, index }) => {
    return (
        <DragItem
            index={index}
            className={style.blockWithPicture}
        >
            <Image src={`/pictures/cards/card2/task3/${path}.jpg`} layout="fill" alt="" />
        </DragItem>
    )
}

export default Task3;