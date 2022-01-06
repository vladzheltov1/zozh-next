import { Layout } from "@/layouts/Layout";
import { DragAndDropBlock, DragItem, DropArea, DragAndDrop } from "@/libs/DragAndDrop2";
import { useState } from "react";
import { Space } from "@/components/UI";

const Test = () => {

    const [items, setItems] = useState([
        "Test1",
        "Test2",
        "Test3"
    ]);

    const ROOT_ID = "root";

    const [gaps, setGaps] = useState([
        null,
        null,
        null
    ]);

    const onDragEnd = (result) => {
        const dnd = new DragAndDrop(result, items, gaps, ROOT_ID);

        const data = dnd.reorder();

        setItems(data.items);
        setGaps(data.gaps);
    };

    return <Layout>
        <div className="wrapper">
            <DragAndDropBlock onDragEnd={onDragEnd}>

                {/* Root container */}
                <DropArea droppableId={ROOT_ID}>
                    {items.map((item, index) => (
                        <DragItem key={index} draggableId={`group1Item${index}`} index={index}>
                            <div>{item}</div>
                        </DragItem>
                    ))}
                </DropArea>

                <Space height={20} />

                {gaps.map((gap, index) => (
                    <DropArea key={index} droppableId={`gap${index}`} isDropDisabled={gap != null}>
                        {gap ? (
                            <DragItem draggableId={`item${index}`} index={0}>
                                {gap}
                            </DragItem>
                        ) : null}
                    </DropArea>
                ))}

            </DragAndDropBlock>
        </div>
    </Layout>
}

export default Test;