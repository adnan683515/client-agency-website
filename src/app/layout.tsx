"use client";

import { Federo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navber";
import { usePathname } from "next/navigation";
import Footer from "./components/shared/Footer";
import { MyProvider } from '../app/context/MyContext'

export const federo = Federo({
  weight: "400",
  style: "normal",
  variable: "--font-federo",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();


  const hideNavbarRoutes = ["/ServicePage", '/ContactPage', '/'];

  const hideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="bangla">
      <body className={`${federo.className} antialiased`}>

        <MyProvider>
          {hideNavbar && <Navbar />}
          <div>{children}</div>
          <Footer></Footer>

        </MyProvider>
      </body>
    </html>
  );
}
