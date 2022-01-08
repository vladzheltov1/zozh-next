import { Space, Table, TableColumn, TableRow } from "@/components/UI";
import { onAnswerSubmit, Task } from "@/core/index";
import { DragAndDrop, DragAndDropBlock, DragItem, DropArea, IContainerBundle, ROOT_CONTAINER } from "@/libs/DragAndDrop2";
import { useState } from "react";
import style from "./style.module.scss";

export const Task3 = () => {
    const [containers, setContainers] = useState<IContainerBundle>({
        rootContainer: ["16:00", "7:30", "22:00", "21:30", "17:00"],
        gap1: null,
        gap2: null,
        gap3: null,
        gap4: null,
        gap5: null,
    });

    const checkTask = () => onAnswerSubmit(isAnswerCorrect());

    const isAnswerCorrect = () => {
        return containers.gap1 === "16:00" || containers.gap1 === "17:00"
            && containers.gap2 === "21:30"
            && containers.gap3 === "7:30"
            && containers.gap4 === "22:00"
            && containers.gap5 === "16:00" || containers.gap5 === "17:00"
    }

    const onDragEnd = (result) => {
        const dnd = new DragAndDrop(result, containers);
        const data = dnd.move(ROOT_CONTAINER);
        setContainers(data);
    };

    return (
        <Task title="3. Составьте расписание так, чтобы всё успеть" action={checkTask}>
            <DragAndDropBlock onDragEnd={onDragEnd}>
                <Table accentColor="green" width="80%">
                    <thead>
                        <TableRow>
                            <TableColumn mode="th">Вид активности</TableColumn>
                            <TableColumn mode="th">Время</TableColumn>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableColumn mode="td">Выполнение домашних заданий</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap1" className={style.tableGapArea} isDropDisabled={containers.gap1 !== null}>
                                    {containers.gap1 && <DragItem index={0} draggableId={containers.gap1}>{containers.gap1}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Чтение книги перед сном</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap2" className={style.tableGapArea} isDropDisabled={containers.gap2 !== null}>
                                    {containers.gap2 && <DragItem index={1} draggableId={containers.gap2}>{containers.gap2}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Прогулка с собакой утром</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap3" className={style.tableGapArea} isDropDisabled={containers.gap3 !== null}>
                                    {containers.gap3 && <DragItem index={2} draggableId={containers.gap3}>{containers.gap3}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Сон</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap4" className={style.tableGapArea} isDropDisabled={containers.gap4 !== null}>
                                    {containers.gap4 && <DragItem index={3} draggableId={containers.gap4}>{containers.gap4}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Спортивная секция</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap5" className={style.tableGapArea} isDropDisabled={containers.gap5 !== null}>
                                    {containers.gap5 && <DragItem index={4} draggableId={containers.gap5}>{containers.gap5}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                    </tbody>
                </Table>
                <Space height={25} />
                <DropArea droppableId={ROOT_CONTAINER} direction="horizontal" outLook="root">
                    {containers.rootContainer.map((item, index) => (
                        <DragItem key={item} draggableId={"draggable_" + item || ""} index={index}>
                            <div className={style.dragItem}>{item}</div>
                        </DragItem>
                    ))}
                </DropArea>
            </DragAndDropBlock>
        </Task>
    )
}