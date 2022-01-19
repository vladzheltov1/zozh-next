import { Space, Text } from "@/components/UI";
import { AbTest, Admin, Code, Grid, InfoOutline } from "@rsuite/icons";
import { FC } from "react";
import { Column } from "./Column";
import footerStyle from "./style.module.scss";

export const Footer: FC = () => {
    const footerContent = [
        {
            title: "Ссылки на автора",
            links: [
                { title: "ВКонтакте", link: "https://vk.com/vladzht", icon: <Admin /> },
                { title: "GitHub", link: "https://github.com/vladzheltov1", icon: <Code /> }
            ]
        },
        {
            title: "Навигация",
            links: [
                { title: "Задания", link: "/hub", icon: <Grid /> },
                { title: "Демо", link: "/demo", icon: <AbTest /> },
                { title: "О проекте", link: "/about", icon: <InfoOutline /> }
            ]
        },
        {
            title: "Другие ссылки",
            links: [
                { title: "Этот проект на GitHub", link: "https://github.com/vladzheltov1/zozh-next", icon: <Code /> }
            ]
        }
    ];

    return (
        <footer className={footerStyle.footer}>
            <div className="wrapper">
                <div className={footerStyle.innerContent}>
                    {footerContent.map((item) => (
                        <Column key={item.title}>
                            <Text size={"150%"} bold>{item.title}</Text>
                            <Space height={5} />
                            <Column key={item.title}>
                                {item.links.map((link) => (
                                    <a href={link.link} key={link.title} className={footerStyle.itemWithIcon} target={link.link.includes("https") ? "_blank" : "_self"} rel="noreferrer">
                                        {link.icon && (link.icon)}
                                        {link.title}
                                    </a>
                                ))}
                            </Column>
                        </Column>
                    ))}
                </div>
            </div>
        </footer>
    )
}