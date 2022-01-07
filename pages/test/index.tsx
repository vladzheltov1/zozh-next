import { Layout } from "@/layouts/Layout";
import { DragAndDropBlock, DragItem, DropArea, DragAndDrop, Container, ContainerBundle } from "@/libs/DragAndDrop2";
import { useState } from "react";
import { Space } from "@/components/UI";

const Test = () => {

    const [containers, setContainer] = useState<ContainerBundle<Container>>({
        rootContainer: ["Test1", "Test2", "Test3"],
        container1: "Test5",
        container2: "",
        container3: ""
    });

    const onDragEnd = (result) => {
        const dnd = new DragAndDrop(result, containers);
        const data = dnd.move();
        setContainer(data);
    };

    return <Layout>
        <div className="wrapper">
            <DragAndDropBlock onDragEnd={onDragEnd}>

                {/* Root container */}
                <DropArea droppableId="rootContainer">
                    {containers.rootContainer.map((item, index) => (
                        <DragItem key={index} draggableId={`rootItem${index}`} index={index}>
                            <div>{item}</div>
                        </DragItem>
                    ))}
                </DropArea>

                <Space height={20} />

                <DropArea droppableId={`container1`} isDropDisabled={containers.container1 != null}>
                    {containers.container1 ? (
                        <DragItem draggableId={`container1`} index={0}>
                            {containers.container1}
                        </DragItem>
                    ) : null}
                </DropArea>

            </DragAndDropBlock>
        </div>
    </Layout>
}

export default Test;