import { createStore } from "redux";
import { cardReducer } from "./card";
import { taskReducer } from "./task";
import { timerReducer } from "./timer";

export const timerStore = createStore(timerReducer, 0);
export const cardStore = createStore(cardReducer, { score: 0, currentNode: 0 });
export const taskStore = createStore(taskReducer, { buttonColor: "blue", buttonDisabled: false });
