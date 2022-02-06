import Image from "next/image";
import { FC, useEffect, useState } from "react";
import clickListStyle from "../styles/ClickList.module.scss";

export type List = {
    value: string,
    isSelected: boolean
}

type Mode = "text" | "picture";

export interface IClickListProps {
    list: Array<List>,
    updateState: Function,
    mode?: Mode,
    path?: string,
    ext?: string
}

export const ClickList: FC<IClickListProps> = (props) => {
    const { list, updateState, mode = "text", path, ext } = props;

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
                    className={`${clickListStyle.taskOption} ${option.isSelected && clickListStyle.taskOption_selected}`}
                    key={option.value}
                    onClick={() => optionToggleClick(option.value)}
                >
                    {mode == "text" ? (
                        <>
                            {option.value}
                        </>
                    ) : (
                        <>
                            <div className={clickListStyle.imageContainer}>
                                <Image src={path + option.value + ext} layout="fill" alt="" />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )

}