import { Text } from "@/components/UI";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import style from "./style.module.scss";

export type DataType = {
    title: string,
    link: string,
    picture: string
}

export interface ICardProps {
    data: DataType
}

export const Card: FC<ICardProps> = (props) => {
    const { data } = props;
    const router = useRouter();

    return (
        <div onClick={() => router.push(data.link)} className={style.card}>
            <Image src={"/pictures/cards/" + data.picture} className={style.card__picture} layout="fill" alt="" />
            <Text bold className={style.card__title}>{data.title}</Text>
        </div>
    )
}