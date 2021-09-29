import { Icon } from "@/components/UI";
import { TextImage, Task, PushMessage } from "@rsuite/icons";
import { Text, Space } from "@/components/UI";

import global_style from "../style.module.scss";
import study_style from "./style.module.scss";

export const StudyProgram = () => {

    const tiles = [
        { icon: TextImage, text: "Учебные материалы на тему Здорового Образа Жизни" },
        { icon: Task, text: "Интерактивные упраженения на тему правильного питания, физической активности, а также распорядка дня" },
        { icon: PushMessage, text: "Рекомендации, касаемые Вашего здоровья и здоровья Вашей семьи" },
    ]

    return (
        <div className={study_style.study__wrapper}>
            <div className={global_style.block, study_style.study__inner}>
                <Text mode="h1">В программу обучения входят:</Text>
                <Space height={40} />
                <div className={study_style.tile_wrapper}>
                    {tiles.map((tile) => (
                        <div className={study_style.info_tile} key={tile.text}>
                            <Icon icon={tile.icon} />
                            <Text>{tile.text}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}