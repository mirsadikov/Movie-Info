import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" type="image/jpg" href="/logo192.png" />
      </Head>
      <Header /> 
      {children}
      <Footer />
    </>
  );
}
