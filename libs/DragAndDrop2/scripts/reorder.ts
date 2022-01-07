import { Container, ContainerBundle } from "..";

export type IItems = string;

export type IGaps = {
    [key: string]: string | null
}

export class DragAndDrop {
    private result: any;
    private containers: ContainerBundle<Container>;

    public constructor(result: any, containers: ContainerBundle<Container>) {
        this.result = result;
        this.containers = containers;
    }

    /**
     * @todo Найти способ разделить реализации внутри условий в разные методы
     */
    public move = () => {
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

        // Перемещение В rootContainer
        else if (destination.droppableId === "rootContainer") {
            const removed = this.containers[source.droppableId];
            updatedRootItemList.splice(destination.index, 0, `${removed}`);
            this.containers[source.droppableId] = null;
        }

        // Перемещение ИЗ rootContainer
        else {
            const [removed] = updatedRootItemList.splice(source.index, 1);
            this.containers[destination.droppableId] = removed;
        }

        return { ...this.containers, ["rootContainer"]: updatedRootItemList };
    }
}