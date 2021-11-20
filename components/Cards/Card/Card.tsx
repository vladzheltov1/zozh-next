import { Timer } from "@/components/Timer";
import { Text } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import colors from "@/styles/var.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import cardStyle from "./card.module.scss";

/**
 * @deprecated используй компонент, который лежит в папке `core`
 */
export const Card = ({ children }) => {
    const router = useRouter();

    // Нужно для отображения только одного задания из всех переданных в компонент. `Children` могут менять это значение через `changeNode()`, которая поставит следующий по списку `child` данного компонента.
    const [currentNode, setCurrentNode] = useState(0);

    // Количество очков.
    const [score, setScore] = useState(0);

    /**
     * Меняет активную `node` на следующую в списке из массива `children`, переданного в данный компонент.
     * @returns `void`
     */
    const changeNode = () => {
        // Защита от дурака: перенаправление в главное меню, если все элементы отработали.
        if (currentNode === children.length - 1) {
            return router.push("/hub");
        }
        setCurrentNode(currentNode + 1);
    }

    /**
     * Функция для внешнего изменения количества очков.
     * @param points - количество очков, которое будет добавлено к общей сумме (может быть отрицательным) 
     * @returns `void`
     */
    const changeScore = (points: number): any => setScore(score + points);

    return (
        <div className={cardStyle.card}>
            <div className={cardStyle.card__header}>
                <Text bold>Количество очков: <Text mode="span" color={score >= 0 ? colors.extraGreen : colors.red100}>{score}</Text></Text>
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