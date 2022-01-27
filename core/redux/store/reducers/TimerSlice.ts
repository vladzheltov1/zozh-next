import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        increment(state) {
            return state + 1;
        },
        resetTimer(state) {
            return initialState;
        }
    }
})

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;