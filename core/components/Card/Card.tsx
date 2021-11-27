import { Text } from "@/components/UI";
import { Timer } from "@/core/components/Timer";
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

    cardStore.subscribe(() => {
        const state = cardStore.getState();

        // Перенаправление в меню, если все компоненты отработали
        if (children[state.currentNode] == null) {
            router.push("/hub");
            return;
        }

        setCurrentNode(state.currentNode);
        setScore(state.score);
    });

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
            {children[currentNode]}
            <style jsx global>{`
                body{
                    background: #f0f0f0;
                }
            `}</style>
        </div>
    )
}