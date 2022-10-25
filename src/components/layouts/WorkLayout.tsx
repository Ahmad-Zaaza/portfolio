import { motion, Variants } from "framer-motion";
import Head from "next/head";
interface IWorkLayoutProps {
  title: string;
}
const variants: Variants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
};
const WorkLayout: React.FC<IWorkLayoutProps> = ({ children, title }) => {
  
  return (
    <motion.article
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "easeInOut", duration: 0.5 }}
      className="font-system"
    >
      <Head>
        <title>{`${title} | Ahmad Zaaza`}</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />
      </Head>
      {children}
    </motion.article>
  );
};

export default WorkLayout;
