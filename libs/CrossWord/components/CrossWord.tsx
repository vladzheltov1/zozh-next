import { Text } from "@/components/UI";
import { FC, useState } from "react";
import crossWordStyle from "../styles/CrossWord.module.scss";

export interface ICrossWord {
    question: string,
    letters: number
}

const regex = /[А-Яа-я]/;

export const CrossWord: FC<ICrossWord> = (props) => {
    const { question, letters } = props;

    const [gaps, setGaps] = useState([]);

    const onChange = (event) => {
        event.preventDefault();

        if (!regex.test(event.target.value) && event.key !== "Backspace") return;

        const form = event.target.form;
        const index = [...form].indexOf(event.target);

        const offset = event.key === "Backspace" ? -1 : 1;

        setGaps(
            gaps.map((gap, i) => {
                if (event.key === "Backspace") {
                    gap = "";
                } else if (i === index) {
                    gap = event.target.value;
                }
                console.log(`${i} set to ${gap}`)
                return gap;
            })
        );

        const focusElement = form.elements[index + offset];
        if (!focusElement) return;
        form.elements[index + offset].focus();
    }

    // useEffect(() => {
    //     console.log(gaps);
    // }, [gaps])

    return (
        <div className={crossWordStyle.crossWordWrapper}>
            <div className={crossWordStyle.topBlock}>
                <Text>{question}</Text>
            </div>
            <div className={crossWordStyle.bottomBlock}>
                <form>
                    {[...Array(letters)].map((x, i) => (
                        <Letter key={i} value={gaps[i]} onChange={onChange} />
                    ))}
                </form>
            </div>
        </div>
    )
}

interface ILetterProps {
    onChange?: Function,
    value?: string
}

const Letter: FC<ILetterProps> = (props) => {
    const { onChange = () => { }, value = "" } = props;
    return <input
        className={crossWordStyle.letter}
        maxLength={1}
        value={value}
        onChange={event => onChange(event)}
    />
}