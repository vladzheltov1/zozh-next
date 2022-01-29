import { useActions } from "../redux/hooks/redux";

export const useCore = () => {
    const { changeNode, setButtonColor, addScore, setButtonDisabled, setButtonEnabled, resetTimer } = useActions();

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

    return { onAnswerSubmit, changeNode, resetTimer }
}