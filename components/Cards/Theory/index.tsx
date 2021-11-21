import { Text } from "@/components/UI";
import { Task, useCardState } from "@/core/index";

export const Theory = ({ children }) => {
    const { changeNode } = useCardState();
    return (
        <Task title={""} action={changeNode}>
            <>
                <Text mode="h1">Основная теория по теме</Text>
                <Text mode="p">
                    {children}
                </Text>
            </>
        </Task>
    )
}