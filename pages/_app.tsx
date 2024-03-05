import "@/styles/globals.css";
import Layout from '../components/layout'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "@/context/authContext";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GotopButton from "@/components/gotopButton";
import { ThemeProvider, useTheme } from "@/context/themeContext";

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
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
        <GotopButton/>
      </Layout>
    </AuthProvider>
    </ThemeProvider>
  )
}