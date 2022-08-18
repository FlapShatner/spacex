import Header from './header/Header'
import Footer from './footer/Footer'
import Menu from './menu/Menu'
import { useState } from 'react'

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function showMenu() {
    setIsOpen((current) => !current)
  }

  return (
    <>
      <Header showMenu={showMenu} />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}
