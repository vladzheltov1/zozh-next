import { Text } from "@/components/UI";
import React, { useEffect, useRef, useState } from "react";
import { TimerContext } from "@/contexts/TimerContext";

/**
 * Таймер, который используется в заданиях
 */
export const Timer = () => {
    const [timer, setTimer] = useState(0);

    // Нужен для привязки интервала
    const increment = useRef(null);

    /**
     * Форматирование числа, записанного в таймере в нормальный вид
     * @returns строку вида `mm:ss` 
     */
    const formatTime = (): string => {
        const getSeconds: string = `0${(timer % 60)}`.slice(-2);
        const minutes: string = `${Math.floor(timer / 60)}`;
        const getMinutes: string = `0${Number(minutes) % 60}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    }

    /**
     * Функция, запускающая таймер
     */
    const handleStart = (): void => {
        increment.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    }

    /**
     * Запуск таймера (НЕ удалять пустые [])
     */
    useEffect(() => handleStart(), []);

    /**
     * Функция, которая возвращает значение таймера на момент вызова в приведённом виде `mm:ss`.
     * @todo Исправить ошибку: функция возвращает undefined, если вызывается вне данного компонента (через контекст)
     * @returns строку формата `mm:ss`
     */
    const getCurrentTime = (): string => formatTime();

    return (
        <TimerContext.Provider value={{ getCurrentTime }}>
            <Text size={16}>
                {formatTime()}
            </Text>
        </TimerContext.Provider>
    );
};
