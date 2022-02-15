import { Space, Table, TableColumn, TableRow } from "@/components/UI";
import { Task, useCore } from "@/core/public";
import { DragAndDropBlock, DragItem, DropArea, IContainerBundle, onDragEnd } from "@/libs/DragAndDrop2";
import { useState } from "react";
import style from "./style.module.scss";

export const Task3 = () => {
    const { onAnswerSubmit } = useCore();

    const [containers, setContainers] = useState<IContainerBundle>({
        root: ["16:00", "7:30", "22:00", "21:30", "17:00"],
        gap1: [],
        gap2: [],
        gap3: [],
        gap4: [],
        gap5: [],
    });

    const checkTask = () => {
        onAnswerSubmit(isAnswerCorrect());
    }

    const isAnswerCorrect = () => {
        return containers.gap1[0] === "16:00" || containers.gap1[0] === "17:00"
            && containers.gap2[0] === "21:30"
            && containers.gap3[0] === "7:30"
            && containers.gap4[0] === "22:00"
            && containers.gap5[0] === "16:00" || containers.gap5[0] === "17:00"
    }

    return (
        <Task title="3. Составьте расписание так, чтобы всё успеть" action={checkTask}>
            <DragAndDropBlock onDragEnd={result => onDragEnd(result, containers, setContainers)}>
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
                                <DropArea droppableId="gap1" className={style.tableGapArea} isDropDisabled={containers.gap1.length > 0}>
                                    {containers.gap1.length > 0 && <DragItem draggableId={`draggable-1`}>{containers.gap1[0]}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Чтение книги перед сном</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap2" className={style.tableGapArea} isDropDisabled={containers.gap2.length > 0}>
                                    {containers.gap2.length > 0 && <DragItem draggableId={`draggable-2`}>{containers.gap2[0]}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Прогулка с собакой утром</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap3" className={style.tableGapArea} isDropDisabled={containers.gap3.length > 0}>
                                    {containers.gap3.length > 0 && <DragItem draggableId={`draggable-3`}>{containers.gap3[0]}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Сон</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap4" className={style.tableGapArea} isDropDisabled={containers.gap4.length > 0}>
                                    {containers.gap4.length > 0 && <DragItem draggableId={`draggable-4`}>{containers.gap4[0]}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Спортивная секция</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap5" className={style.tableGapArea} isDropDisabled={containers.gap5.length > 0}>
                                    {containers.gap5.length > 0 && <DragItem draggableId={`draggable-5`}>{containers.gap5[0]}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                    </tbody>
                </Table>
                <Space height={25} />
                <DropArea droppableId="root" direction="horizontal" outLook="root">
                    {containers.root.map((item, index) => (
                        <DragItem draggableId={`draggable-${index}`} key={item} index={index} className={style.draggableItemInRootContainer}>
                            <div className={style.dragItem}>{item}</div>
                        </DragItem>
                    ))}
                </DropArea>
            </DragAndDropBlock>
        </Task>
    )
}