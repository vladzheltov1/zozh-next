import { FC } from "react";
import { Direction, Droppable, DroppableMode } from 'react-beautiful-dnd';
import { dropAreaStyles } from "../styles";

export interface IDropAreaProps {
    children: any,
    droppableId: string,
    show?: boolean,
    mode?: DroppableMode,
    direction?: Direction,
    isDropDisabled?: boolean,
    className?: string
}

export const DropArea: FC<IDropAreaProps> = (props) => {

    const { children, droppableId, show = true, mode, direction, isDropDisabled, className } = props;

    return (
        <Droppable droppableId={droppableId} mode={mode} direction={direction} isDropDisabled={isDropDisabled}>
            {(provided) => (
                <>
                    {show && (
                        <div
                            ref={provided.innerRef}
                            className={`${dropAreaStyles.dropArea} ${className}`}
                            {...provided.droppableProps}
                        >
                            {children}
                            {provided.placeholder}
                        </div>
                    )}
                </>
            )}
        </Droppable>
    )
}