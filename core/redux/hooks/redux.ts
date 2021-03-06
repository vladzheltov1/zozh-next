import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cardActions, taskActions, timerActions } from "../reducers";
import { TypeRootState } from "../store";

const ACTIONS = {
    ...taskActions,
    ...cardActions,
    ...timerActions
}

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ACTIONS, dispatch);
}