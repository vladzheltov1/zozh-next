import { useEffect, useRef, useState } from "react";

/**
 * @todo починить баг: обновление состояния внутри хука не приводит в обновлению компонента, где этот хук используется
 * @description на данный момент требуется в `/pages/card/1/Tasks/5`
 * @see https://ru.stackoverflow.com/questions/1371961/%d0%a5%d1%83%d0%ba-usestate-%d1%81-callback%d0%be%d0%bc
 */
export const useStateWithCallback = (initialState) => {
    const [state, setState] = useState(initialState);

    const isFirstLoad = useRef(true);
    const callbackFunction = useRef<Function>(null);

    const setCallbackState = (updatedState: any, callback?: Function) => {
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

    return [state, setCallbackState];
}