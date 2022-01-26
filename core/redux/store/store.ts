import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducers/CardSlice";
import taskReducer from "./reducers/TaskSlice";
import timerReducer from "./reducers/TimerSlice";

export const rootReducer = combineReducers({
    taskReducer,
    cardReducer,
    timerReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];