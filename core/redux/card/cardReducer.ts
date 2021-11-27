import { cardActions } from "..";
import { Action, CardStoreState } from "../types";

export const cardReducer = (state: CardStoreState, action: Action) => {
    switch (action.type) {
        case cardActions.CHANGE_SCORE:
            if (action.data == undefined) throw new Error("Для работы данного метода необходимо передать количество очков, на которое нужно изменить значение карточки в поле `data`!");
            const score = state.score + action.data;
            return { ...state, score };
        case cardActions.CHANGE_NODE:
            const currentNode = state.currentNode + 1;
            return { ...state, currentNode };
        default:
            return { ...state };
    }
}