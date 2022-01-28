import { Text } from "@/components/UI";
import { Task } from "@/core/index";
import { useTypedSelector } from "@/core/redux/hooks/redux";
import { useCore } from "@/core/redux/public/useCore";
import colors from "@/styles/var.module.scss";
import { FC } from "react";
import { useCard } from "../Card/useCard";
import style from "./Results.module.scss";

export interface IResultsProps {
    maxScore: number
}

export const Results: FC<IResultsProps> = (props) => {
    const { timer, card } = useTypedSelector(state => state);
    const { formatTime } = useCore();
    const { backToHub } = useCard();

    const { maxScore } = props;
    const score = card.score;
    const userTime = formatTime(timer.time);

    const getScoreColor = (): string => {
        let color = null;

        const halfScore = maxScore * 0.5;
        const quarterScore = maxScore * 0.25;
        const tenPercentScore = maxScore * 0.1;

        if (score <= maxScore && score > (maxScore - tenPercentScore)) {
            color = colors.green100;
        } else if (score <= (maxScore - tenPercentScore) && score > (maxScore - quarterScore)) {
            color = colors.yellow100;
        } else if (score <= (maxScore - quarterScore) && score > (maxScore - halfScore + tenPercentScore)) {
            color = colors.yellow100;
        } else {
            color = colors.red100;
        }

        return color;
    }

    return <Task title={""} action={backToHub}>
        <div className={style.result}>
            <div className={style.resultSubcontainer}>
                <Text className={style.resultSubtitle} mode="h3">
                    Набранное количество очков:
                </Text>
                <Text>
                    <Text mode="span" bold color={getScoreColor()}>{score}</Text>
                    /
                    <Text mode="span" bold color={colors.green100}>{maxScore}</Text>
                </Text>
            </div>
            <div className={style.resultSubcontainer}>
                <Text className={style.resultSubtitle} mode="h3">
                    Время выполнения:
                </Text>
                <Text>
                    {userTime}
                </Text>
            </div>
        </div>
    </Task>
}