import { FC } from "react";
import selectStyle from "./Select.module.scss";

export type List = Array<any>;

export interface ISelectProps {
    list: List,
    onChange?: Function
}

export const Select: FC<ISelectProps> = (props) => {
    const { list = [], onChange = () => { } } = props;
    return <select className={selectStyle.select}>
        {list.map(item => (
            <>
                <option key={item} className={selectStyle.selectItem} onChange={() => onChange()}>{item}</option>
            </>
        ))}
    </select>
}