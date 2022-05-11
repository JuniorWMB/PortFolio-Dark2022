import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import Me from "../../public/img/intro/me.png";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const currentURL = "https://www.juniorwembopaportfolio.com/";
  const siteName = "Junior Wembopa PortFolio Dev. FullStack Nodejs Nextjs";
  const pageTitle = "Junior Wembopa PortFolio Dev. FullStack Nodejs Nextjs";
  const description =
    "Je vous aide a la création de votre site web ou app web Javascript, Nextjs, Nodejs...";
  return (
    <>
      <Head>
        <title>JNR Dev. Freelance</title>

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/juniorwembopa243/image/upload/v1652276176/IMG_2067_2_wcaks7.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        {/* <link rel="icon" href="/img/favicon.ico" /> */}
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
