
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick what fits your style
});

export const metadata = {
  title: "BrainBucks",
  description: "Compete & Earn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
