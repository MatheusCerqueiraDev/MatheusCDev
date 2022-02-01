import Head from 'next/head'
import { MainContent } from '../components/ladingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home-MatheuCDev</title>
      </Head>

      <main>
        <MainContent />
      </main>
    </>
  )
}
