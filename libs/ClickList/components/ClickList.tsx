import { FC, useEffect, useState } from "react";
import clickListStyle from "../styles/ClickList.module.scss";

export type List = {
    value: string,
    isSelected: boolean
}

export interface IClickListProps {
    list: Array<List>,
    updateState: Function
}

export const ClickList: FC<IClickListProps> = (props) => {
    const { list, updateState } = props;

    const [options, setOptions] = useState<List[]>(list);

    const optionToggleClick = (value) => {
        setOptions(
            options.map(option => {
                if (option.value === value) {
                    option.isSelected = !option.isSelected;
                }
                return option;
            })
        );
    }

    useEffect(() => updateState(options), [options]);

    return (
        <div className={clickListStyle.taskWrapper}>
            {options.map(option => (
                <div
                    className={`${clickListStyle.taskOption} ${option.isSelected ? clickListStyle.taskOption_selected : null}`}
                    key={option.value}
                    onClick={() => optionToggleClick(option.value)}
                >
                    {option.value}
                </div>
            ))}
        </div>
    )

}