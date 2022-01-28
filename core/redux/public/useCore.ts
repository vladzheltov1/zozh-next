import { useActions } from "../hooks/redux";

export const useCore = () => {
    const { changeNode, setButtonColor, addScore, setButtonDisabled, setButtonEnabled, resetTimer } = useActions();

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
            addScore(100);
            setButtonDisabled();
            setButtonColor("success");

            setTimeout(() => {
                changeNode();
                setButtonEnabled();
                setButtonColor("primary");
            }, 3000);

            return;
        }

        addScore(-10);
        setButtonColor("danger");

        setTimeout(() => {
            setButtonColor("primary");
        }, 2000);


        return;
    }

    return { onAnswerSubmit, changeNode, resetTimer, formatTime }
}