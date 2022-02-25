import { Space, Text } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { DragAndDropBlock, DragItem, DropArea, onDragEnd, TextWithGaps } from "@/libs/DragAndDrop2";
import { useState } from "react";

const initialState = {
    root: ["спорта", "организма", "спортивных", "жизни", "активности", "оздоровление"],
    gap1: [],
    gap2: [],
    gap3: [],
    gap4: []
}

export const Task2 = () => {

    const [containers, setContainers] = useState(initialState);

    const { onAnswerSubmit } = useCore();

    const checkTask = () => {
        onAnswerSubmit(isCorrect());
    }

    const isCorrect = (): boolean => {
        return containers.gap1[0] === "активности"
            && containers.gap2[0] === "спортивных"
            && containers.gap3[0] === "оздоровление"
            && containers.gap4[0] === "организма";
    }

    return (
        <Task title="2. Заполните пропуски, перетаскивая нужные слова" action={checkTask}>
            <DragAndDropBlock onDragEnd={result => onDragEnd(result, containers, setContainers)}>
                <Text mode="small">В данном задании присутствуют лишние слова, которые не должны быть использованы в тексте</Text>
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
                    <Text>Физическая активность - вид двигательной</Text>
                    {/* активности */}
                    <DropArea droppableId={"gap1"} direction="horizontal" isDropDisabled={containers.gap1.length > 0}>
                        {containers.gap1.length > 0 ? (
                            <DragItem>
                                {containers.gap1[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>, направленной на развитие</Text>
                    {/* спортивных */}
                    <DropArea droppableId={"gap2"} direction="horizontal" isDropDisabled={containers.gap2.length > 0}>
                        {containers.gap2.length > 0 ? (
                            <DragItem>
                                {containers.gap2[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>навыков и</Text>
                    {/* оздоровление */}
                    <DropArea droppableId={"gap3"} direction="horizontal" isDropDisabled={containers.gap3.length > 0}>
                        {containers.gap3.length > 0 ? (
                            <DragItem>
                                {containers.gap3[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>человеческого</Text>
                    {/* организма */}
                    <DropArea droppableId={"gap4"} direction="horizontal" isDropDisabled={containers.gap4.length > 0}>
                        {containers.gap4.length > 0 ? (
                            <DragItem>
                                {containers.gap4[0]}
                            </DragItem>
                        ) : null}
                    </DropArea>
                    <Text>в целом.</Text>
                </Text>
            </DragAndDropBlock>
        </Task>
    )
}

export default Task2;