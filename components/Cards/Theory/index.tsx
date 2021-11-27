import { Text } from "@/components/UI";
import { cardActions, cardStore, Task } from "@/core/index";

export const Theory = ({ children }) => {
    const changeNode = (): void => {
        cardStore.dispatch({ type: cardActions.CHANGE_NODE });
    }
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