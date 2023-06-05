import "../../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import GenericSeo from "@/components/GenericSeo";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <GenericSeo />
      <MainLayout>
        <AnimatePresence mode="wait" initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
}
export default MyApp;
