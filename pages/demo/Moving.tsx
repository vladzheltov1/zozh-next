import { Space, Text } from "@/components/UI";
import { DragItem, DropArea, IContainerBundle, onDragEnd } from "@/libs/DragAndDrop2/";
import { FC, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Moving.module.scss";

export const Moving: FC = () => {
    const [containers, setContainers] = useState<IContainerBundle>({
        root: ["овощи", "фрукты", "фруктовые напитки"],
        gap1: [],
        gap2: [],
        gap3: []
    });

    return <>
        <DragDropContext onDragEnd={result => onDragEnd(result, containers, setContainers)}>
            <Text bold size={21}>
                Перетащите элементы в подходящие пропуски
            </Text>

            <Space height={10} />

            <DropArea direction={"horizontal"} droppableId={"root"} outLook="root">
                {containers.root.map((item, index) => (
                    <DragItem key={index} index={index} className={styles.draggableItem}>
                        {item}
                    </DragItem>
                ))}
            </DropArea>

            <Space height={10} />

            <Text className={styles.line}>
                <Text>Чтобы оставаться здоровым, нужно есть</Text>
                <DropArea droppableId="gap1" direction="vertical" className={styles.emptyGap} isDropDisabled={containers.gap1.length > 0}>
                    {containers.gap1.length > 0 ? (
                        <DragItem index={0} className={styles.draggableItem}>
                            {containers.gap1[0]}
                        </DragItem>
                    ) : null}
                </DropArea>,&nbsp;
                <DropArea droppableId="gap2" direction="vertical" className={styles.emptyGap} isDropDisabled={containers.gap2.length > 0}>
                    {containers.gap2.length > 0 && (
                        <DragItem index={0} className={styles.draggableItem}>
                            {containers.gap2[0]}
                        </DragItem>
                    )}
                </DropArea>
                <Text>и пить</Text>
                <DropArea droppableId="gap3" direction="vertical" className={styles.emptyGap} isDropDisabled={containers.gap3.length > 0}>
                    {containers.gap3.length > 0 ? (
                        <DragItem index={0} className={styles.draggableItem}>
                            {containers.gap3[0]}
                        </DragItem>
                    ) : null}
                </DropArea>.
            </Text>
        </DragDropContext>
    </>
}

export default Moving;