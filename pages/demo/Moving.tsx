import { Space } from "@/components/UI";
import { DragItem, DropArea, reorder } from "@/helpers/DragAndDrop/";
import { FC, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Moving.module.scss";

export const Moving: FC = () => {
    const [items, setItems] = useState(["овощи", "фрукты", "фруктовые напитки"]);
    const [gaps, setGaps] = useState({
        gap1: { id: 0, value: "" },
        gap2: { id: 1, value: "" },
        gap3: { id: 2, value: "" },
    });

    const onDragEnd = (result) => {
        const { destination, source } = result;
        const [newItems, newGaps] = reorder(destination, source, items, gaps, "root");

        // Updating states
        setItems(newItems);
        setGaps(newGaps);
    }

    return <>
        <DragDropContext onDragEnd={onDragEnd}>
            {/* Root container */}
            <DropArea direction={"horizontal"} droppableId={`root`}>
                <div className={styles.root}>
                    {items.map((item, index) => (
                        <DragItem draggableId={`item-${index}`} key={index} index={index} className={styles.draggableItem}>
                            {item}
                        </DragItem>
                    ))}
                </div>
            </DropArea>

            <Space height={10} />

            {/* Gaps area */}
            <div className={styles.gapsArea}>
                Чтобы оставаться здоровым, нужно есть
                <DropArea droppableId="gap-1">
                    {gaps.gap1.value ? (
                        <DragItem draggableId={`gap-${gaps.gap1.id}`} index={0} className={styles.draggableItem}>
                            {gaps.gap1.value}
                        </DragItem>
                    ) : (
                        <div className={styles.emptyGap}></div>
                    )}
                </DropArea>,&nbsp;
                <DropArea droppableId="gap-2" direction="vertical">
                    {gaps.gap2.value ? (
                        <DragItem draggableId={`gap-${gaps.gap2.id}`} index={1} className={styles.draggableItem}>
                            {gaps.gap2.value}
                        </DragItem>
                    ) : (
                        <div className={styles.emptyGap}></div>
                    )}
                </DropArea>
            </div>
        </DragDropContext>
    </>
}