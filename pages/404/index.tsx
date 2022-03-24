import { Icon, Text, Wrapper } from "@/components/UI";
import { Layout } from "@/layouts/Layout";
import { PageTop } from "@rsuite/icons";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const NotFound: FC = () => {
    const styles = {
        display: "flex",
        height: "70vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 0
    } as CSSProperties;

    return(    
        <Layout>
            <Wrapper>
                <div style={styles}>
                    <Text mode="h1" style={{fontSize: "5rem", margin: 0, padding: 0, lineHeight: 1}}>404!</Text>
                    <Text>Страница не найдена!</Text>
                    <Text><Link href={"/"}><a> <Icon icon={PageTop} /> На главную</a></Link></Text>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default NotFound;