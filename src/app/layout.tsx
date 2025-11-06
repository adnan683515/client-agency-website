import { Federo } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";




export const federo = Federo({
  weight: "400",              // <-- required!
  style: "normal",            // optional, default is normal
  variable: "--font-federo",  // optional CSS variable
  subsets: ["latin"],         // optional, usually ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bangla">
      <body className={` ${federo.className} antialiased`}>
        <Navber />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
