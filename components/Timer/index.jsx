import { Text } from "@/components/UI";
import { useState, useEffect, useCallback } from "react";

/**
 * @todo Fix timer :/
 */
export const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (seconds === 59) {
                setMinutes(minutes + 1);
                seconds(0);
                return;
            }
            setSeconds(seconds + 1);
        }, 1000);
    })


    return (
        <div>
            <Text>
                {minutes < 10 && ("0")}
                {minutes}
                :
                {seconds < 10 && ("0")}
                {seconds}
            </Text>
        </div>
    )
}