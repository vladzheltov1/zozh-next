import { Text } from "@/components/UI";
import { Task } from "@/core/index";
import { useCore } from "@/core/redux/public/scripts";
import colors from "@/styles/var.module.scss";
import { useRouter } from "next/router";
import { FC } from "react";
import style from "./style.module.scss";

export interface IResultsProps {
    maxScore: number
}

export const Results: FC<IResultsProps> = (props) => {

    const { score, time, formatTime } = useCore();

    const { maxScore } = props;

    const userTime = formatTime(time);

    const router = useRouter();

    const getScoreColor = (): string => {
        let color = null;

        const halfScore = maxScore * 0.5;
        const quaterScore = maxScore * 0.25;
        const tenPercentScore = maxScore * 0.1;

        if (score <= maxScore && score > (maxScore - tenPercentScore)) {
            color = colors.green100;
        } else if (score <= (maxScore - tenPercentScore) && score > (maxScore - quaterScore)) {
            color = colors.yellow100;
        } else if (score <= (maxScore - quaterScore) && score > (maxScore - halfScore + tenPercentScore)) {
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