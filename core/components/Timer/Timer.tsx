import { Text } from "@/components/UI";
import { useActions, useTypedSelector } from "@/core/redux/hooks/redux";
import { useEffect, useRef } from "react";
import { formatTime } from "../../helpers";

/**
 * Таймер, который используется в заданиях
 */
export const Timer = () => {
    const interval = useRef(null);

    const { increment, resetTimer } = useActions();
    const { timer } = useTypedSelector(state => state);

    const startTimer = (): void => {
        interval.current = setInterval(() => {
            increment();
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
            resetTimer();
        }
    }, []);

    return (
        <Text size={16}>
            {formatTime(timer)}
        </Text>
    );
};
