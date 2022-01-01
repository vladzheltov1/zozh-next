import { Tabs, Tab } from "@/components/UI";
import { Layout } from "@/layouts/Layout";

const Demo = () => {
    return <Layout>
        <div className="wrapper">
            <Tabs>
                <Tab title="1. Текст">
                    Проверка 1
                </Tab>
                <Tab title="2. Текст">
                    Проверка 2
                </Tab>
            </Tabs>
        </div>
    </Layout>
}

export default Demo;