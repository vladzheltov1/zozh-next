import { Icon } from "@/UI/Icon";
import { AbTest, Grid, InfoOutline, Menu } from "@rsuite/icons";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { HeaderNavLink, IHeaderNavLinkProps } from "./HeaderNavLink";
import style from "./style.module.scss";

type HeaderMode = "desktop" | "mobile";

const headerNavItems: IHeaderNavLinkProps[] = [
    { title: "Задания", href: "/hub", icon: Grid },
    { title: "Демо", href: "/demo", icon: AbTest },
    { title: "О проекте", href: "/about", icon: InfoOutline },
]

const MIN_DESKTOP_WIDTH = 580;

const Header = () => {
    const [mode, setMode] = useState<HeaderMode>("desktop");
    const [open, setOpen] = useState(false);
    const firstLoad = useRef(true);

    const checkAndChangeMode = () => {
        if (window.innerWidth >= MIN_DESKTOP_WIDTH && mode !== "desktop") {
            setMode("desktop");
        }
        else if (window.innerWidth < MIN_DESKTOP_WIDTH && mode !== "mobile") {
            setMode("mobile");
        }
    }

    useEffect(() => {
        window.addEventListener("resize", checkAndChangeMode);
        return () => {
            window.removeEventListener("resize", checkAndChangeMode);
        }
    });

    useEffect(() => {
        if (firstLoad.current == true) {
            checkAndChangeMode();
            firstLoad.current = false;
        }
    });

    const NavLinkList: FC = () => {
        return <>
            {headerNavItems.map((item) => (
                <li key={item.title}>
                    <HeaderNavLink title={item.title} href={item.href} icon={item.icon} />
                </li>
            ))}
        </>
    }

    const toggleMenu = () => setOpen(!open);

    return (
        <header className={style.header}>
            <div className="wrapper">
                <nav className={style.header__nav}>
                    <Link href="/"><a className={style.header__brand}>HealthyLife</a></Link>
                    <ul className={style.header__nav__ul}>
                        {mode == "mobile" && (
                            <li onClick={toggleMenu} style={{ fontSize: 19 }}>
                                <Icon icon={Menu} />
                            </li>
                        )}

                        {mode === "desktop" && (
                            <NavLinkList />
                        )}
                    </ul>
                </nav>
                {mode === "mobile" && open && (
                    <ul className={style.navListOpen}>
                        <NavLinkList />
                    </ul>
                )}
            </div>
        </header >
    )
}

export default Header;