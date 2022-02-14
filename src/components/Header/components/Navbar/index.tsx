import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import { ActiveLink } from '../../../ActiveLink'
import Sidebar from '../Sidebar'
import styles from './style.module.scss'

interface NavbarProps {
  closeSidebar: () => void
  isOpen: boolean
  toggleSidebar: () => void
}

const NavItems = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'Posts',
    href: '/posts',
  },
  {
    id: 3,
    label: 'Matheus',
    href: '/aboutme',
  },
  {
    id: 4,
    label: 'Projects',
    href: '/projects',
  },
  {
    id: 5,
    label: 'Contact',
    href: '/contact',
  },
]

const Navbar = ({ closeSidebar, isOpen, toggleSidebar }: NavbarProps) => {
  return (
    <header className={styles.header}>
      {isOpen ? (
        <Sidebar
          navItems={NavItems}
          isOpen={isOpen}
          closeSidebar={closeSidebar}
          toggleSidebar={toggleSidebar}
        />
      ) : (
        ''
      )}

      <nav className={styles.navContainer}>
        <h1 className={styles.navLogo}>
          <span>M</span>ACQuery
          <h6>Software Solutions</h6>
        </h1>
        <span onClick={toggleSidebar} className={styles.mobileIcon}>
          {isOpen ? <MdOutlineClose size={25} /> : <FaBars size={25} />}
        </span>
        <ul className={styles.navMenu}>
          {NavItems.map((item) => {
            return (
              <li key={item.id} className={styles.navItem}>
                <ActiveLink
                  href={item.href}
                  activeClassName={styles.NavbarLinkActive}>
                  <a onClick={closeSidebar}>{item.label}</a>
                </ActiveLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
