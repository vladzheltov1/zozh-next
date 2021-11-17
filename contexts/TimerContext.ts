import { createContext } from "react";
export const TimerContext = createContext({
    getCurrentTime: (): string => void 0
});