import { useCore } from "@/core/redux/public/scripts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { resetCardData } from "../..";
import cardStyle from "./Card.module.scss";
import { CardHeader } from "./CardHeader";

export const Card = ({ children }) => {
    const router = useRouter();

    const { currentNode, score } = useCore();

    useEffect(() => {
        if (isDone()) {
            redirectToHubIfDone();
            return;
        }
    }, [currentNode])

    const isDone = (): boolean => {
        return children[currentNode] == null;
    }

    const redirectToHubIfDone = async () => {
        await resetCardData();
        router.push("/hub");
    }

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