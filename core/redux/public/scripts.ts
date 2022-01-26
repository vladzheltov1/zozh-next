import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { cardSlice, taskSlice, timerSlice } from "../store/reducers/";

export const useCore = () => {
    const taskState = useAppSelector(state => state.taskReducer);
    const cardState = useAppSelector(state => state.cardReducer);
    const timerState = useAppSelector(state => state.timerReducer);

    const cardActions = cardSlice.actions;
    const taskActions = taskSlice.actions;
    const timerActions = timerSlice.actions;

    const dispatch = useAppDispatch();

    const changeNode = () => {
        dispatch(cardActions.setActiveNode(cardState.currentNode + 1));
    }

    const resetData = () => {
        dispatch(cardActions.reset(cardState));
    }

    const incrementTimer = () => {
        dispatch(timerActions.increment(timerState));
    }

    const resetTimer = () => {
        dispatch(timerActions.reset(timerState));
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

    const onAnswerSubmit = (correct: boolean) => {
        if (correct) {
            dispatch(cardActions.addScore(100));
            dispatch(taskActions.setButtonDisabled(taskState));
            dispatch(taskActions.setButtonColor("success"));

            setTimeout(() => {
                dispatch(cardActions.setActiveNode(cardState));
                dispatch(taskActions.setButtonEnabled(taskState));
                dispatch(taskActions.setButtonColor("primary"));
            }, 3000);

            return;
        }

        dispatch(cardActions.addScore(-10));
        dispatch(taskActions.setButtonColor("danger"));

        setTimeout(() => {
            dispatch(taskActions.setButtonColor("primary"));
        }, 2000);

        return;
    }

    return { changeNode, resetData, onAnswerSubmit, incrementTimer, resetTimer, formatTime, currentNode: cardState.currentNode, score: cardState.score, time: timerState, buttonAppearance: cardState.buttonAppearance, buttonDisabled: cardState.buttonDisabled }
}