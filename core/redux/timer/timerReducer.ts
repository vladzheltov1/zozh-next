import { Action } from "../types";
import { timerActions } from "./index";

export const timerReducer = (state: number, action: Action) => {
    switch (action.type) {
        case timerActions.INCREMENT:
            return state + 1;
        case timerActions.RESET:
            return 0;
        default:
            return state;
    }
}