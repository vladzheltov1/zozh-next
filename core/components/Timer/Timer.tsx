import { Text } from "@/components/UI";
import { formatTime, useTimer } from "@/core/public";
import { useTypedSelector } from "@/core/redux/hooks/redux";
import { useEffect } from "react";

export const Timer = () => {
    const { startTimer, stopTimer, resetTimer, increment } = useTimer();
    const { timer } = useTypedSelector(state => state);

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
    }, [timer.isActive]);

    useEffect(() => {
        startTimer();
        return () => {
            stopTimer();
            resetTimer();
        }
    }, []);

    return (
        <Text size={16}>
            {formatTime(timer)}
        </Text>
    );
};
