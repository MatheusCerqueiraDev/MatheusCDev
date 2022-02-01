import Link from 'next/link'
// import { BsLinkedin } from 'react-icons/bs'
// import { FiTwitter } from 'react-icons/fi'
// import { GrInstagram } from 'react-icons/gr'
import style from './style.module.scss'

const socialNetwork = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matheusdecarvalho1/',
    icon: 'BsLinkedin',
  },
  {
    id: 2,
    name: 'Instagram',
    link: 'https://www.instagram.com/m_cerqueira_/',
    icon: 'BsLinkedin',
  },

  {
    id: 3,
    name: 'Twitter',
    link: 'https://twitter.com/teteu_tsx/',
    icon: 'BsLinkedin',
  },
]

// const icons = [BsLinkedin, GrInstagram, FiTwitter]

export function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContent}>
        <h1>MatheusC.Dev</h1>
        <div className={style.networkList}>
          <h3>You can reach me through those links:</h3>
          {socialNetwork.map(
            (
              item,
              {
                /* i */
              },
            ) => {
              // const Icon = icons[i]
              return (
                <div key={item.id} className={style.networkitem}>
                  <Link href={item.link}>
                    {/* <Icon /> */}
                    <a>{item.name}</a>
                  </Link>
                </div>
              )
            },
          )}
        </div>
      </div>
    </footer>
  )
}
