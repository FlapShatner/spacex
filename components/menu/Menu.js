import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import Link from 'next/link'

export default function Menu() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className={`overlay ${isOpen ? 'darken' : 'lighten'}`}></div>
      <div className='hamburger'>
        <Hamburger size={16} direction='left' label='Show menu' toggle={setOpen} toggled={isOpen} />
      </div>
      <Drawer isOpen={isOpen} />
      <style jsx>{`
        .overlay {
          position: absolute;
          background-color: #000;
          z-index: 98;
        }
        .darken {
          inset: 0;
          opacity: 0.5;
          transition: opacity 1s ease-in-out;
        }
        .lighten {
          inset: 50%;
          opacity: 0;
          transition: opacity 1s ease, inset 0s 1s;
        }
        .hamburger {
          position: fixed;
          top: 18px;
          right: 38px;
          z-index: 100;
        }
      `}</style>
    </>
  )
}

function Drawer({ isOpen }) {
  const listArr = [
    { href: '/mission', name: 'Mission' },
    { href: '/launches', name: 'Launches' },
    { href: '/careers', name: 'Careers' },
    { href: '/updates', name: 'Updates' },
  ]

  return (
    <div className='drawer'>
      <ul className={`list ${!isOpen && 'hidden'} `}>
        {listArr.map((item, i) => (
          <li key={i} className={`num${i}`}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li className='shop'>
          <a href='https://shop.spacex.com'>Shop</a>
        </li>
      </ul>
      <style jsx>{`
        .drawer {
          position: fixed;
          right: ${isOpen ? '0' : '-350px'};
          background-color: #000;
          height: 100vh;
          width: 350px;
          padding-inline: 52px;
          z-index: 99;
          transition: right 1.2s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
        }
        ul {
          margin-top: 75px;
        }
        .list {
          opacity: 1;
          /* transition: opacity 100ms ease-in; */
        }
        .hidden {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        li {
          text-align: end;
          padding-block: 0.5rem;
          opacity: inherit;
          border-bottom: 1px solid hsl(0 0% 30% / 0.5);
          transform: ${isOpen ? 'translateY(0px)' : 'translateY(4px)'};
          transition: 1s ease;
        }

        .num0 {
          transition: 0.3s ease ${isOpen ? '0.4s' : '0'};
        }
        .num1 {
          transition: 0.3s ease ${isOpen ? '0.5s' : '0'};
        }
        .num2 {
          transition: 0.3s ease ${isOpen ? '0.6s' : '0'};
        }
        .num3 {
          transition: 0.3s ease ${isOpen ? '0.7s' : '0'};
        }
        .shop {
          transition: 0.3s ease ${isOpen ? '0.8s' : '0'};
        }
      `}</style>
    </div>
  )
}
