import { Input, Text } from "@/components/UI";
import { Layout } from "@/layouts/Layout";

const About = () => {
    return (
        <Layout>
            <div className="wrapper">
                <Text mode="h1">Страница о продукте</Text>
                <Input placeholder="Text" />
            </div>
        </Layout>
    )
}

export default About;