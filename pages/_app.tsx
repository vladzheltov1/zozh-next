import '@/styles/globals.scss';
import Head from "next/head";

function Application({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="description" content="HealthyLife - проект, созданный в рамках тринадцатого областного конкурса компьютерных программ среди учащихся Тульской области." />
            <meta name="keywords" content="healthylife, health, food, sport" />
            <meta name="author" content="Владислав Желтов"></meta>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <title>HealthyLife - Ваша жизнь в Ваших руках!</title>
        </Head>
        <Component {...pageProps} />
    </>;
}

export default Application;
