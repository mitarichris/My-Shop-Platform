import { useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#properties', label: 'Properties' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">MyRent</a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
