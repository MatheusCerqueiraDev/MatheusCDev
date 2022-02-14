import Head from 'next/head'
import { MainContent } from '../components/ladingPage'
export default function Home() {
  return (
    <>
      <Head>
        <title>MCQ Home</title>
      </Head>

      <main>
        <MainContent />
      </main>
    </>
  )
}
