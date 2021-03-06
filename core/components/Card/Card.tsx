import { useCard, useTimer } from "@/core/public";
import { useTypedSelector } from "@/core/redux/hooks/redux";
import { FC, ReactNode, useEffect } from "react";
import cardStyle from "./Card.module.scss";
import { CardTopData } from "./CardTopData";

export interface ICardProps {
    children: ReactNode[]
}

export const Card: FC<ICardProps> = (props) => {
    const { children } = props;

    const { card } = useTypedSelector(state => state);
    const { currentNode, score } = card;

    const { backToHub } = useCard();
    const { stopTimer } = useTimer();

    useEffect(() => {
        if (currentNode === children.length - 1) {
            stopTimer();
        }

        return () => {
            if (currentNode == children.length - 1) {
                backToHub();
            }
        };
    }, [currentNode]);

    return (
        <div className={cardStyle.card}>
            <CardTopData score={score} />
            {children[currentNode]}
            <style jsx global>{`
                body{
                    background: #f0f0f0;
                }
            `}</style>
        </div>
    )
}