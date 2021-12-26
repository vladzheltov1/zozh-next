import { ButtonAppearance } from "@/components/UI";

export type Action = {
    type: string,
    data?: any
}
export type CardStoreState = {
    currentNode: number,
    score: number
}
export type TaskStoreState = {
    buttonAppearance: ButtonAppearance,
    buttonDisabled: boolean
}