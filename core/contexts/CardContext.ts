import { createContext } from "react";

interface T {
    score: number,
    changeScore: Function,
    changeNode: Function
}

export const CardContext = createContext<T>({
    score: 0,
    changeScore: () => void 0,
    changeNode: () => void 0
})