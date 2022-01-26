
const changeNode = (): void => {
    cardStore.dispatch({ type: cardActions.CHANGE_NODE });
}

const resetCardData = async () => {
    await cardStore.dispatch({ type: cardActions.RESET })
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

/**
 * Форматирование числа, записанного в таймере в нормальный вид
 * @returns строка вида `mm:ss` 
 */
const formatTime = (timer): string => {
    const getSeconds: string = `0${(timer % 60)}`.slice(-2);
    const minutes: string = `${Math.floor(timer / 60)}`;
    const getMinutes: string = `0${Number(minutes) % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
}

const getTime = (): string => {
    return formatTime(timerStore.getState());
}

const getScore = (): number => {
    return cardStore.getState().score;
}

export {
    changeNode,
    onAnswerSubmit,
    getScore,
    getTime,
    formatTime,
    resetCardData
};

