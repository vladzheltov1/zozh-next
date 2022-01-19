import { FC } from "react";
import { Direction, Droppable, DroppableMode } from 'react-beautiful-dnd';
import { dropAreaStyles } from "../styles";

export type Outlook = "root" | "gap";
export interface IDropAreaProps {
    children: any,
    droppableId: string,
    show?: boolean,
    mode?: DroppableMode,
    direction?: Direction,
    isDropDisabled?: boolean,
    className?: string,
    outLook?: Outlook
}

export const DropArea: FC<IDropAreaProps> = (props) => {
    const { children, droppableId, show = true, mode, direction, isDropDisabled, className, outLook } = props;

    const defaultClassName = `${outLook === "root" ? dropAreaStyles.dropAreaRoot : dropAreaStyles.dropArea}`;

    return (
        <Droppable droppableId={droppableId} mode={mode} direction={direction} isDropDisabled={isDropDisabled}>
            {(provided) => (
                <>
                    {show && (
                        <div
                            ref={provided.innerRef}
                            className={`${defaultClassName} ${className || null}`}
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