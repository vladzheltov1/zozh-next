import { Dispatch, SetStateAction } from "react";
import { DropResult } from "react-beautiful-dnd";
import { IContainerBundle } from "..";

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