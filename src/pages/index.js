import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    axios
      .get("/api/bot")
      .then(() => {
        console.log("Cargado Correctamente...");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <></>;
}
