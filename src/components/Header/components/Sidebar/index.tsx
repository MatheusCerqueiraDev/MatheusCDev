import { MdOutlineClose } from 'react-icons/md'
import { ActiveLink } from '../../../ActiveLink'
import styles from './style.module.scss'

interface navItem {
  id: number
  label: string
  href: string
}

interface SidebarProps {
  closeSidebar: () => void
  isOpen: boolean
  toggleSidebar: () => void
  navItems: navItem[]
}

const Sidebar = ({
  navItems,
  isOpen,
  closeSidebar,
  toggleSidebar,
}: SidebarProps) => {
  return (
    <aside className={isOpen ? styles.SidebarContainer : styles.SidebarHidden}>
      <span onClick={closeSidebar} className={styles.mobileIcon}>
        <MdOutlineClose />
      </span>
      <div className={styles.SidebarWrapper}>
        <ul className={styles.SiderbarMenu}>
          {navItems.map((item) => {
            return (
              <li className={styles.SidebarItem}>
                <ActiveLink
                  key={item.id}
                  href={item.href}
                  activeClassName={styles.SidebarLinkActive}>
                  <a onClick={closeSidebar}>{item.label}</a>
                </ActiveLink>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
