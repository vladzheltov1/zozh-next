import { useEffect, useRef, useState } from "react";

export const useStateWithCallback = (initialState) => {
    const [state, setState] = useState(initialState);

    const isFirstLoad = useRef(true);
    const callbackFunction = useRef<Function>(null);

    useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        callbackFunction.current?.(state);
    }, [state]);

    const setCallbackState = (updatedState: any, callback?: Function) => {
        callbackFunction.current = callback;
        setState(updatedState);
    }

    return [state, setCallbackState];
}