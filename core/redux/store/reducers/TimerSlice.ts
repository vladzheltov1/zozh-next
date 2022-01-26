import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        increment(state, _) {
            return state + 1;
        },
        reset(state, _) {
            return 0;
        }
    }
})

export default timerSlice.reducer;