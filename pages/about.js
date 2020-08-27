import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({tableNumber}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          About me!
        </h1>
				<p>
					{ tableNumber }
				</p>
				<div>
				<Link href="/">
					<a>
						Go home
					</a>
				</Link>
				</div>
				
      </main>
    </div>
  )
}

Home.getInitialProps = async (content) => { return {tableNumber: content.query.tableNumber} }
