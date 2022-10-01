import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from "../components/counter"

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        
        <title>Counter</title>
        <link rel="icon" href="Logo.png" />
        <meta name="description" content="Counter app with glassmorphism theme." />

        <link rel="manifest" href="manifest.json" />
      </Head>

      <h1></h1>
      <Counter />
    </div>
  )
}
