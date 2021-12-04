import { FC } from "react";

export interface IRadioProps {
    title?: string,
    value?: string,
    checked?: boolean,
    onChange?: Function,
}

export const Radio: FC<IRadioProps> = (props) => {
    const {
        title = "",
        value = "",
        checked = false,
        onChange = () => void 0
    } = props;
    return <>
        <input
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