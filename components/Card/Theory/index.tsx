import { Button, Space, Text } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { useContext } from "react";


export const Theory = ({ children }) => {
    const { changeNode } = useContext(CardContext);

    return <div>
        <Text mode="h1">Основная теория по теме</Text>
        <Text mode="p">
            {children}
        </Text>
        <Space height={15} />
        <Button onClick={changeNode}>Далее</Button>
    </div>
}