import Image from "next/image";
import { FC, ReactNode } from "react";
import global_style from "../style.module.scss";
import info_style from "./style.module.scss";

type Order = "picture-text" | "text-picture"
export interface IInfoBlockProps {
    picture: string,
    info: ReactNode,
    order?: Order
}

export const InfoBlock: FC<IInfoBlockProps> = (props) => {
    const { picture, info, order = "picture-text" } = props;

    return (
        <div className={`${global_style.block} ${info_style.info_block__inner}`}>
            <div className={info_style.info_block__picture} style={{ order: order == "picture-text" ? 0 : 1 }}>
                <Image src={picture} alt="" layout="fill" />
            </div>
            <div className={info_style.info_block__info}>
                {info}
            </div>
        </div>
    )
}