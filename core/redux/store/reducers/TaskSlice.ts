import { ButtonAppearance } from "@/components/UI/Button";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
    buttonAppearance: ButtonAppearance,
    buttonDisabled: boolean
}

const initialState: TaskState = {
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
        setButtonEnabled(state, _) {
            state.buttonDisabled = false;
        },
        setButtonDisabled(state, _) {
            state.buttonDisabled = true;
        }
    }
})

export default taskSlice.reducer;