import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentWithFonts extends Document {
  redner() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Main></Main>
        <NextScript></NextScript>
      </Html>
    );
  }
}

export default DocumentWithFonts;
