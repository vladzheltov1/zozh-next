import { random } from "@/libs/Random";
import classNames from "classnames";
import { FC } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { dragItemStyles } from "../styles";

export interface IDragItemProps {
    children: any,
    isDragDisabled?: boolean,
    draggableId?: string,
    className?: string,
    index?: number,
}

// FIXME: При обновлении страницы появляются ошибки о том, что `draggbleId` на клиенте не сходится с сервером.
// Вследствие этого перестаёт работать система.
export const DragItem: FC<IDragItemProps> = (props) => {
    const { children, isDragDisabled, draggableId, className, index = 0 } = props;

    const classNameList = classNames({
        [dragItemStyles.dragItem]: true,
        [className]: className
    });

    const getDraggableId = () => {
        return `draggable-${random.getInt(0, 10000)}`;
    }

    return (
        <Draggable draggableId={draggableId || getDraggableId()} index={index} isDragDisabled={isDragDisabled}>
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