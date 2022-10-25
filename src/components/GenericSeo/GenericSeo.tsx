import Head from "next/head";

const GenericSeo = () => {
  return (
    <Head>
      <title>Ahmad Zaaza | Homepage</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ahmad Zaaza's homepage" />
      <meta name="author" content="Ahmad Zaaza" />
      <meta name="author" content="Gencko" />
      <meta property="og:site_name" content="Ahmad Zaaza's Homepage" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default GenericSeo;
