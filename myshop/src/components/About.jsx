import { CalendarCheck, Handshake, ShieldCheck, Target } from 'lucide-react'
import { useLang } from '../i18n/lang'

const icons = [Target, ShieldCheck, CalendarCheck, Handshake]

export default function About() {
  const { t } = useLang()
  const cards = t('about.cards')
  const highlights = t('about.highlights')

  return (
    <section id="about" className="about">
      <h2>{t('about.title')}</h2>
      <p className="section-desc">{t('about.desc')}</p>
      <div className="about-grid">
        {cards.map((card, i) => {
          const Icon = icons[i] ?? Target
          return (
            <div className="about-card" key={card.title}>
              <span className="about-icon"><Icon size={26} /></span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          )
        })}
      </div>
      <div className="about-stats">
        {highlights.map((h) => (
          <div className="about-stat" key={h.label}>
            <strong>{h.value}</strong>
            <span>{h.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}