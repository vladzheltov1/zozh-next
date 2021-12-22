import selectStyle from "./Select.module.scss";

export type List = {
    id: number,
    value: string
}

export interface ISelectProps {
    list: List,
    onChange: Function
}

export const Select = (props) => {
    const { list = [], onChange = () => { } } = props;
    return <select className={selectStyle.select} onChange={onChange}>
        {list.map(item => (
            <option key={item.id}>{item.value}</option>
        ))}
    </select>
}