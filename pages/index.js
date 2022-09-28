import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from "../components/counter"

export default function Home() {
  return (
    <div>
      <Head>
      <title>Counter</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1></h1>
      <Counter />
    </div>
  )
}
