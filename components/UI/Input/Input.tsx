import classNames from "classnames";
import style from "./Input.module.scss";

export type InputTypes =
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "reset"
    | "time";

export interface IInputProps {
    /**
     * Указание формата текстового поля: `input/textarea`
     */
    mode?: "input" | "textarea",

    /**
     * Тип поля. Работает только при `mode="input"`
     */
    type?: InputTypes,

    /**
     * Параметр, при котором поле не активно для действий пользователя
     */
    disabled?: boolean,

    /**
     * Значение placeholder'а
     */
    placeholder?: string,

    /**
     * Значение, введённое в поле
     */
    value?: string | number
}

export const Input: React.FC<IInputProps> = (props) => {
    const { mode = "input", type = "text", disabled, value, ...restProps } = props;

    const className = classNames(
        style.input,
        {
            [style.input_textarea]: mode === "textarea"
        }
    )

    const Mode = mode;

    return (
        <Mode type={type} className={className} disabled={disabled} value={value} {...restProps} />
    )
}