import { Button, Text } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { Color } from "@/types/Color";
import {
    CSSProperties,
    useContext,
    useState
} from "react";

/**
 * @interface Пропсов компонента `<TaskComponent />`
 */
export interface ITaskComponentProps {
    title: string,
    children: any,
    next: Function
}

/**
 * @interface Для описания цветов кнопки при разных состояниях ответа (правильный, неправильный, нет ответа).
 */
export interface ILocalButtonColors {
    default: Color,
    correct: Color,
    wrong: Color
}

/**
 * @type Для для описания возможных значений состояний ответа (default, правильный, неправильный).
 */
export type AnswerState =
    | "default"
    | "correct"
    | "wrong";

/**
 * Главный хук для обработки логики взаимодействия с заданиями.
 * @returns `<TaskComponent />`, `correctAnswer()`, `wrongAnswer()`
 */
export const useTask = () => {
    const { changeScore, changeNode } = useContext(CardContext);

    /**
     * Локальный стейт для обработки ответов. НЕ давать компонентам менять его напрямую через `setAnswer()`, а только через `correctAnswer()` и `wrongAnswer()`!
     * @see `correctAnswer()`
     * @see `wrongAnswer()`
     */
    const [answer, setAnswer] = useState<AnswerState>("default");

    const [disabled, setDisabled] = useState(false);

    const wrongAnswer = () => {
        setAnswer("wrong");
        changeScore(-10);
        setTimeout(() => setAnswer("default"), 2000);
    };

    const correctAnswer = () => {
        setAnswer("correct");
        changeScore(100);
        setDisabled(true);

        setTimeout(() => changeNode(), 1000);
    }

    /**
     * Визуальный компонент-обложка, в который должны быть обёрнуты все задания и теория БЕЗ ИСКЛЮЧЕНИЯ!
     */
    const TaskComponent = ({
        title,
        children,
        next = () => void 0
    }: ITaskComponentProps) => {

        const style = {
            nextButtonArea: {
                position: "absolute",
                bottom: 20
            } as CSSProperties
        }

        const buttonColors: ILocalButtonColors = {
            default: "blue",
            correct: "green",
            wrong: "red"
        }

        return <>
            <div>
                <Text mode="h2">{title}</Text>
                {children}
                <div style={style.nextButtonArea}>
                    <Button onClick={next} color={buttonColors[answer]} disabled={disabled}>Готово</Button>
                </div>
            </div>
        </>
    }

    /**
     * НЕ возвращать `setAnswer()`! Это может привести к неправильной работе компонента!
     */
    return { TaskComponent, wrongAnswer, correctAnswer };
}