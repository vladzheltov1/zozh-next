import { useCard } from "@/core/public";
import { Icon } from "@/UI/index";
import { ArrowLeftLine } from "@rsuite/icons";
import headerStyle from "./Card.module.scss";

export const CardHeader = () => {
    const { backToHub } = useCard();
    return (
        <div className="wrapper">
            <header className={headerStyle.cardHeader}>
                <div onClick={backToHub}>
                    <Icon icon={ArrowLeftLine} />В меню
                </div>
            </header>
        </div>
    )
}