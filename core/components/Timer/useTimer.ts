import { useActions, useTypedSelector } from "@/core/redux/hooks/redux";
import { useEffect, useRef } from "react";

export const useTimer = () => {
    const { resetTimer, increment, startTimer, stopTimer } = useActions();

    return { startTimer, stopTimer, resetTimer };
}