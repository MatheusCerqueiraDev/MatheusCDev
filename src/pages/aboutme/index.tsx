import Head from 'next/head'
import style from './style.module.scss'

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me - MatheusCDev</title>
      </Head>
      <main className={style.bodyContainer}>
        <div className={style.bodyContent}>heloo</div>
      </main>
    </>
  )
}
