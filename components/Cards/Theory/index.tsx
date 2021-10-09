import { Text } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { useContext } from "react";
// import { Task } from "../Task";
import { useTask } from "../../../hooks/useTask";


export const Theory = ({ children }) => {
    const { changeNode } = useContext(CardContext);
    const { TaskComponent } = useTask();

    return (
        <TaskComponent title={""} next={changeNode}>
            <Text mode="h1">Основная теория по теме</Text>
            <Text mode="p">
                {children}
            </Text>
        </TaskComponent>
    )
}