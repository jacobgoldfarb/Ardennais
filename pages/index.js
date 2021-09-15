import Head from 'next/head'
import Navbar from './navbar'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { getUsers } from '../utils/users'

export default function Home() {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Appaloosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
      </main>

      <footer>
      </footer>
    </div>
  )
}
