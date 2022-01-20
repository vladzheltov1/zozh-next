import { Text } from "@/components/UI";
import { getScore, getTime } from "@/core/helpers";
import { Task } from "@/core/index";
import colors from "@/styles/var.module.scss";
import { useRouter } from "next/router";
import { FC } from "react";
import style from "./style.module.scss";

export interface IResultsProps {
    maxScore: number
}

export const Results: FC<IResultsProps> = (props) => {

    const { maxScore } = props;

    const userScore = getScore();
    const userTime = getTime();

    const router = useRouter();

    const getScoreColor = (): string => {
        let color = null;

        const halfScore = maxScore * 0.5;
        const quaterScore = maxScore * 0.25;
        const tenPercentScore = maxScore * 0.1;

        if (userScore <= maxScore && userScore > (maxScore - tenPercentScore)) {
            color = colors.green100;
        } else if (userScore <= (maxScore - tenPercentScore) && userScore > (maxScore - quaterScore)) {
            color = colors.yellow100;
        } else if (userScore <= (maxScore - quaterScore) && userScore > (maxScore - halfScore + tenPercentScore)) {
            color = colors.yellow100;
        } else {
            color = colors.red100;
        }

        return color;
    }

    return <Task title={""} action={() => router.push("/hub")}>
        <div className={style.result}>
            <div className={style.resultSubcontainer}>
                <Text className={style.resultSubtitle} mode="h3">
                    Набранное количество очков:
                </Text>
                <Text>
                    <Text mode="span" bold color={getScoreColor()}>{userScore}</Text>
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