import type { NextPage } from "next";
import Head from "next/head";
const Main: NextPage = ({ children }) => {
    return (
        <main>
            <Head>
                <title>Ahmad Zaaza | Homepage</title>
            </Head>
            <div className="container">{children}</div>
        </main>
    );
};

export default Main;
