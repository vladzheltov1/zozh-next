import style from "./style.module.scss";

/**
 * @todo Доработать компонент
 */
export const Icon = ({ icon }) => {
    const Icon = icon;
    return <span className={style.icon}><Icon /></span>
}