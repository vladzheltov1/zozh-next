import { Text } from "@/components/UI";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Cards } from ".";
import style from "./style.module.scss";

export interface ICardProps {
    data: Cards
}

export const Card: FC<ICardProps> = (props) => {
    const { data = { link: "", picture: "", title: "" } } = props;
    const router = useRouter();

    return (
        <div onClick={() => router.push(data.link)} className={style.card}>
            <Image src={"/pictures/cards/" + data.picture} className={style.card__picture} layout="fill" alt="" />
            <Text bold className={style.card__title}>{data.title}</Text>
        </div>
    )
}

export default Card;