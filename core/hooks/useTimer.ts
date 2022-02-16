import { useActions } from "@/core/redux/hooks/redux";

export const useTimer = () => {
    const { resetTimer, startTimer, stopTimer, increment } = useActions();

    return { startTimer, stopTimer, resetTimer, increment };
}