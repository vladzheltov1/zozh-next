import { FC, useState } from "react";
import { Matcher } from "@/libs/Matcher";
import { Space, Text } from "@/components/UI";

export const Matching: FC = () => {
    const [lists, setLists] = useState({
        left: ["Text 1", "Text 2"],
        right: ["Right 1", "Right 2"]
    });

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