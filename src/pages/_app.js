// pages/_app.js
import "@/styles/globals.css";
import "leaflet/dist/leaflet.css"
import { DefaultSeo } from "next-seo";
import Head from "next/head"; 

const SEO = {
  title: "DreamShield – Sleep Uninterrupted",
  description:
    "DreamShield is a side-sleep–optimized ANC ear‐cuff with real-time noise classification, gentle haptic alerts, and data‐driven coaching.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dreamshield.co",
    site_name: "DreamShield",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
+       <link rel="icon" href="/favicon.png" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CZVTNSXJQ9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CZVTNSXJQ9');
</script>
+     </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
