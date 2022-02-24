import { useEffect, useRef, useState } from "react";

/**
 * @description Является полной копией стандартного хука `useState`, однако помимо этого может принимать
 * функцию-callback вторым параметром в функции изменения состояния. Функция-callback принимает в качестве
 * одинственного параметра новое состояние.
 * 
 * @example 
 * const [state, setState] = useStateWithCallback(0);
 * useEffect(() => {
 *     setTimeout(() => setState(
 *          state => state + 1, 
 *          (updatedState) => console.log(`Now state is ${updatedState}!`)
 *     ));
 * });  
 */
export const useStateWithCallback = <T = any>(initialState) => {
    const [state, setState] = useState<T>(initialState);

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