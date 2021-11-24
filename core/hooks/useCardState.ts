import { useCallback, useState } from "react";

export const useCardState = () => {
    const [score, setScore] = useState<number>(0);
    const [currentNode, setCurrentNode] = useState<number>(0);

    const changeScore = useCallback((offset: number) => setScore(score => score + offset), [setScore]);
    const changeNode = useCallback(() => setCurrentNode(currentNode + 1), [setCurrentNode, currentNode]);

    return { score, currentNode, changeScore, changeNode };
}