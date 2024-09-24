import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const symbol = localFont({
  src: [
    {
      path: "./fonts/BST-Symbol-Light-Trial.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/BST-Symbol-Regular-Trial.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BST-Symbol-Bold-Trial.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bst-symbol",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${symbol.variable} font-[family-name:var(--font-bst-symbol)]`}
    >
      <Component {...pageProps} />
    </div>
  );
}
