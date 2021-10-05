import { Layout } from "@/layouts/Layout";
import { Button, Text } from "@/components/UI";
import style from "./style.module.scss";
import { useRouter } from "next/router";

const Hub = () => {

    const cards = [
        { id: 1, title: "Основы Здорового Образа Жизни", link: "/card/1", picture: "vector-health-icon.jpg" },
        { id: 2, title: "Мы есть то, что мы едим", link: "/card/2", picture: "healthy-food-vector.jpg" },
        { id: 3, title: "Движение - жизнь", link: "/card/3", picture: "sport-balls-vectors.jpg" },
    ]

    const router = useRouter();

    const redirectHandler = (link) => {
        router.replace(link);
    }

    return (
        <Layout>
            <div className={style.hub__inner}>
                <Text mode="h1">Здоровый образ жизни</Text>
                <div className={style.card_wrapper}>
                    {cards.map((card) => (
                        <div onClick={() => redirectHandler(card.link)} key={card.id} className={style.card}>
                            <img src={"/pictures/cards/" + card.picture} className={style.card__picture} />
                            <Text bold className={style.card__title}>{card.title}</Text>
                        </div>
                    ))}
                </div>
            </div>
            <Button ghost secondary>
                Button
            </Button>
        </Layout>
    )
}

export default Hub;