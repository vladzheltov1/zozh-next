import { createStore } from "redux";
import { cardReducer, taskReducer, timerReducer } from "./";

export const timerStore = createStore(timerReducer, 0);
export const cardStore = createStore(cardReducer, { score: 0, currentNode: 0 });
export const taskStore = createStore(taskReducer, { buttonColor: "blue", buttonDisabled: false });
