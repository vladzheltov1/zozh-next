import { FC, ReactChild } from "react";
import { Draggable } from "react-beautiful-dnd";

export interface IDragItemProps {
    children?: ReactChild,
    className?: string,
    draggableId: string,
    index: number
}

/**
 * @deprecated
 */
export const DragItem: FC<IDragItemProps> = (props) => {
    const { children = "", className, draggableId, index, ...restProps } = props;
    return (
        <Draggable draggableId={draggableId} index={index}>
            {(providedDraggable) => (
                <div
                    className={className}
                    ref={providedDraggable.innerRef}
                    {...providedDraggable.dragHandleProps}
                    {...providedDraggable.draggableProps}
                    {...restProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    )
}