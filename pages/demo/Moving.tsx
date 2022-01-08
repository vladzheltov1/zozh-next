import { Space, Text } from "@/components/UI";
import { ContainerBundle, DragAndDrop, DragItem, DropArea } from "@/libs/DragAndDrop2/";
import { FC, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Moving.module.scss";

export const Moving: FC = () => {
    const [containers, setContainers] = useState<ContainerBundle>({
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
            <Text bold size={21}>
                Перетащите элементы в подходящие пропуски
            </Text>

            <Space height={10} />

            <DropArea direction={"horizontal"} droppableId={ROOT_CONTAINER} outLook="root">
                {containers.rootContainer.map((item, index) => (
                    <DragItem draggableId={`rootItem-${index}`} key={index} index={index} className={styles.draggableItem}>
                        {item}
                    </DragItem>
                ))}
            </DropArea>

            <Space height={10} />

            <Text className={styles.line}>
                <Text>Чтобы оставаться здоровым, нужно есть</Text>
                <DropArea droppableId="gap1" direction="vertical" className={styles.emptyGap} isDropDisabled={containers.gap1 !== null}>
                    {containers.gap1 ? (
                        <DragItem draggableId={`gap1`} index={0} className={styles.draggableItem}>
                            {containers.gap1}
                        </DragItem>
                    ) : null}
                </DropArea>,&nbsp;
                <DropArea droppableId="gap2" direction="vertical" className={styles.emptyGap} isDropDisabled={containers.gap2 !== null}>
                    {containers.gap2 && (
                        <DragItem draggableId={`gap2`} index={1} className={styles.draggableItem}>
                            {containers.gap2}
                        </DragItem>
                    )}
                </DropArea>
                <Text>и пить</Text>
                <DropArea droppableId="gap3" direction="vertical" className={styles.emptyGap} isDropDisabled={containers.gap3 !== null}>
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