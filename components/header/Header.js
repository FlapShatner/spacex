import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import { Twirl as Hamburger } from 'hamburger-react'

import Link from 'next/link'

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [winHeight, setWinHeight] = useState(0)

  const handleScroll = () => {
    const winHeight = window.innerHeight
    const position = window.scrollY
    setScrollPosition(position)
    setWinHeight(winHeight)
  }

  let showBg = false
  const direction = useScrollDirection()

  if (direction === 'up' && scrollPosition > winHeight) {
    showBg = true
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${styles.mainHeader} header ${scrollPosition > 199 && direction === 'down' ? 'hide' : 'show'} `}>
      <div className={`headerBg ${showBg && 'isOpen'} `}></div>
      <div className={styles.headerInner}>
        <Link href='/'>
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>

        <ul className={styles.navLeft}>
          <li>
            <Link href='/vehicles/falcon-9'>FALCON 9</Link>
          </li>
          <li>
            <Link href='/vehicles/falcon-heavy'>FALCON HEAVY</Link>
          </li>
          <li>
            <Link href='/vehicles/dragon'>DRAGON</Link>
          </li>
          <li>
            <Link href='/vehicles/starship'>STARSHIP</Link>
          </li>
          <li>
            <Link href='/vehicles/human-spaceflight'>HUMAN SPACEFLIGHT</Link>
          </li>
          <li>
            <Link href='/vehicles/rideshare'>RIDESHARE</Link>
          </li>
          <li>
            <Link href='www.starlink.com'>STARLINK</Link>
          </li>
        </ul>
      </div>
      <ul className={styles.navRight}>
        <li>
          <Link href='shop.spacex.com'>SHOP</Link>
        </li>
        <div className={styles.hamburger}>
          <Hamburger size={16} direction='left' label='Show menu' />
        </div>
      </ul>

      <style jsx>{`
        .header {
          transition: opacity 0.3s ease;
        }
        .hide {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        .show {
          opacity: 1;
        }
        .headerBg {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #000;
          width: 100%;
          height: 100%;
          transform: translateY(-100%);
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
        }
        .isOpen {
          transform: none;
          transition-delay: 0s;
        }
      `}</style>
    </header>
  )
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection) // clean up
    }
  }, [scrollDirection])

  return scrollDirection
}
