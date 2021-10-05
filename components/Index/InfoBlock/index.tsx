import global_style from "../style.module.scss";
import info_style from "./style.module.scss";

export const InfoBlock = ({ picture, info, order = "pt" }) => {
    return (
        <div className={`${global_style.block} ${info_style.info_block__inner}`}>
            <div className={info_style.info_block__picture} style={{ order: order == "pt" ? 0 : 1 }}>
                <img src={picture || null} alt="" />
            </div>
            <div className={info_style.info_block__info}>
                {info}
            </div>
        </div>
    )
}