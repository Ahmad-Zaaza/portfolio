import { MAX_WIDTH } from "@/lib/constants";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
const MainLayout: NextPage = ({ children }) => {
  return (
    <main className="bg-yellow-50 dark:bg-gray-900 min-h-screen font-body">
      <Head>
        <title>Ahmad Zaaza | Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ahmad Zaaza's homepage" />
        <meta name="author" content="Ahmad Zaaza" />
        <meta name="author" content="Gencko" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@craftzdog" />
                <meta name="twitter:creator" content="@craftzdog" />
                <meta name="twitter:image" content="/card.png" /> */}
        {/* <meta
                    property="og:site_name"
                    content="Takuya Matsuyama's Homepage"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" /> */}
      </Head>
      <Navbar />
      <div className="h-64"></div>
      <div className={`container ${MAX_WIDTH} pt-16 pb-8`}>
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
