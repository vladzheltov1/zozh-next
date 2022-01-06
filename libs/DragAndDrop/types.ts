import { DraggableLocation } from "react-beautiful-dnd"

type DragAndDropItems = {
    [keyof: string]: string
}

type DragAndDropReorderList = {
    item: DragAndDropItems,
    source: DraggableLocation,
    destination: DraggableLocation
}

export type {
    DragAndDropItems,
    DragAndDropReorderList
}