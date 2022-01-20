import Link from "next/link";
import headerStyle from "./style.module.scss";

export const CardHeader = () => {
    return (
        <div className="wrapper">
            <header className={headerStyle.header}>
                <Link href={"/hub"}>
                    <a>
                        В меню
                    </a>
                </Link>
            </header>
        </div>
    )
}