import { Color } from "@/types/Color";
import { createContext } from "react";

interface T {
    buttonColor: Color,
    buttonDisabled: boolean,
    handleAnswer: Function,
}

export const TaskContext = createContext<T>({
    buttonColor: "blue",
    buttonDisabled: false,
    handleAnswer: isAnswerCorrect => isAnswerCorrect
});