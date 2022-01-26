import { Icon } from "@/UI/index";
import { ArrowLeftLine } from "@rsuite/icons";
import Link from "next/link";
import headerStyle from "./style.module.scss";

export const CardHeader = () => {
    return (
        <div className="wrapper">
            <header className={headerStyle.header}>
                <Link href={"/hub"}>
                    <a>
                        <Icon icon={ArrowLeftLine} />В меню
                    </a>
                </Link>
            </header>
        </div>
    )
}