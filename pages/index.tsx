/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/organism/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 flex-col w-full">
          <div className="w-full h-16 bg-white "></div>
          <section className="flex flex-col w-full min-h-screen bg-blue-50 py-5 px-3">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
              <p className="text-gray-700 text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
