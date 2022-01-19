import { Footer } from "@/components/Index/Footer";
import { InfoBlock } from "@/components/Index/InfoBlock";
import { IndexIntro } from "@/components/Index/Intro";
import { StudyProgram } from "@/components/Index/StudyProgram";
import { Text } from "@/components/UI";
import { Layout } from "@/layouts/Layout";

export default function Home() {
    return (
        <Layout>

            <IndexIntro />
            <InfoBlock
                picture="/pictures/landing/block-pic1.jpg"
                info={
                    <>
                        <Text mode="h2">Что такое HealthyLife?</Text>
                        <Text>
                            HealthyLife - проект, созданный в рамках тринадцатого областного конкурса компьютерных программ по профилактике зависимостей от психоактивных веществ и пропаганде здорового образа жизни среди учащихся образовательных учреждений Тульской области.
                        </Text>
                    </>
                }
            />

            <StudyProgram />

            <InfoBlock
                order="tp"
                picture="/pictures/landing/block-pic2.jpg"
                info={
                    <>
                        <Text mode="h2">В чём состоят цели нашего проекта?</Text>
                        <Text>
                            Наша главная цели - обучение основам Здорового Образа Жизни, а также пропаганда ЗОЖ среди молодёжи.
                        </Text>
                    </>
                }
            />

            <Footer />
        </Layout>
    )
}
