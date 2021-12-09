import Head from "next/head";
interface IWorkLayoutProps {
  title: string;
}

const WorkLayout: React.FC<IWorkLayoutProps> = ({ children, title }) => {
  return (
    <article className="font-system">
      <Head>
        <title>{title} | Ahmad Zaaza</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />
      </Head>
      {children}
    </article>
  );
};

export default WorkLayout;
