import { Text } from "@/components/UI";
import React, { useEffect, useRef, useState } from "react";

/**
 * Таймер, который используется в заданиях
 */
export const Timer = () => {
    const [timer, setTimer] = useState(0);

    // Нужен для привязки интервала
    const increment = useRef(null);

    /**
     * Функция, запускающая таймер
     */
    const handleStart = () => {
        increment.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    }

    /**
     * Форматирование числа, записанного в таймере в нормальный вид
     * @returns строку вида `mm:ss` 
     */
    const formatTime = () => {
        const getSeconds: string = `0${(timer % 60)}`.slice(-2)
        const minutes: string = `${Math.floor(timer / 60)}`
        const getMinutes: string = `0${Number(minutes) % 60}`.slice(-2)

        return `${getMinutes}:${getSeconds}`;
    }

    /**
     * Запуск таймера (НЕ удалять пустые [])
     */
    useEffect(() => {
        handleStart();
    }, []);

    return (
        <Text size={16}>
            {formatTime()}
        </Text>
    );
};