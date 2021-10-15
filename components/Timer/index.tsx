import React, { useCallback, useState } from "react";
import { Text } from "@/components/UI";

/**
 * Таймер, который используется в заданиях.
 * @todo Починить таймер: при каждом обновлении компонента система пересчитывает таймер от 0 до нужного времени. 
 * То есть при обновлени получается 0, 0, 1, 0, 1, 2 и т.д. Возможно ли избежать такого количества обновлений?
 */
export const Timer = React.memo(function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const startTimer = useCallback(() => {
        setInterval(() => {
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
                return;
            }
            setSeconds(seconds + 1);
        }, 1000);
    }, [seconds, minutes]);

    startTimer();

    return (
        <Text size={16}>
            {minutes < 10 && "0"}
            {minutes}
            :
            {seconds < 10 && "0"}
            {seconds}
        </Text>
    );
});