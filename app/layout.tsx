import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import SessionsProvider from "@/providers/sessions";

import HeaderComponent from "./_components/Header-Component/headerComponent";
import { Toaster } from "./_components/ui/sonner";
import { AppContextProvider } from "./Context/appContextProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SessionsProvider>
          <AppContextProvider>
            <HeaderComponent />
            {children}
          </AppContextProvider>
        </SessionsProvider>
        <Toaster />
      </body>
    </html>
  );
}
