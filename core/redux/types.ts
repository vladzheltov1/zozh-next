import { Color } from "@/types/Color";

export type Action = {
    type: string,
    data?: any
}
export type CardStoreState = {
    currentNode: number,
    score: number
}
export type TaskStoreState = {
    buttonColor: Color,
    buttonDisabled: boolean
}