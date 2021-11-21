import { ReactChild, useState } from "react";
import { useRouter } from "next/router";

export const useCardState = () => {
    const router = useRouter();

    let children = null;

    const [score, setScore] = useState<number>(0);
    const [currentNode, setCurrentNode] = useState(0);

    const changeScore = (offset: number) => setScore(score => score + offset);

    const initChildren = (_children) => {
        children = _children;
    }

    const changeNode = () => {
        // Защита от дурака: перенаправление в главное меню, если все элементы отработали.
        if (currentNode === children.length - 1) return router.push("/hub");
        return setCurrentNode(currentNode + 1);
    }

    return { initChildren, score, changeScore, changeNode, currentNode };
}