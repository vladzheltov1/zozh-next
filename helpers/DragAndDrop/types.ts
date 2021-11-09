import { DraggableLocation } from "react-beautiful-dnd"

type DragAndDropItems = {

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