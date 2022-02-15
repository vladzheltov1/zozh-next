import classNames from "classnames";
import { FC } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { dragItemStyles } from "../styles";

export interface IDragItemProps {
    children: any,
    isDragDisabled?: boolean,
    draggableId: string,
    className?: string,
    index?: number,
}

export const DragItem: FC<IDragItemProps> = (props) => {
    const { children, isDragDisabled, draggableId, className, index = 0 } = props;

    const classNameList = classNames({
        [dragItemStyles.dragItem]: true,
        [className]: className
    });

    return (
        <Draggable draggableId={draggableId} index={index} isDragDisabled={isDragDisabled}>
            {provided => (
                <div
                    className={classNameList}
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