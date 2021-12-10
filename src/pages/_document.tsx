import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-primary text-primary min-h-screen font-body transition-colors duration-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
