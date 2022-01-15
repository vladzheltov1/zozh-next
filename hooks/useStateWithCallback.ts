import { useEffect, useRef, useState } from "react";

export const useStateWithCallback = (initialState) => {
    const [state, setState] = useState(initialState);

    const isFirstLoad = useRef(true);
    const callbackFunction = useRef(null);

    const setCallbackState = (updatedState, callback?: Function) => {
        callbackFunction.current = callback;
        setState(updatedState);
    }

    useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        callbackFunction.current?.(state);
    }, [state]);

    const isFunction = (candidate): Boolean => {
        return typeof candidate === "function";
    }

    return [state, setCallbackState];
}