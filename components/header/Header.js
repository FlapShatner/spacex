import { useEffect, useState } from 'react'

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
    <div className='container'>
      <header className={`mainHeader ${scrollPosition > 199 && direction === 'down' ? 'hide' : 'show'} `}>
        <Link href='/'>
          <div className='logo'>
            <Logo />
          </div>
        </Link>
        <nav className='navBar'>
          <ul className='navLeft'>
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
          <ul className='navRight'>
            <li>
              <Link href='shop.spacex.com'>SHOP</Link>
            </li>
            <div className='hamburger'>
              <Hamburger size={16} direction='left' label='Show menu' />
            </div>
          </ul>
        </nav>
        <style jsx>{`
          .logo {
            position: absolute;
            width: 200px;
            height: 27px;
            left: 25px;
            top: 0.75rem;
            fill: #fff;
          }
          .container {
            position: fixed;
          }

          .mainHeader ul {
            display: flex;
            align-items: flex-end;
          }

          .mainHeader li {
            font-size: var(--fs-small);
            font-weight: 400;
            margin-inline: 12px;
            position: relative;
          }

          .navBar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: 290px;
            margin-block: 2rem;
          }

          .navRight {
            position: relative;
            width: 8rem;
          }

          .hamburger {
            position: absolute;
            left: 4rem;
            bottom: -14px;
          }

          /* Menu Items Animation */
          .navBar a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #fff;
            transform: scaleX(0);
            transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
            transform-origin: right center;
          }

          .navBar a:hover::after {
            transform: scaleX(1);
            transform-origin: left center;
            transition-duration: 0.4s;
          }
          .mainHeader {
            display: flex;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            position: fixed;
            transition: opacity 0.3s ease;
          }
          .hide {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .show {
            opacity: 1;
          }
          .mainHeader::before {
            content: '';
            position: absolute;
            top: -85px;
            left: 0;
            background-color: #000;
            width: 100%;
            height: 100%;
            top: ${showBg ? 0 : '-85px'};
            transition: top 0.4s ease-in-out;
          }
        `}</style>
      </header>
    </div>
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
