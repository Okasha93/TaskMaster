import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from '../provider/ReduxProvider';
import { store } from '../store/store';
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Master",
  description: "Manage your Company tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-primary-900/10 to-gray-50">
        <ReduxProvider>
        <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
