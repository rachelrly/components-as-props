import type { NextPage } from "next";
import Head from "next/head";
import {
  SectionGeneric,
  SectionSpecific,
  SectionNoProps,
} from "../components/Section";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Components as Props</title>
        <meta
          name="description"
          content="Passing components as props with TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Passing Components as Props</h1>
        <SectionGeneric />
        <SectionSpecific />
        <SectionNoProps />
      </main>

      <footer className={styles.footer}>
        <a href="rachelrly.com" target="_blank" rel="noopener noreferrer">
          Created by Rachel Reilly
        </a>
      </footer>
    </div>
  );
};

export default Home;
