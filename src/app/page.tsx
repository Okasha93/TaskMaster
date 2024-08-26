import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from '@/components/Home';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Master",
  description: "Manage your Company tasks",
};

const HomePage = () => <Home/>

export default HomePage;

