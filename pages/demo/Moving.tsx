import { Space, Text } from "@/components/UI";
import { DragItem, DropArea, DragAndDrop, ContainerBundle, Container } from "@/libs/DragAndDrop2/";
import { FC, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Moving.module.scss";

export const Moving: FC = () => {
    const [containers, setContainers] = useState<ContainerBundle<Container>>({
        rootContainer: ["овощи", "фрукты", "фруктовые напитки"],
        gap1: null,
        gap2: null,
        gap3: null
    })

    const ROOT_CONTAINER = "rootContainer";

    const onDragEnd = (result) => {
        const dnd = new DragAndDrop(result, containers);
        const data = dnd.move(ROOT_CONTAINER);
        setContainers(data);
    }

    return <>
        <DragDropContext onDragEnd={onDragEnd}>
            {/* Root container */}
            <div>
                <DropArea direction={"horizontal"} droppableId={ROOT_CONTAINER}>
                    <div className={styles.root}>
                        {containers.rootContainer.map((item, index) => (
                            <DragItem draggableId={`rootItem-${index}`} key={index} index={index} className={styles.draggableItem}>
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
                    {containers.gap1 ? (
                        <DragItem draggableId={`gap1`} index={0} className={styles.draggableItem}>
                            {containers.gap1}
                        </DragItem>
                    ) : null}
                </DropArea>,&nbsp;
                <DropArea droppableId="gap2" direction="vertical" className={styles.emptyGap}>
                    {containers.gap2 && (
                        <DragItem draggableId={`gap2`} index={1} className={styles.draggableItem}>
                            {containers.gap2}
                        </DragItem>
                    )}
                </DropArea>
                и пить
                <DropArea droppableId="gap3" direction="vertical" className={styles.emptyGap}>
                    {containers.gap3 ? (
                        <DragItem draggableId={`gap3`} index={2} className={styles.draggableItem}>
                            {containers.gap3}
                        </DragItem>
                    ) : null}
                </DropArea>.
            </Text>
        </DragDropContext>
    </>
}