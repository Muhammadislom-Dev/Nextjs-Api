import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=`}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
