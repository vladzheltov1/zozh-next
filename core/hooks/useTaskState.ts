import { useState, useContext } from "react";
import { Color } from "@/types/Color";
import { useCardState } from "@/core/index";

export const useTaskState = () => {
    const [buttonColor, setButtonColor] = useState<Color>("blue");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    const { changeScore } = useCardState();

    const handleAnswer = (isAnswerCorrect: boolean) => {
        if (!isAnswerCorrect) {
            setButtonColor("red");
            changeScore(-10);
            setInterval(() => {
                setButtonColor("blue");
            }, 4000);
        }
        else {
            setButtonDisabled(true);
            setButtonColor("green");
            changeScore(100);
        }
    }

    return { buttonColor, setButtonColor, buttonDisabled, setButtonDisabled, handleAnswer };
}