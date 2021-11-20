import { CardContext } from "@/contexts/cardContext";
import { Color } from "@/types/Color";
import { FC, useContext, useState } from "react";
import { ITaskComponentProps, TaskContext } from "../../index";
import { TaskComponent } from "./TaskComponent";

export const Task: FC<ITaskComponentProps> = (props) => {

    const [buttonColor, setButtonColor] = useState<Color>("blue");
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    const { changeScore } = useContext(CardContext);

    const handleAnswer = (isAnswerCorrect: boolean) => {
        console.log("Handler working");

        if (!isAnswerCorrect) {
            setButtonColor("red");
            changeScore(-10);
            setInterval(() => {
                return setButtonColor("blue");
            }, 4000);
        }
        setButtonDisabled(true);
        setButtonColor("green");
    }

    return (
        <TaskContext.Provider value={{
            buttonColor,
            buttonDisabled,
            handleAnswer
        }}>
            <TaskComponent {...props} />
        </TaskContext.Provider>
    )
}