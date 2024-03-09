import "@/styles/globals.css";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from "@/context/themeContext";
import PublicLayout from "@/components/public/layout";
import GoTopButton from "@/components/goTopButton";

export default function MyApp({ Component, pageProps }: any) {
  
  const { isDarkMode } = useTheme();
  useEffect(() => { 
    AOS.init(); 
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode])

  
  return (
    <ThemeProvider>
      <PublicLayout>
        <Component {...pageProps} />
        <ToastContainer />
        <GoTopButton/>
      </PublicLayout>
    </ThemeProvider>
  )
}