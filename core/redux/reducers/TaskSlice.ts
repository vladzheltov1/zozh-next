import { ButtonAppearance } from "@/components/UI/Button";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
    buttonAppearance: ButtonAppearance,
    buttonDisabled: boolean
}

const initialState: ITask = {
    buttonAppearance: "primary",
    buttonDisabled: false
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setButtonColor(state, action: PayloadAction<ButtonAppearance>) {
            state.buttonAppearance = action.payload;
        },
        setButtonEnabled(state) {
            state.buttonDisabled = false;
        },
        setButtonDisabled(state) {
            state.buttonDisabled = true;
        }
    }
})

export const taskReducer = taskSlice.reducer;
export const taskActions = taskSlice.actions;