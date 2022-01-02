import { Text } from "@/components/UI";
import { Layout } from "@/layouts/Layout";
import { Card } from "./Card";
import style from "./style.module.scss";

const Hub = () => {
    const cards = [
        { title: "Основы Здорового Образа Жизни", link: "/card/1", picture: "vector-health-icon.jpg" },
        { title: "Мы есть то, что мы едим", link: "/card/2", picture: "healthy-food-vector.jpg" },
        { title: "Движение - жизнь", link: "/card/3", picture: "sport-balls-vectors.jpg" },
    ]

    return (
        <Layout>
            <div className={style.hub__inner}>
                <Text mode="h1">Здоровый образ жизни</Text>
                <div className={style.card_wrapper}>
                    {cards.map((card, index) => (
                        <Card key={index} data={card} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Hub;