import { Text } from "@/components/UI";
import { timerActions, timerStore } from "@/core/redux";
import React, { useEffect, useState } from "react";

/**
 * Таймер, который используется в заданиях
 */
export const Timer = () => {
    const [timer, setTimer] = useState(0);

    const startTimer = (): void => {
        setInterval(() => {
            timerStore.dispatch({ type: timerActions.INCREMENT });
        }, 1000);
    }

    /**
     * Запуск таймера после загрузки страницы
     */
    useEffect(() => startTimer(), []);

    /**
     * Форматирование числа, записанного в таймере в нормальный вид
     * @returns строка вида `mm:ss` 
     */
    const formatTime = (): string => {
        const getSeconds: string = `0${(timer % 60)}`.slice(-2);
        const minutes: string = `${Math.floor(timer / 60)}`;
        const getMinutes: string = `0${Number(minutes) % 60}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    }

    /**
     * Нужно, чтобы перерисовывать компонент при обновлении store
     */
    timerStore.subscribe(() => {
        setTimer(timerStore.getState());
    })

    return (
        <Text size={16}>
            {formatTime()}
        </Text>
    );
};
