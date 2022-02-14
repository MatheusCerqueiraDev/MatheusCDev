import Head from 'next/head'
import style from './style.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>MCQ - Posts</title>
      </Head>

      <main className={style.bodyContainer}>
        <div className={style.bodyContent}>heloo</div>
      </main>
    </>
  )
}
