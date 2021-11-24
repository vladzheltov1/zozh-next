import { useCallback, useState } from "react";

export const useCardState = () => {
    const [score, setScore] = useState<number>(0);
    const [currentNode, setCurrentNode] = useState<number>(0);

    const changeScore = (offset: number) => setScore(score => score + offset);
    const changeNode = () => setCurrentNode(currentNode + 1);

    return { score, currentNode, changeScore, changeNode };
}