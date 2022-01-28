import { useActions } from "@/core/redux/hooks/redux";
import { useEffect, useState } from "react"

export const useTimer = () => {
    const [start, setStart] = useState(false);
    const { resetTimer, increment } = useActions();

    useEffect(() => {
        let interval = null;

        if (start) {
            interval = setInterval(() => increment(), 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [start]);

    const startTimer = (): void => {
        setStart(true);
    }

    const stopTimer = (): void => {
        setStart(false);
    }

    return { startTimer, stopTimer, resetTimer };
}