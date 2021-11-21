import { useState } from "react";

export const useCardState = () => {
    const [score, setScore] = useState<number>(0);
    const [currentNode, setCurrentNode] = useState(0);

    const changeScore = (offset: number) => setScore(score => score + offset);

    const changeNode = () => {
        return setCurrentNode(currentNode => currentNode + 1);
    }

    return { score, changeScore, changeNode, currentNode };
}