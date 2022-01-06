import { Table, TableColumn, TableRow } from "@/components/UI";
import { onAnswerSubmit, Task } from "@/core/index";
import { DragItem, DropArea, reorder } from "@/libs/DragAndDrop";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import style from "./style.module.scss";

export const Task3 = () => {

    const [items, setItems] = useState([
        { id: 0, value: "16:00" },
        { id: 1, value: "7:30" },
        { id: 2, value: "22:00" },
        { id: 3, value: "21:30" },
        { id: 4, value: "17:00" }
    ]);

    const [gaps, setGaps] = useState({
        gap_1: { id: 0, value: null },
        gap_2: { id: 1, value: null },
        gap_3: { id: 2, value: null },
        gap_4: { id: 3, value: null },
        gap_5: { id: 4, value: null },
    });

    const onDragEnd = (result) => {
        const { destination, source } = result;
        const [resultItems, resultGaps] = reorder(destination, source, items, gaps, "root");

        setItems(resultItems);
        setGaps(resultGaps);
    };

    const checkTask = () => {
        if (gaps.gap_1.value === "16:00" || gaps.gap_1.value === "17:00"
            && gaps.gap_2.value === "21:30"
            && gaps.gap_3.value === "7:30"
            && gaps.gap_4.value === "22:00"
            && gaps.gap_5.value === "16:00" || gaps.gap_5.value === "17:00") {
            onAnswerSubmit(true);
            return;
        }
        onAnswerSubmit(false);
    }

    return (
        <Task title="3. Составьте расписание так, чтобы всё успеть" action={checkTask}>
            <DragDropContext onDragEnd={onDragEnd}>
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
                                <DropArea droppableId="gap_1" className={style.tableGapArea}>
                                    {gaps.gap_1.value && <DragItem className={style.dragItem} index={0} draggableId={gaps.gap_1.value}>{gaps.gap_1.value}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Чтение книги перед сном</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap_2" className={style.tableGapArea}>
                                    {gaps.gap_2.value && <DragItem className={style.dragItem} index={1} draggableId={gaps.gap_2.value}>{gaps.gap_2.value}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Прогулка с собакой утром</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap_3" className={style.tableGapArea}>
                                    {gaps.gap_3.value && <DragItem className={style.dragItem} index={2} draggableId={gaps.gap_3.value}>{gaps.gap_3.value}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Сон</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap_4" className={style.tableGapArea}>
                                    {gaps.gap_4.value && <DragItem className={style.dragItem} index={3} draggableId={gaps.gap_4.value}>{gaps.gap_4.value}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn mode="td">Спортивная секция</TableColumn>
                            <TableColumn mode="td">
                                <DropArea droppableId="gap_5" className={style.tableGapArea}>
                                    {gaps.gap_5.value && <DragItem className={style.dragItem} index={4} draggableId={gaps.gap_5.value}>{gaps.gap_5.value}</DragItem>}
                                </DropArea>
                            </TableColumn>
                        </TableRow>
                    </tbody>
                </Table>
                <DropArea droppableId="root" direction="horizontal" className={style.rootContainer}>
                    {items.map((item, index) => (
                        <DragItem key={item.id} draggableId={"draggable_" + item.id || ""} index={index}>
                            <div className={style.dragItem}>{item.value}</div>
                        </DragItem>
                    ))}
                </DropArea>
            </DragDropContext>
        </Task>
    )
}