import Head from 'next/head'
import style from './style.module.scss'

export default function ThisProject() {
  return (
    <>
      <Head>
        <title>This Project - MatheusCDev</title>
      </Head>
      <main className={style.bodyContainer}>
        <div className={style.bodyContent}>heloo</div>
      </main>
    </>
  )
}
