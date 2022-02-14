import { useState } from 'react'
import Navbar from './components/Navbar'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSidebar() {
    setIsOpen(!isOpen)
  }
  function closeSidebar() {
    setIsOpen(false)
  }

  return (
    <>
      <Navbar
        closeSidebar={closeSidebar}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  )
}
