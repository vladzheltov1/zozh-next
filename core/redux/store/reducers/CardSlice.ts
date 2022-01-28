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
        changeNode(state) {
            state.currentNode += 1;
        },
        resetCard(_) {
            return initialState;
        }
    }
});

export const cardReducer = cardSlice.reducer;
export const cardActions = cardSlice.actions;