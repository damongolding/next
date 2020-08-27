import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.data.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main className={styles.main}>
        <h1>Next.js!</h1>
        <p>Name : {props.data.name}</p>
      </main>
    </div>
  );
}

// This gets called on every request
export async function getStaticProps() {
  const data = await require("../data/foo.json");
  return { props: { data: data } };
}
