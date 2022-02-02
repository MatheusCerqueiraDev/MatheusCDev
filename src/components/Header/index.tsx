import { useState } from 'react'
import { ActiveLink } from '../ActiveLink'
import styles from './style.module.scss'

export function Header() {
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>
          <span>M</span>_Cerqueira
        </h1>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <ActiveLink activeClassName={styles.active} href="/">
            <a onClick={closeMobileMenu}>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts">
            <a onClick={closeMobileMenu}>Posts</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/thisProject">
            <a onClick={closeMobileMenu}>This Project</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/aboutme">
            <a onClick={closeMobileMenu}>Matheus</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/projects">
            <a onClick={closeMobileMenu}>Projects</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/contact">
            <a onClick={closeMobileMenu}>Contact</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  )
}
