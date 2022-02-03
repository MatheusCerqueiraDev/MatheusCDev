import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { ActiveLink } from '../ActiveLink'
import styles from './style.module.scss'

const links = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'Posts',
    path: '/',
  },
  {
    id: 3,
    label: 'This project',
    path: '/',
  },
  {
    id: 4,
    label: 'Matheus',
    path: '/',
  },
  {
    id: 5,
    label: 'Projects',
    path: '/',
  },
  {
    id: 6,
    label: 'Contact',
    path: '/',
  },
]

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
          <div className="menuIcon" onClick={handleClick}>
            {click ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
          </div>

          <ul className={click ? 'navMenu active' : 'navMenu'}>
            {links.map((item) => {
              return (
                <ActiveLink
                  key={item.id}
                  activeClassName={styles.active}
                  href={item.path}>
                  <a onClick={closeMobileMenu}>{item.label}</a>
                </ActiveLink>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
