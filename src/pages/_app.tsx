import "../../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
}
export default MyApp;
