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
                            HealthyLife - ресурс, созданный в рамках индивидуального проекта, посвящённого изучению web-технологий и пропаганде здорового образа жизни среди учащихся образовательных учреждений Тульской области.
                        </Text>
                    </>
                }
            />

            <StudyProgram />

            <InfoBlock
                order="text-picture"
                picture="/pictures/landing/block-pic2-2.jpg"
                info={
                    <>
                        <Text mode="h2">В чём состоят цели проекта?</Text>
                        <Text>
                            Главная цель ресурса - обучение основам Здорового Образа Жизни, а также пропаганда ЗОЖ среди молодёжи.
                        </Text>
                    </>
                }
            />

            <Footer />
        </Layout>
    )
}
