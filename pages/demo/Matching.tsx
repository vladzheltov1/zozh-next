import { Space, Text } from "@/components/UI";
import { Matcher } from "@/libs/Matcher";
import { FC } from "react";

const lists = {
    left: ["Правильное", "Утренняя"],
    right: ["пробежка", "питание"]
}

export const Matching: FC = () => {
    return (
        <>
            <Text bold size={21}>
                Составьте осмысленные пары слов
            </Text>
            <Space height={10} />
            <Matcher leftList={lists.left} rightList={lists.right} />
        </>
    )
}

export default Matcher;