import { Space, Tab, Tabs } from "@/components/UI";
import { Layout } from "@/layouts/Layout";
import { Matching } from "./Matching";
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
                    <Matching />
                </Tab>
            </Tabs>
        </div>
    </Layout>
}

export default Demo;