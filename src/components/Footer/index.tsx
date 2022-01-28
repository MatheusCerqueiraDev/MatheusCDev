import Link from 'next/link'
import style from './style.module.scss'

const socialNetwork = [
  {
    id: 1,
    name: 'Instagram',
    link: 'https://www.instagram.com/m_cerqueira_/',
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matheusdecarvalho1/',
  },
  {
    id: 3,
    name: 'Twitter',
    link: 'https://twitter.com/teteu_tsx/',
  },
]

export function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContent}>
        <h1>MatheusC.Dev</h1>
        <div className={style.networkList}>
          <ul>
            <h3>You can reach me through those links:</h3>
            {socialNetwork.map((item) => {
              return (
                <Link key={item.id} href={item.link}>
                  <li>{item.name}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
