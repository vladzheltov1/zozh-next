import { createStore } from "redux";
import { cardReducer, taskReducer } from "./reducers/";

export const cardStore = createStore(cardReducer, { score: 0, currentNode: 0 });
export const taskStore = createStore(taskReducer, { buttonColor: "blue", buttonDisabled: false });