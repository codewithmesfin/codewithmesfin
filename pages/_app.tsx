import "@/styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/context/themeContext";
import PublicLayout from "@/components/public/layout";
import ScrollTopButton from "@/components/scrrollTopButton";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: any) {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    AOS.init();
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider>
      {/* ✅ Add Google AdSense Script Here */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5828433625810537"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <PublicLayout>
        <Component {...pageProps} />
        <ToastContainer />
        <ScrollTopButton />
      </PublicLayout>
    </ThemeProvider>
  );
}
