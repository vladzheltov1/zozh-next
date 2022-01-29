import { ITimer } from "./redux/reducers";

/**
 * Форматирование числа, записанного в таймере в нормальный вид
 * @returns строка вида `mm:ss` 
 */
const formatTime = (timer: ITimer): string => {
    const getSeconds: string = `0${(timer.time % 60)}`.slice(-2);
    const minutes: string = `${Math.floor(timer.time / 60)}`;
    const getMinutes: string = `0${Number(minutes) % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
}

export {
    formatTime
};

