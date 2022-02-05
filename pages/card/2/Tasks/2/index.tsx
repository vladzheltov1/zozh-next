import { Space, Text } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { DragAndDropBlock, DragItem, DropArea, IContainerBundle, onDragEnd, ROOT_CONTAINER, TextWithGaps } from "@/libs/DragAndDrop2";
import { useState } from "react";

const initialState: IContainerBundle = {
    root: ["профилактике", "жизнедеятельность", "развитие", "пищи", "рост"],
    gap1: [],
    gap2: [],
    gap3: [],
    gap4: [],
    gap5: [],
}

export const Task2 = () => {
    const [containers, setContainers] = useState(initialState);
    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(isCorrect())
    }

    const isCorrect = (): boolean => {
        return containers.gap1[0] === "пищи"
            && containers.gap2[0] === "жизнедеятельность"
            && containers.gap3[0] === "рост" || containers.gap3[0] === "развитие"
            && containers.gap4[0] === "рост" || containers.gap4[0] === "развитие"
            && containers.gap5[0] === "профилактике";
    }

    return (
        <Task title="2. Заполните пропуски, перетаскивая нужные слова" action={checkTask}>
            <DragAndDropBlock onDragEnd={result => onDragEnd(result, containers, setContainers)}>
                <Space height={10} />
                <DropArea droppableId={"root"} outLook="root" direction="horizontal">
                    {containers.root.map((item, index) => (
                        <DragItem key={item} index={index}>
                            {item}
                        </DragItem>
                    ))}
                </DropArea>
                <Space height={20} />
                <Text style={TextWithGaps}>
                    <Text>Правильное питание - система приёма</Text>
                    {/* пищи */}
                    <DropArea droppableId={"gap1"} direction="horizontal" isDropDisabled={containers.gap1.length > 0}>
                        {containers.gap1.length > 0 ? (
                            <DragItem>
                                {containers.gap1[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>, которая поддерживает</Text>
                    {/* жизнедеятельность */}
                    <DropArea droppableId={"gap2"} direction="horizontal" isDropDisabled={containers.gap2.length > 0}>
                        {containers.gap2.length > 0 ? (
                            <DragItem>
                                {containers.gap2[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>человека, его</Text>
                    {/* рост/развитие */}
                    <DropArea droppableId={"gap3"} direction="horizontal" isDropDisabled={containers.gap3.length > 0}>
                        {containers.gap3.length > 0 ? (
                            <DragItem>
                                {containers.gap3[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>и</Text>
                    {/* рост/развитие */}
                    <DropArea droppableId={"gap4"} direction="horizontal" isDropDisabled={containers.gap4.length > 0}>
                        {containers.gap4.length > 0 ? (
                            <DragItem>
                                {containers.gap4[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>, а также способствует</Text>
                    {/* профилактике */}
                    <DropArea droppableId={"gap5"} direction="horizontal" isDropDisabled={containers.gap5.length > 0}>
                        {containers.gap5.length > 0 ? (
                            <DragItem>
                                {containers.gap5[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>неинфекционных заболеваний.</Text>
                </Text>
            </DragAndDropBlock>
        </Task>
    )
}