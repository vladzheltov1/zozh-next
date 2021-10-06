import React from "react";
export const CardContext = React.createContext({
    changeScore: (extra: number): any => void 0,
    changeNode: (): any => void 0,
    currentNode: {},
    score: 0
});