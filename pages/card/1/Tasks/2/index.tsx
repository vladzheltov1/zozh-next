import { Space, Text } from "@/components/UI";
import { onAnswerSubmit, Task } from "@/core/index";
import { DragAndDrop, DragAndDropBlock, DragItem, DropArea, IContainerBundle, ROOT_CONTAINER } from "@/libs/DragAndDrop2";
import { FC, useState } from "react";
import style from "./style.module.scss";

export interface IItem {
    id: number,
    value: string
}

export const Task2: FC = () => {
    const [containers, setContainer] = useState<IContainerBundle>({
        rootContainer: ["профилактику", "жизни", "укрепление", "образ", "развитие"],
        gap1: null,
        gap2: null,
        gap3: null,
        gap4: null,
        gap5: null
    });

    const checkTask = () => {
        onAnswerSubmit(isAnswerCorrect());
    }

    const isAnswerCorrect = (): boolean => {
        return containers.gap1 === "образ"
            && containers.gap2 === "жизни"
            && containers.gap3 === "укрепление"
            && containers.gap4 === "профилактику"
            && containers.gap5 === "развитие";
    }

    const onDragEnd = (result) => {
        const dnd = new DragAndDrop(result, containers);
        const data = dnd.move(ROOT_CONTAINER);
        setContainer(data);
    };

    return (
        <Task title={"2. Заполните пропуски, перетаскивая нужные слова"} action={checkTask}>
            <>
                <Space height={10} />
                <DragAndDropBlock onDragEnd={onDragEnd}>
                    <DropArea droppableId={ROOT_CONTAINER} outLook="root" direction="horizontal">
                        {containers.rootContainer.map((item, index) => (
                            <DragItem
                                key={item}
                                draggableId={`task2Option${index}`}
                                index={index}
                            >
                                {item}
                            </DragItem>
                        ))}
                    </DropArea>
                    <Space height={20} />
                    <Text size={"1.4rem"} className={style.task1Text}>
                        <Text>Здоровый образ жизни -</Text>
                        {/* Образ */}
                        <DropArea droppableId={"gap1"} direction="horizontal" isDropDisabled={containers.gap1 != null}>
                            {containers.gap1 ? (
                                <DragItem
                                    draggableId={"gap1Value"}
                                    index={1}
                                >
                                    {containers.gap1}
                                </DragItem>
                            ) : null}
                        </DropArea>
                        {/* Жизни */}
                        <DropArea droppableId={"gap2"} direction="horizontal" isDropDisabled={containers.gap2 != null}>
                            {containers.gap2 ? (
                                <DragItem
                                    draggableId={"gap2Value"}
                                    index={2}
                                >
                                    {containers.gap2}
                                </DragItem>
                            ) : null}
                        </DropArea>
                        <Text>человека, направленный на</Text>
                        {/* Укрепление */}
                        <DropArea droppableId={"gap3"} direction="horizontal" isDropDisabled={containers.gap3 != null}>
                            {containers.gap3 ? (
                                <DragItem
                                    draggableId={"gap3Value"}
                                    index={3}
                                >
                                    {containers.gap3}
                                </DragItem>
                            ) : null}
                        </DropArea>
                        <Text>здоровья,</Text>
                        {/* Профилактику */}
                        <DropArea droppableId={"gap4"} direction="horizontal" isDropDisabled={containers.gap4 != null}>
                            {containers.gap4 ? (
                                <DragItem
                                    draggableId={"gap4Value"}
                                    index={4}
                                >
                                    {containers.gap4}
                                </DragItem>
                            ) : null}
                        </DropArea>
                        <Text>болезней и</Text>
                        {/* Развитие */}
                        <DropArea droppableId={"gap5"} direction="horizontal" isDropDisabled={containers.gap5 != null}>
                            {containers.gap5 ? (
                                <DragItem
                                    draggableId={"gap5Value"}
                                    index={5}
                                >
                                    {containers.gap5}
                                </DragItem>
                            ) : null}
                        </DropArea>
                        <Text>организма в целом.</Text>
                    </Text>
                </DragAndDropBlock>
            </>
        </Task>
    )
}