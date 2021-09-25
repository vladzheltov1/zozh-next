import { Icon } from "@/UI/Icon";
import { Task } from "@rsuite/icons";
import Link from "next/link";
import style from "./style.module.scss";

const Header = () => {
    return (
        <header className={style.header}>
            <div className="wrapper">
                <nav className={style.header__nav}>
                    <Link href="/"><a className={style.header__brand}>HealthyLife</a></Link>
                    <ul className={style.header__nav__ul}>
                        <li>
                            <Link href="/hub">
                                <a>
                                    <Icon icon={Task} /> Задания
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"><a>О проекте</a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;