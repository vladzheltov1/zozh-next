import { Space, Tab, Tabs } from "@/components/UI";
import { Layout } from "@/layouts/Layout";
import { Moving } from "./Moving";

const Demo = () => {
    return <Layout>
        <div className="wrapper">
            <Space height={20} />
            <Tabs accentColor="green">
                <Tab title="Передвижение">
                    <Moving />
                </Tab>
                <Tab title="Сопоставление">
                    Сопоставление
                </Tab>
            </Tabs>
        </div>
    </Layout>
}

export default Demo;