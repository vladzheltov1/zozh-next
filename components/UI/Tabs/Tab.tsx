import { FC } from "react";

export interface ITabProps {
    /**
     * Используется в родительском компоненте `Tabs` для отображения заголовков вкладок
     */
    title: string,

    /**
     * Внутреннее содержимое вкладки
     */
    children: any
}

export const Tab: FC<ITabProps> = (props) => {
    const { children } = props;
    return <div>
        {children}
    </div>
}