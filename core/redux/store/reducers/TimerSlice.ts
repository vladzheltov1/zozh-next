import { createSlice } from "@reduxjs/toolkit";

type Timer = {
    time: number,
    isActive: boolean
}

const initialState: Timer = {
    time: 0,
    isActive: false
};

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        increment(state) {
            state.time += 1;
        },
        resetTimer(state) {
            return initialState;
        },
        startTimer(state) {
            state.isActive = true;
        },
        stopTimer(state) {
            state.isActive = false;
        }
    }
})

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;