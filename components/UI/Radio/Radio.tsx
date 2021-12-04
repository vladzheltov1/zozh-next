import { FC } from "react";

export interface IRadioProps {
    /**
     * Текст, который отображается рядом с кнопкой
     */
    title?: string,

    /**
     * Значение, которое будет присвоено `value` в `input`
     */
    value?: string,

    /**
     * Значение, которое регулирует отображение кнопки: отмечена или нет
     */
    checked?: boolean,

    /**
     * Функция, которая будет вызвана при изменении состояния `checked`
     */
    onChange?: Function,
}

export const Radio: FC<IRadioProps> = (props) => {
    const {
        title = "",
        value = "",
        checked = false,
        onChange = () => void 0,
        ...restProps
    } = props;
    return <>
        <input
            {...restProps}
            id={value}
            type="radio"
            value={value}
            checked={checked}
            onChange={() => onChange(event)}
        />
        <label htmlFor={value}>
            {title}
        </label>
    </>
}