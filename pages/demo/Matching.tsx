import { FC, useState } from "react";
import { Matcher } from "@/libs/Matcher";

export const Matching: FC = () => {
    const [lists, setLists] = useState({
        left: ["Text 1", "Text 2"],
        right: ["Right 1", "Right 2"]
    });

    return (
        <>
            <Matcher leftList={lists.left} rightList={lists.right} />
        </>
    )
}