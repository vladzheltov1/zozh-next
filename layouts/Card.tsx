import { Timer } from "@/components/Timer";
import { Text } from "@/components/UI";
import cardStyle from "@/styles/card.module.scss";
import colors from "@/styles/var.module.scss";
import { CardContext } from "contexts/cardContext";
import { useRouter } from "next/router";
import { useState } from "react";

export const Card = ({ children, className }) => {
    const [currentNode, setCurrentNode] = useState(0);
    const [score, setScore] = useState(0);

    const router = useRouter();

    const changeNode = () => {
        // Защита от дурака: перенаправление в главное меню, если все элементы отработали.
        if (currentNode === children.length - 1) {
            return router.push("/hub");
        }
        setCurrentNode(currentNode + 1);
    }

    const changeScore = (points) => {
        if (points) setScore(score + points);
    }

    return (
        <div className={cardStyle.card}>
            <div className={cardStyle.card__header}>
                <Text bold>Количество очков: <Text mode="span" color={colors.extraGreen}>{score}</Text></Text>
                <Timer />
            </div>
            <CardContext.Provider value={{ currentNode, score, changeNode, changeScore }}>
                {children[currentNode]}
            </CardContext.Provider>
            <style jsx global>{`
                body{
                    background: #f0f0f0;
                }
            `}</style>
        </div>
    )
}