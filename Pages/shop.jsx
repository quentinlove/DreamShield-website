// pages/shop.jsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    // Dynamically load Shopify Buy Button script
    const script = document.createElement("script");
    script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    document.body.appendChild(script);

    script.onload = () => {
      // Replace YOUR_SHOPIFY_DOMAIN and YOUR_BUY_BUTTON_KEY
      window.ShopifyBuy.UI.onReady((client) => {
        window.ShopifyBuy.UI.buildClient({
          domain: "your-shop-name.myshopify.com",
          storefrontAccessToken: "YOUR_BUY_BUTTON_KEY",
        });

        window.ShopifyBuy.UI.init({
          product: {
            // Replace with your product variant ID
            id: ["gid://shopify/Product/1234567890"],
            node: null,
            moneyFormat: "%24%7B%7Bamount%7D%7D",
            options: { variantId: "Single" },
          },
          toggle: {
            custom: true,
            node: document.getElementById("buy-button"),
          },
        });
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Shop • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <section className="container mx-auto px-4 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-6">
            Pre‐Order DreamShield
          </h1>
          <p className="text-gray-700 mb-8">
            Reserve your DreamShield now for \$120. Free shipping for first 100 orders.
          </p>
          <div id="buy-button" className="inline-block"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
