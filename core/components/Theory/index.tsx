import { Text } from "@/components/UI";
import { Task, useCore } from "@/core/public";

export const Theory = ({ children }) => {
    const { changeNode } = useCore();
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