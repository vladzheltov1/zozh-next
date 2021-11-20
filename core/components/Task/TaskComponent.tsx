import { Button, Text } from "@/components/UI";
import { ITaskComponentProps, TaskContext } from "@/core/index";
import { CSSProperties, FC, useContext } from "react";

export const TaskComponent: FC<ITaskComponentProps> = (props) => {
    const {
        children,
        title,
        action = () => void 0
    } = props;

    const { buttonColor, buttonDisabled } = useContext(TaskContext);

    // TODO: Убрать стили в другое место
    const style = {
        nextButtonArea: {
            position: "absolute",
            bottom: 20
        } as CSSProperties
    }

    return (
        <div>
            <Text mode="h2">{title}</Text>
            {children}
            <div style={style.nextButtonArea}>
                <Button onClick={action} color={buttonColor} disabled={buttonDisabled}>Готово</Button>
            </div>
        </div>
    )
}