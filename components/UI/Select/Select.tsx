import selectStyle from "./Select.module.scss";

export type ListObject = {
    id: number,
    value: string
}

export type List = Array<any>;

export interface ISelectProps {
    list: ListObject[] | List,
    onChange: Function
}

export const Select = (props) => {
    const { list = [], onChange = () => { } } = props;
    return <select className={selectStyle.select} onChange={onChange}>
        {list.map(item => (
            <>
                {list instanceof ListObject ? (
                    <option key={item?.value | item}>{item.value}</option>
                ) : (
                    <option key={item?.value | item}>{item.value}</option>
                )}
            </>
        ))}
    </select>
}