import { Space, Tab, Tabs } from "@/components/UI";
import { Layout } from "@/layouts/Layout";

const Demo = () => {
    return <Layout>
        <div className="wrapper">
            <Space height={20} />
            <Tabs accentColor="green">
                <Tab title="Сопоставление">
                    Сопоставление
                </Tab>
                <Tab title="Передвижение">
                    Передвижение
                </Tab>
            </Tabs>
        </div>
    </Layout>
}

export default Demo;