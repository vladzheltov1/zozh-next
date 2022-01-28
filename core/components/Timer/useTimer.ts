import { useActions, useTypedSelector } from "@/core/redux/hooks/redux";
import { useEffect } from "react";

export const useTimer = () => {
    const { resetTimer, increment, startTimer, stopTimer } = useActions();
    const { timer } = useTypedSelector(state => state);

    useEffect(() => {
        let interval = null;

        if (timer.isActive) {
            interval = setInterval(() => increment(), 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer.isActive, increment]);

    return { startTimer, stopTimer, resetTimer };
}