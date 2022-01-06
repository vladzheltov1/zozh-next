import { Space, Text } from "@/components/UI";
import { DragItem, DropArea, reorder } from "@/libs/DragAndDrop/";
import { FC, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Moving.module.scss";

export const Moving: FC = () => {
    const [items, setItems] = useState(["овощи", "фрукты", "фруктовые напитки"]);
    const [gaps, setGaps] = useState({
        gap1: null,
        gap2: null,
        gap3: null
    });

    const onDragEnd = (result) => {
        const { destination, source } = result;
        const [newItems, newGaps] = reorder(destination, source, items, gaps, "root");

        setItems(newItems);
        setGaps(newGaps);

        console.log({ newGaps });
        console.log({ gaps });
    }

    return <>
        <DragDropContext onDragEnd={onDragEnd}>
            {/* Root container */}
            <div>
                <DropArea direction={"horizontal"} droppableId={`root`}>
                    <div className={styles.root}>
                        {items.map((item, index) => (
                            <DragItem draggableId={`item-${index}`} key={index} index={index} className={styles.draggableItem}>
                                {item}
                            </DragItem>
                        ))}
                    </div>
                </DropArea>
            </div>

            <Space height={10} />

            {/* Gaps area */}
            <Text className={styles.gapsArea}>
                Чтобы оставаться здоровым, нужно есть
                <DropArea droppableId="gap1" direction="vertical" className={styles.emptyGap}>
                    {gaps.gap1 ? (
                        <DragItem draggableId={`gap1`} index={0} className={styles.draggableItem}>
                            {gaps.gap1}
                        </DragItem>
                    ) : null}
                </DropArea>,&nbsp;
                <DropArea droppableId="gap2" direction="vertical" className={styles.emptyGap}>
                    {gaps.gap2 && (
                        <DragItem draggableId={`gap2`} index={1} className={styles.draggableItem}>
                            {gaps.gap2}
                        </DragItem>
                    )}
                </DropArea>
                и пить
                <DropArea droppableId="gap3" direction="vertical" className={styles.emptyGap}>
                    {gaps.gap3 ? (
                        <DragItem draggableId={`gap3`} index={2} className={styles.draggableItem}>
                            {gaps.gap3}
                        </DragItem>
                    ) : null}
                </DropArea>.
            </Text>
        </DragDropContext>
    </>
}