import Head from "next/head";
import { Fragment, useEffect } from "react";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>NoFreeLunch</title>
        <link rel="icon" href="" />
        <link rel="shortcut icon" href="" />
        <meta httpEquiv="Content-Language" content="ko,en" />
        <meta name="title" content="NoFreeLunch Community" />
        <meta
          name="description"
          content="No Free Lunch는 DAO를 생태계를 구성할 사람을 찾고있습니다."
        />
        <meta property="image" content="" />

        <meta name="keywords" content="NoFreeLunch" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="No Free Lunch" />
        <meta
          property="og:description"
          content="No Free Lunch는 DAO를 생태계를 구성할 사람을 찾고있습니다."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="No Free Lunch" />
        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
          rel="stylesheet"
        ></link>
        {/* <!-- !Google Fonts --> */}
        {/* <!-- Styles --> */}
        <link type="text/css" rel="stylesheet" href="css/plugins.css" />
        <link type="text/css" rel="stylesheet" href="css/style.css?ver=1.1" />
        <meta
          name="naver-site-verification"
          content="813a2858411daeedb27f403f811ecd1e6f6b6d11"
        />
      </Head>
      {/* //? GA설정 */}
      <Script
        id="gtagManager"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-KGKF7C9NJ3`}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KGKF7C9NJ3', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default appWithTranslation(MyApp);
