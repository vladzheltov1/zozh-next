import { Card, Results, Theory } from "@/core/public";
import { CardLayout } from "@/layouts/index";
import { Task1 } from "./Tasks/1";

const Card1 = () => {
    return (
        <CardLayout>
            <div className="wrapper">
                <Card>
                    <Theory>
                        Здоровый образ жизни, ЗОЖ — образ жизни человека, направленный на укрепление здоровья, профилактику болезней и развитие человеческого организма в целом. Здоровье человека на 60 % и более зависит от образа жизни (еда, режим питания, физическая активность, уровень стресса, вредные привычки и разрушительное поведение). Здоровый образ жизни подразумевает ментальное здоровье, отказ от табака и употребления алкоголя, здоровые модели питания, физическую активность, физические упражнения, спорт и т. д. Поддающиеся изменению формы поведения, такие как употребление табака, отсутствие физической активности, нездоровое питание и употребление алкоголя, — повышают риск развития неинфекционных заболеваний (НИЗ). Основа здорового питания — высокое потребление разнообразной растительной пищи. Многие вещества, содержащиеся в растительной пище, обладают антиоксидантными и противовоспалительными свойствами, препятствуют тромбообразованию, регулируют артериальное давление, активность ферментов, нормализуют уровень глюкозы в крови, корректируют липидный профиль, влияют на экспрессию генов и сигнальные пути, улучшают состояние миокарда, а также влияют на некоторые биомаркеры, ассоциированные с сердечно-сосудистыми заболеваниями.Мета-анализы когортных исследований показали, что потребление отдельных групп продуктов питания ассоциировано со снижением рисков смертности от всех причин, включая продукты с высоким содержанием пищевых волокон (клетчатки), в том числе овощи, фрукты (прежде всего свежие, а не консервированные), орехи, бобовые, цельнозерновые продукты, а также рыба, оливковое масло, умеренное потребление кисломолочных продуктов. Исследования, в том числе в России, говорят о том, что потребление кофе, в том числе декофеинизированного, ассоциировано со снижением смертности от всех причин.
                    </Theory>
                    <Task1 />
                    {/* <Task2 />
                    <Task3 />
                    <Task4 />
                    <Task5 /> */}
                    <Results maxScore={500} />
                </Card>
            </div>
        </CardLayout>
    )
}

export default Card1;