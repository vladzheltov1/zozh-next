import { Space, Text } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { DragAndDropBlock, DragItem, DropArea, IContainerBundle, onDragEnd, TextWithGaps } from "@/libs/DragAndDrop2";
import { FC, useState } from "react";

export const Task2: FC = () => {
    const { onAnswerSubmit } = useCore();

    const [containers, setContainer] = useState<IContainerBundle>({
        root: ["профилактику", "жизни", "укрепление", "образ", "развитие"],
        gap1: [],
        gap2: [],
        gap3: [],
        gap4: [],
        gap5: []
    });

    const checkTask = () => {
        onAnswerSubmit(isAnswerCorrect());
    }

    const isAnswerCorrect = (): boolean => {
        return containers.gap1[0] === "образ"
            && containers.gap2[0] === "жизни"
            && containers.gap3[0] === "укрепление"
            && containers.gap4[0] === "профилактику"
            && containers.gap5[0] === "развитие";
    }

    return (
        <Task title={"2. Заполните пропуски, перетаскивая нужные слова"} action={checkTask}>
            <DragAndDropBlock onDragEnd={result => onDragEnd(result, containers, setContainer)}>
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
                    <Text>Здоровый образ жизни -</Text>
                    {/* Образ */}
                    <DropArea droppableId={"gap1"} direction="horizontal" isDropDisabled={containers.gap1.length > 0}>
                        {containers.gap1.length > 0 ? (
                            <DragItem>
                                {containers.gap1[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    {/* Жизни */}
                    <DropArea droppableId={"gap2"} direction="horizontal" isDropDisabled={containers.gap2.length > 0}>
                        {containers.gap2.length > 0 ? (
                            <DragItem>
                                {containers.gap2[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>человека, направленный на</Text>
                    {/* Укрепление */}
                    <DropArea droppableId={"gap3"} direction="horizontal" isDropDisabled={containers.gap3.length > 0}>
                        {containers.gap3.length > 0 ? (
                            <DragItem>
                                {containers.gap3[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>здоровья,</Text>
                    {/* Профилактику */}
                    <DropArea droppableId={"gap4"} direction="horizontal" isDropDisabled={containers.gap4.length > 0}>
                        {containers.gap4.length > 0 ? (
                            <DragItem>
                                {containers.gap4[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>болезней и</Text>
                    {/* Развитие */}
                    <DropArea droppableId={"gap5"} direction="horizontal" isDropDisabled={containers.gap5.length > 0}>
                        {containers.gap5.length > 0 ? (
                            <DragItem>
                                {containers.gap5[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>организма в целом.</Text>
                </Text>
            </DragAndDropBlock>
        </Task>
    )
}

export default Task2;