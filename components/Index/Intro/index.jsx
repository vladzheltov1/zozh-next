import { Text, Button, Space } from "@/components/UI"
import intro_style from "./style.module.scss";
import global_style from "../style.module.scss";
import Link from "next/link";

export const IndexIntro = () => {

    const color = "#8BC34A";

    return <div className={global_style.block, intro_style.intro_block}>
        <div className={intro_style.intro_block__inner}>
            {/* Main title */}
            <Text mode="h1" color="#fff" size={72} className={intro_style.intro_block__title}>
                <span><Text mode="span" color={color}>З</Text>доровый&nbsp;</span>
                <span><Text mode="span" color={color}>О</Text>браз&nbsp;</span>
                <span><Text mode="span" color={color}>Ж</Text>изни</span>
            </Text>

            {/* Quote */}
            <Text size={"1.3rem"} color="#fff" italic>
                <Text mode="span" color={color}>&#171;</Text>
                Единственный способ сохранить здоровье — это есть то, чего не хочешь, пить то, чего не любишь, и делать то, что не нравится.″
                <Text mode="span" color={color}>&#187;</Text>
                {/* <Space height={"1rem"} /> */}
                <Text color={color}>-Марк Твен</Text>
                <Space height={"2rem"} />
            </Text>

            {/* Button */}
            <Button color="red" redirect="/hub"><Text size={20} bold>Начать</Text></Button>

            {/* Background author */}
            <Text className={global_style.block__copyright__author}>
                <a href="https://unsplash.com/@danotis" target="_blank" rel="noreferrer">
                    Background photo by @DanOtis
                </a>
            </Text>
        </div>
    </div>
}