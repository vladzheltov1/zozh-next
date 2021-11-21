import { Timer } from "@/components/Timer";
import { Text } from "@/components/UI";
import colors from "@/styles/var.module.scss";
import { useState } from "react";
import cardStyle from "./Card.module.scss";
import { useCardState } from "@/core/index";

export const Card = ({ children }) => {
    const { score, initChildren, currentNode } = useCardState();

    initChildren(children);

    return (
        <div className={cardStyle.card}>
            <div className={cardStyle.card__header}>
                <Text bold>Количество очков:&nbsp;
                    <Text mode="span" color={score >= 0 ? colors.extraGreen : colors.red100}>
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