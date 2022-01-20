import { Text } from "@/components/UI";
import { timerActions, timerStore } from "@/core/redux";
import React, { useEffect, useRef, useState } from "react";
import { formatTime } from "../../helpers";

/**
 * Таймер, который используется в заданиях
 */
export const Timer = () => {
    const [timer, setTimer] = useState(0);
    const interval = useRef(null);

    const startTimer = (): void => {
        interval.current = setInterval(() => {
            timerStore.dispatch({ type: timerActions.INCREMENT });
        }, 1000);
    }

    /**
     * Запуск таймера после загрузки страницы, очистка при выходе из карточки
     */
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
            timerStore.dispatch({ type: timerActions.RESET })
        }
    }, []);

    /**
     * Нужно, чтобы перерисовывать компонент при обновлении `store`
     */
    timerStore.subscribe(() => {
        setTimer(timerStore.getState());
    })

    return (
        <Text size={16}>
            {formatTime(timer)}
        </Text>
    );
};
