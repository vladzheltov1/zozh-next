import { useCardState } from "@/core/index";
import { Color } from "@/types/Color";
import { useState } from "react";

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
        setButtonColor("red");
        changeScore(100);
    }

    return { buttonColor, setButtonColor, buttonDisabled, setButtonDisabled, handleAnswer };
}