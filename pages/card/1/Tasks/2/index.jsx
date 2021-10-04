import { Button } from "@/components/UI";
import { useContext } from "react";
import { CardContext } from "../../../../../contexts/cardContext";

export const Task2 = () => {
    const { changeNode } = useContext(CardContext);
    return (
        <div>
            <p>Node 2</p>
            <Button onClick={changeNode}>
                Change
            </Button>
        </div>
    )
}