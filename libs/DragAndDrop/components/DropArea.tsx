import { FC, ReactChild } from "react";
import { Droppable } from "react-beautiful-dnd";

export type DroppableDirection = "vertical" | "horizontal";

export interface IDropAreaProps {
    children: ReactChild | JSX.Element | JSX.Element[],
    className?: string,
    direction?: DroppableDirection,
    droppableId: string,
    isDropDisabled?: boolean
}

/**
 * @deprecated
 */
export const DropArea: FC<IDropAreaProps> = (props) => {
    const { children, className = "", direction = "vertical", droppableId, isDropDisabled = false, ...restProps } = props;
    return (
        <Droppable droppableId={droppableId} direction={direction} isDropDisabled={isDropDisabled}>
            {(providedDroppable) => (
                <div
                    className={className}
                    ref={providedDroppable.innerRef}
                    {...providedDroppable.droppableProps}
                    {...restProps}
                >
                    {children}
                    {providedDroppable.placeholder}
                </div>
            )}
        </Droppable>
    )
}