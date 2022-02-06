import { Text } from "@/components/UI";
import { FC } from "react";

export interface ICrossWord {
    question: string,
    letters: number
}

export const CrossWord: FC<ICrossWord> = (props) => {

    const { question, letters } = props;

    return (
        <div>
            <div>
                <Text>{question}</Text>
            </div>
            <div>
                {for(let i = 0; i < letters; i++)}
            </div>
        </div>
    )
}