import { Text } from "@/components/UI";
import { useActions, useTypedSelector } from "@/core/redux/hooks/redux";
import { useEffect } from "react";
import { formatTime } from "../../helpers";
import { useTimer } from "./useTimer";

const useStartTimer = () => {
    const { timer } = useTypedSelector(state => state);
    const { increment } = useActions();

    useEffect(() => {
        let interval = null;

        if (timer.isActive) {
            interval = setInterval(() => increment(), 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval)
        };
    }, [timer.isActive, increment]);
}

/**
 * @todo FIX THE FKN TIMER
 */
export const Timer = () => {
    const { timer } = useTypedSelector(state => state);
    const { startTimer, stopTimer, resetTimer } = useTimer();

    useEffect(() => {
        startTimer();
        return () => {
            stopTimer();
            resetTimer();
        }
    }, []);

    return (
        <Text size={16}>
            {formatTime(timer.time)}
        </Text>
    );
};
