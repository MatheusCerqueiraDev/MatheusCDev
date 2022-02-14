import Link from 'next/link'
import { CgMail } from 'react-icons/cg'
import { GrInstagram } from 'react-icons/gr'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import styles from './style.module.scss'
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

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerContent}>
        <h1 className={styles.logo}>
          <span>M</span>ACQuery
          <h6>Software Solutions</h6>
        </h1>
      </section>
      <section>
        <ul className={styles.footerLinks}>
          <li>
            <Link href="/">
              <a>
                <CgMail size={20} className="noHover" />
                matheuscerqueira12@gmail.com
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IoLogoLinkedin size={20} className="noHover" />
                Matheus de Carvalho Cerqueira
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IoLogoGithub size={20} className="noHover" />
                MatheusCerqueiraDev
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <GrInstagram size={20} className="noHover" />
                m_cerqueira_
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}
