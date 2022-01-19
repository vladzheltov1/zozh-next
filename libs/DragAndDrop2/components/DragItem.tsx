import { FC } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { dragItemStyles } from "../styles";

export interface IDragItemProps {
    draggableId: string,
    index: number,
    children: any,
    isDragDisabled?: boolean,
    className?: string
}

export const DragItem: FC<IDragItemProps> = (props) => {

    const { draggableId, index, children, isDragDisabled, className } = props;

    return (
        <Draggable draggableId={draggableId} index={index} isDragDisabled={isDragDisabled}>
            {(provided) => (
                <div
                    className={`${dragItemStyles.dragItem} ${className || null}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    )
}