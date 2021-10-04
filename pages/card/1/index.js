import { Card } from "@/layouts/Card";
import { Layout } from "@/layouts/Layout";
import { Task1 } from "./Tasks/1";
import { Task2 } from "./Tasks/2";
import style from "./style.module.scss";

const Card1 = () => {
    return (
        <Layout>
            <div className="wrapper">
                <Card className={style.card}>
                    <Task1 />
                    <Task2 />
                </Card>
            </div>
        </Layout>
    )
}

export default Card1;