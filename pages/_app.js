import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { CustomProvider } from "rsuite";
import faIr from "rsuite/locales/fa_IR";
import Head from "next/head";
import {ThemeProvider} from 'styled-components';
//import SimpleReactLightbox from "simple-react-lightbox";  //LIGHT BOX IF NEED



const theme = {
  colors: {
      main: 'orange',
  }
}

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  //SERVICE WORKER STATE
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(
          function (registration) {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("ServiceWorker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <title>my-site</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:title" content="my site" />
        <meta property="og:url" content="https://bayatmahdi.ir" />
        <meta
          property="og:description"
          content="description of your website/webpage"
        />
        {/* <meta property="og:image" content="/Free.jpg" />
        <meta property="og:type" content="article" /> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content="my site description" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      <CustomProvider theme="dark" rtl locale={faIr}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CustomProvider>
    </Provider>
  );
}
