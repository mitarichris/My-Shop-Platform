import { useEffect, useState } from 'react'
import { ChevronDown, Globe, Home, Menu, Moon, Sun } from 'lucide-react'
import { useLang } from '../i18n/lang'
import { LANGUAGES } from '../i18n/translations'

const links = [
  { href: '#hero', key: 'home' },
  { href: '#properties', key: 'properties' },
  { href: '#about', key: 'about' },
  { href: '#contact', key: 'contact' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const selectLang = (key) => {
    setLang(key)
    setLangOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-icon"><Home size={22} strokeWidth={2.5} /></span>
          MyRent
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{t(`nav.${l.key}`)}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <div className="lang-wrap">
            <button
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <Globe size={17} />
              <span>{lang.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="lang-menu">
                {Object.entries(LANGUAGES).map(([key, l]) => (
                  <button
                    key={key}
                    className={`lang-option${key === lang ? ' active' : ''}`}
                    onClick={() => selectLang(key)}
                  >
                    <strong>{l.native}</strong>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
            {langOpen && <div className="lang-backdrop" onClick={() => setLangOpen(false)} />}
          </div>
          <button className="nav-theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="nav-cta">{t('nav.bookViewing')}</a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}