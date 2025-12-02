"use client";

import { useState, useEffect } from "react";
import { Federo ,Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navber";
import Footer from "./components/shared/Footer";
import { MyProvider } from "../app/context/MyContext";
import Loading from "./components/shared/Loading";



export const federo = Federo({
  weight: "400",
  style: "normal",
  variable: "--font-federo",
  subsets: ["latin"],
});

export const menrope = Manrope({
  weight: ["400","500","600","700"],
  style: 'normal',
  variable: "--font-menrope"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="bn">
      <body className={`${menrope.className} antialiased`}>
        <MyProvider>
          {loading ? (
            <div className="w-screen h-screen flex items-center justify-center bg-white">

              <Loading></Loading>

            </div>
          ) : (
            <>
              <Navbar />
              <div>{children}</div>
              <Footer />
            </>
          )}
        </MyProvider>
      </body>
    </html>
  );
}
