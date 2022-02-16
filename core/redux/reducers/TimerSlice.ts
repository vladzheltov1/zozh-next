import { createSlice } from "@reduxjs/toolkit";

export interface ITimer {
    time: number,
    isActive: boolean
}

const initialState: ITimer = {
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