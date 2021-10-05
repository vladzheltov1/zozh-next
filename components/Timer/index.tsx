import { Text } from "@/components/UI";
import { useEffect, useState } from "react";

/**
 * @todo Починить таймер :/
 */
export const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
                return;
            }
            setSeconds(seconds + 1);
        }, 1000);
    })


    return (
        <Text size={16}>
            {minutes < 10 && "0"}
            {minutes}
            :
            {seconds < 10 && "0"}
            {seconds}
        </Text>
    )
}