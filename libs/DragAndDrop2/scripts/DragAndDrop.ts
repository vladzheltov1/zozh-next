import { Dispatch, SetStateAction } from "react";
import { DropResult } from "react-beautiful-dnd";
import { IContainerBundle } from "..";

/**
 * @deprecated use `reorderContainers` instead
 */
export class DragAndDrop {
    private result: any;
    private containers: IContainerBundle;

    public constructor(result: any, containers: IContainerBundle) {
        this.result = result;
        this.containers = containers;
    }

    /**
     * @todo Найти способ разделить реализации внутри условий в разные методы
     */
    public move = (rootContainerName: string) => {
        const { destination, source } = this.result;

        if (destination === null) {
            return this.containers;
        }

        const rootItems = this.containers.rootContainer;
        const updatedRootItemList = Array.from(rootItems);

        // Перемещение внутри одного контейнера
        if (destination.droppableId === source.droppableId) {
            const [removed] = updatedRootItemList.splice(source.index, 1);
            updatedRootItemList.splice(destination.index, 0, removed);
        }

        // Перемещение ИЗ rootContainer
        else if (source.droppableId === rootContainerName && destination.droppableId !== rootContainerName) {
            const [removed] = updatedRootItemList.splice(source.index, 1);
            this.containers[destination.droppableId] = removed;
        }

        // Перемещение В rootContainer
        else if (destination.droppableId === rootContainerName) {
            const removed = this.containers[source.droppableId];
            updatedRootItemList.splice(destination.index, 0, `${removed}`);
            this.containers[source.droppableId] = null;
        }

        // В перемещении rootContainer не фигурирует
        else if (source.droppableId !== rootContainerName && destination.droppableId !== rootContainerName) {
            this.containers[destination.droppableId] = this.containers[source.droppableId];;
            this.containers[source.droppableId] = null;
            return { ...this.containers };
        }


        return { ...this.containers, [rootContainerName]: updatedRootItemList };
    }
}

export const onDragEnd = (result: DropResult, containers: IContainerBundle, setStateCallback: Dispatch<SetStateAction<IContainerBundle>>) => {
    const data = reorderContainers(result, containers);
    setStateCallback(data);
}

const reorderContainers = (result: DropResult, containers: IContainerBundle) => {
    const { destination, source } = result;

    if (destination === null) {
        return containers;
    }

    const droppableId = source.droppableId === destination.droppableId ? source.droppableId : destination.droppableId;

    const [removed] = containers[source.droppableId].splice(source.index, 1);
    containers[droppableId].splice(destination.index, 0, removed);

    return { ...containers };
}