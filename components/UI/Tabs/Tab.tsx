import { FC } from "react"

export interface ITabProps {
    title: string,
    children: any
}

export const Tab: FC<ITabProps> = (props) => {
    const { title, children } = props;
    return <div>
        {children}
    </div>
}