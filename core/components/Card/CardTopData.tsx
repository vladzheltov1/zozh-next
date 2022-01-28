import { Text } from "@/components/UI";
import vars from "@/styles/var.module.scss";
import { FC } from "react";
import { Timer } from "../Timer";
import cardStyle from "./Card.module.scss";

export interface ICardHeaderProps {
    score: number
}

export const CardTopData: FC<ICardHeaderProps> = (props) => {
    const { score } = props;

    const getColor = () => {
        return score >= 0 ? vars.extraGreen : vars.red100;
    }

    return (
        <div className={cardStyle.card__header}>
            <Text bold>Количество очков:&nbsp;
                <Text mode="span" color={getColor()}>
                    {score}
                </Text>
            </Text>
            <Timer />
        </div>
    )
}