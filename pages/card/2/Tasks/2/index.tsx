import { Space, Text } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { DragAndDrop, DragAndDropBlock, DragItem, DropArea, IContainerBundle, ROOT_CONTAINER, TextWithGaps } from "@/libs/DragAndDrop2";
import { useState } from "react";

const initalState: IContainerBundle = {
    rootContainer: ["профилактике", "жизнедеятельность", "развитие", "пищи", "рост"],
    gap1: null,
    gap2: null,
    gap3: null,
    gap4: null,
    gap5: null,
}

export const Task2 = () => {
    const [containers, setContainers] = useState(initalState);
    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(isCorrect())
    }

    const isCorrect = (): boolean => {
        return containers.gap1 === "пищи"
            && containers.gap2 === "жизнедеятельность"
            && containers.gap3 === "рост" || containers.gap3 === "развитие"
            && containers.gap4 === "рост" || containers.gap4 === "развитие"
            && containers.gap5 === "профилактике";
    }

    const onDragEnd = (result) => {
        const dnd = new DragAndDrop(result, containers);
        const data = dnd.move(ROOT_CONTAINER);
        setContainers(data);
    }

    return (
        <Task title="2. Заполните пропуски, перетаскивая нужные слова" action={checkTask}>
            <>
                <small>В данном задании присутствуют лишние слова, которые не должны быть использованы в тексте.</small>
                <DragAndDropBlock onDragEnd={onDragEnd}>
                    <Space height={10} />
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
                    <Text size={"1.4rem"} style={TextWithGaps}>
                        <Text>Правильное питание - система приёма</Text>
                        {/* пищи */}
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
                        <Text>, которая обеспечивает</Text>
                        {/* жизнедеятельность */}
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
                        <Text>человека, его</Text>
                        {/* рост/развитие */}
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
                        <Text>и</Text>
                        {/* рост/развитие */}
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
                        <Text>, а также способствует</Text>
                        {/* профилактике */}
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
                        <Text>неинфекционных заболеваний.</Text>
                    </Text>
                </DragAndDropBlock>
            </>
        </Task>
    )
}