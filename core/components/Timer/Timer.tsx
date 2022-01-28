import { Text } from "@/components/UI";
import { useTypedSelector } from "@/core/redux/hooks/redux";
import { useEffect } from "react";
import { formatTime } from "../../helpers";
import { useTimer } from "./script";

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
            {formatTime(timer)}
        </Text>
    );
};
