import { Button, Space, Text } from "@/components/UI";
import Link from "next/link";
import style from "../style.module.scss";

export const IndexIntro = () => {

    const color = "#8BC34A";

    return <div className={style.intro_block}>
        <div className={style.intro_block__inner}>
            {/* Main title */}
            <Text mode="h1" color="#fff" size={72} className={style.intro_block__title}>
                <span><Text mode="span" color={color}>З</Text>доровый&nbsp;</span>
                <span><Text mode="span" color={color}>О</Text>браз&nbsp;</span>
                <span><Text mode="span" color={color}>Ж</Text>изни&nbsp;</span>
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
            <Text className={style.block__copyright__author}>
                <Link href="https://unsplash.com/@danotis" passHref>
                    <a>
                        Background photo by @DanOtis
                    </a>
                </Link>
            </Text>
        </div>
    </div>
}