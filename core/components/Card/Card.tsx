import { Timer } from "@/components/Timer";
import { Text } from "@/components/UI";
import { cardStore } from "@/core/redux";
import vars from "@/styles/var.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import cardStyle from "./Card.module.scss";

export const Card = ({ children }) => {
    const router = useRouter();

    // Данная прослойка нужна для того, чтобы React сам перерендеривал компонент, когда меняется состояние в `store`,
    // иначе перерисовка страницы не произойдёт. Возможно, есть способ сделать это по-другому?
    const [currentNode, setCurrentNode] = useState<number>(0);
    const [score, setScore] = useState<number>(0);

    // Подписка на изменение состояния внутри `store`
    cardStore.subscribe(() => {
        const state = cardStore.getState();
        setCurrentNode(state.currentNode);
        setScore(state.score);
    });

    // Перенаправление в главное меню в случае, если все компоненты отработали
    const getCurrentNode = () => {
        return children[currentNode] ? children[currentNode] : () => router.push("/hub");
    }

    return (
        <div className={cardStyle.card}>
            <div className={cardStyle.card__header}>
                <Text bold>Количество очков:&nbsp;
                    <Text mode="span" color={score >= 0 ? vars.extraGreen : vars.red100}>
                        {score}
                    </Text>
                </Text>
                <Timer />
            </div>
            {getCurrentNode()}
            <style jsx global>{`
                body{
                    background: #f0f0f0;
                }
            `}</style>
        </div>
    )
}