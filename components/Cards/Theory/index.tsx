import { useContext } from "react";
import { Text } from "@/components/UI";
import { useTask } from "@/hooks/useTask";
import { CardContext } from "@/contexts/CardContext";


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