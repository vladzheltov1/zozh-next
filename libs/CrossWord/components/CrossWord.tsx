import { Text } from "@/components/UI";
import { FC, useEffect, useState } from "react";
import crossWordStyle from "../styles/CrossWord.module.scss";

export interface ICrossWord {
    question: string,
    letters: number,
    onFinish: Function
}

const regex = /[А-Яа-я]/;
const Backspace = "Backspace";

export const CrossWord: FC<ICrossWord> = (props) => {
    const { question, letters, onFinish = () => { } } = props;

    const [gaps, setGaps] = useState([]);

    const checkCondition = (event) => {
        return !regex.test(event.key) && event.key !== Backspace;
    }

    const onKeyDown = (event) => {
        if (checkCondition(event)) {
            event.preventDefault();
        }
    }

    const onChange = (event) => {
        event.preventDefault();
        const { index } = getFormData(event);
        const updatedGaps = [...gaps];
        updatedGaps[index] = regex.test(event.target.value) ? event.target.value : "";
        setGaps([...updatedGaps]);
    }

    const onKeyUp = (event) => {
        if (checkCondition(event)) {
            event.preventDefault();
            return;
        }

        const { form, index } = getFormData(event);

        const offset = event.key !== Backspace ? 1 : -1;

        const focusElement = form.elements[index + offset];
        if (!focusElement) return;
        form.elements[index + offset].focus();
    }

    const getFormData = (event) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);
        return { form, index };
    }

    useEffect(() => {
        for (let i = 0; i < gaps.length; i++) {
            if (gaps[i] === "") {
                return;
            }
        }
        const line = gaps.join("");
        onFinish(line);
    }, [gaps]);

    return (
        <div className={crossWordStyle.crossWordWrapper}>
            <div className={crossWordStyle.topBlock}>
                <Text>{question}</Text>
            </div>
            <div className={crossWordStyle.bottomBlock}>
                <form>
                    {[...Array(letters)].map((_, index) => (
                        <Letter
                            key={index}
                            value={gaps[index]}
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            onKeyUp={onKeyUp}
                        />
                    ))}
                </form>
            </div>
        </div>
    )
}

interface ILetterProps {
    onChange?: Function,
    onKeyDown?: Function,
    onKeyUp?: Function,
    value?: string
}

const Letter: FC<ILetterProps> = (props) => {
    const { onChange = () => { }, onKeyDown = () => { }, onKeyUp = () => { }, value = "" } = props;
    return <input
        className={crossWordStyle.letter}
        maxLength={1}
        value={value}
        onChange={event => onChange(event)}
        onKeyDown={event => onKeyDown(event)}
        onKeyUp={event => onKeyUp(event)}
    />
}