import { Timer } from "@/components/Timer";
import { Text } from "@/components/UI";
import { useCardState } from "@/core/hooks/useCardState";
import vars from "@/styles/var.module.scss";
import { useRouter } from "next/router";
import cardStyle from "./Card.module.scss";

export const Card = ({ children }) => {
    const router = useRouter();

    const { currentNode, score } = useCardState();

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