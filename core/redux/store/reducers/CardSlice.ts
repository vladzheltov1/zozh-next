import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
    currentNode: number,
    score: number
}

const initialState: CardState = {
    currentNode: 0,
    score: 0
}

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addScore(state, action: PayloadAction<number>) {
            state.score += action.payload;
        },
        setActiveNode(state, _) {
            state.currentNode += 1;
        },
        reset(state, _) {
            state = initialState;
        }
    }
})

export default cardSlice.reducer;