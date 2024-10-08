"use client";
import "@styles/globals.css";

import Nav from "@pages/Nav";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
export default function RootLayout({ children }) {
  const [mainTheme, setMainTheme] = useState();
  const [gradient, setGradient] = useState();

  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'Dark';
    }
    return 'Light';
  };
  useEffect(() => {
    const systemTheme = getSystemTheme();
    setMainTheme(systemTheme === 'Dark' ? 'dark-main' : 'main');
    setGradient(systemTheme === 'Dark' ? 'dark-gradient' : 'gradient');
  }, []);
  
  const handleThemeChange = (newTheme) => {
    setMainTheme(newTheme === 'Dark' ? 'dark-main' : 'main');
    setGradient(newTheme === 'Dark' ? 'dark-gradient' : 'gradient');
  };

  return (
    <html lang="en">
      <Head>

        <title>Pradeep Sakthi</title>
        <meta name="description" content="Pradeep Sakthi's Portfolio"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/images/profileLogo.png" />
      
      </Head>
      <body className="dark selection:bg-sky-700" >
        <div className={mainTheme}>
          
        <div className={gradient}></div>
        </div>
        
        <main className="app">
          <Nav onThemeChange={handleThemeChange}></Nav>
          {children}
          <Toaster position="top-center"
          reverseOrder={false} />
        </main>
      </body>
    </html>
  );
}
