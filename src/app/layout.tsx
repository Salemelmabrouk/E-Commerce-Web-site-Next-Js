import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import CartProvider from "../../provider/CartProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-shop",
  description: "Ecommerce apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
 }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(255, 255, 255)",
              color: "fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow ">{children} </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
