import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>      
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>

      <main className={styles.main}>
        <h1>Next.js!</h1>
        <div>
          <Link href={{ pathname:"/about", query : {tableNumber:24} }}>
            <a>About me</a>
          </Link>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>
          Name : {props.data.name}
        </p>
      </main>
    </div>
  );
}

// This gets called on every request
export async function getStaticProps() {

  const data = await require("../data/data.json");
  return {  props : { data:data} };
}
