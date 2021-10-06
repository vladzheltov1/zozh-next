import { Button, Space, Text } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { useContext } from "react";
import { Task } from "../Task";


export const Theory = ({ children }) => {
    const { changeNode } = useContext(CardContext);

    return (
        <Task title={""} nextButton={<Button onClick={changeNode}>Далее</Button>}>
            <Text mode="h1">Основная теория по теме</Text>
            <Text mode="p">
                {children}
            </Text>
        </Task>
    )
}