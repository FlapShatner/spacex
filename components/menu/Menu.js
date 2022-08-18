import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import Link from 'next/link'

export default function Menu() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className='overlay'></div>
      <div className='hamburger'>
        <Hamburger size={16} direction='left' label='Show menu' toggle={setOpen} toggled={isOpen} />
      </div>
      <Drawer isOpen={isOpen} />
      <style jsx>{`
        .overlay {
          position: absolute;
          inset: ${isOpen ? '0' : '50%'};
          background-color: #000;
          opacity: ${isOpen ? '.5' : '0'};
          z-index: 98;
          transition: opacity 1s;
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
  return (
    <div className='drawer'>
      <ul>
        <li>
          <Link href='/mission'>Mission</Link>
        </li>
        <li>
          <Link href='/launches'>Launches</Link>
        </li>
        <li>
          <Link href='/careers'>Careers</Link>
        </li>
        <li>
          <Link href='/updates'>Updates</Link>
        </li>
        <li>
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
          transition: right 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        ul {
          margin-top: 75px;
        }
        li {
          text-align: end;
          padding-block: 0.5rem;
          border-bottom: 1px solid hsl(0 0% 30% / 0.5);
        }
      `}</style>
    </div>
  )
}
