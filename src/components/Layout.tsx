import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cowichan Valley Wood Designs</title>
        <meta
          name="description"
          content="Welcome to Cowichan Valley Wood Designs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
