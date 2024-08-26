import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from '../provider/ReduxProvider';
import { store } from '../store/store';

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
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
