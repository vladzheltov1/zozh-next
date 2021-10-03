import { useState } from "react";
import { CardContext } from "contexts/cardContext";
import { useRouter } from "next/router";

export const Card = ({ children }) => {
    const [currentNode, setCurrentNode] = useState(0);
    const router = useRouter();

    const changeNode = () => {
        // Защита от дурака
        if (currentNode === children.length - 1) {
            router.replace("/hub");
            return;
        }

        setCurrentNode(currentNode + 1);
    }

    return (
        <CardContext.Provider value={{ currentNode, changeNode }}>
            {children[currentNode]}
        </CardContext.Provider>
    )
}