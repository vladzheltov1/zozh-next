import { Button, Space, Text } from "@/components/UI";
import colors from "@/styles/var.module.scss";
import global_style from "../style.module.scss";
import intro_style from "./style.module.scss";

export const IndexIntro = () => {

    return <div className={`${global_style.block} ${intro_style.intro_block}`}>
        <div className={intro_style.intro_block__inner}>
            {/* Main title */}
            <Text mode="h1" color="#fff" size={72} className={intro_style.intro_block__title}>
                <span><Text mode="span" color={colors.extraGreen}>З</Text>доровый&nbsp;</span>
                <span><Text mode="span" color={colors.extraGreen}>О</Text>браз&nbsp;</span>
                <span><Text mode="span" color={colors.extraGreen}>Ж</Text>изни</span>
            </Text>

            {/* Quote */}
            <Text size={"1.3rem"} color={colors.gray0} italic>
                <Text mode="span" color={colors.extraGreen}>&#171;</Text>
                Единственный способ сохранить здоровье — это есть то, чего не хочешь, пить то, чего не любишь, и делать то, что не нравится.″
                <Text mode="span" color={colors.extraGreen}>&#187;</Text>
                {/* <Space height={"1rem"} /> */}
                <Text color={colors.extraGreen}>-Марк Твен</Text>
                <Space height={"2rem"} />
            </Text>

            {/* Button */}
            <Button appearance="danger" link="/hub"><Text size={20} bold>Начать</Text></Button>

            {/* Background author */}
            <Text className={global_style.block__copyright__author}>
                <a href="https://unsplash.com/@danotis" target="_blank" rel="noreferrer">
                    Background photo by @DanOtis
                </a>
            </Text>
        </div>
    </div>
}