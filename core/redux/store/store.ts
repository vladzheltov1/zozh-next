import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./reducers/CardSlice";
import { taskReducer } from "./reducers/TaskSlice";
import { timerReducer } from "./reducers/TimerSlice";

export const store = configureStore({
    reducer: {
        card: cardReducer,
        timer: timerReducer,
        task: taskReducer
    }
});

export type TypeRootState = ReturnType<typeof store.getState>;