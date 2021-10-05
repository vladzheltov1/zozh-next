import { Button } from "@/components/UI";
import { CardContext } from "@/contexts/cardContext";
import { useContext } from "react";

export const Task1 = () => {
    const { changeNode } = useContext(CardContext);
    return (
        <div>
            <p>Node 1</p>
            <Button onClick={changeNode}>
                Change
            </Button>
        </div>
    )
}