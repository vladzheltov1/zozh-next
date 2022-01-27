import { useActions, useTypedSelector } from "@/core/redux/hooks/redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import cardStyle from "./Card.module.scss";
import { CardHeader } from "./CardHeader";

export const Card = ({ children }) => {
    const router = useRouter();

    const { resetCard } = useActions();
    const { card } = useTypedSelector(state => state);
    const { currentNode, score } = card;

    useEffect(() => {
        console.log(currentNode)
        if (!children[currentNode]) {
            console.log("RESET");
            console.log(currentNode)
            router.push("/hub");
            return;
        }

        return () => {
            resetCard();
        }
    }, [currentNode])

    return (
        <div className={cardStyle.card}>
            <CardHeader score={score} />
            {children[currentNode]}
            <style jsx global>{`
                body{
                    background: #f0f0f0;
                }
            `}</style>
        </div>
    )
}