// Данный файл представляет собой набор функций, реализующих некоторый функцианал, который может быть использован внутри множества компонентов.
// Это нужно для того, чтобы несистемные компоненты как можно реже обращались к функционалу ядра.

import { cardActions, cardStore, taskActions, taskStore } from ".";

const changeNode = (): void => {
    cardStore.dispatch({ type: cardActions.CHANGE_NODE });
}

const onAnswerSubmit = (correct: boolean) => {
    if (correct) {
        cardStore.dispatch({ type: cardActions.CHANGE_SCORE, data: 100 });
        taskStore.dispatch({ type: taskActions.SET_BUTTON_DISABLED, data: true });
        taskStore.dispatch({ type: taskActions.SET_BUTTON_COLOR, data: "success" });

        setTimeout(() => {
            cardStore.dispatch({ type: cardActions.CHANGE_NODE });
            taskStore.dispatch({ type: taskActions.SET_BUTTON_DISABLED, data: false });
            taskStore.dispatch({ type: taskActions.SET_BUTTON_COLOR, data: "primary" });
        }, 3000);

        return;
    }

    cardStore.dispatch({ type: cardActions.CHANGE_SCORE, data: -10 });
    taskStore.dispatch({ type: taskActions.SET_BUTTON_COLOR, data: "danger" });

    setTimeout(() => {
        taskStore.dispatch({ type: taskActions.SET_BUTTON_COLOR, data: "primary" });
    }, 2000);

    return;
}

export {
    changeNode,
    onAnswerSubmit
};
