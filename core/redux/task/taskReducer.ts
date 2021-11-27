import { taskActions } from ".";
import { Action, TaskStoreState } from "../types";

const errorMessage = "Необходимо передать дополнительные данные для изменения состояния!";

export const taskReducer = (state: TaskStoreState, action: Action) => {
    switch (action.type) {
        case taskActions.SET_BUTTON_COLOR:
            if (action.data == undefined) throw new Error(errorMessage);
            const modifiedState = { ...state, buttonColor: action.data };
            return modifiedState;
        case taskActions.SET_BUTTON_DISABLED:
            if (action.data == undefined) throw new Error(errorMessage);
            return { ...state, buttonDisabled: action.data };
        default:
            return { ...state };
    }
}