import { useEffect, useState } from 'react'
import { ArrowRight, KeyRound, MapPin, Star, Users } from 'lucide-react'
import { useLang } from '../i18n/lang'

const heroImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80',
]

export default function Hero() {
  const { t } = useLang()
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((cur) => (cur + 1) % heroImages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  const stats = [
    { icon: KeyRound, text: t('hero.statListings'), value: '120+' },
    { icon: MapPin, text: t('hero.statCities'), value: '32' },
    { icon: Users, text: t('hero.statTenants'), value: '2k+' },
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <Star size={15} fill="currentColor" /> {t('hero.trust')}
          </span>
          <h1>
            {t('hero.titleA')} <span className="hero-highlight">{t('hero.titleB')}</span>
          </h1>
          <p className="hero-sub">{t('hero.sub')}</p>
          <div className="hero-btns">
            <a href="#properties" className="btn-primary">
              {t('hero.browse')} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">{t('hero.talk')}</a>
          </div>
          <div className="hero-stats">
            {stats.map(({ icon: Icon, value, text }) => (
              <div className="hero-stat" key={text}>
                <span className="hero-stat-icon"><Icon size={18} /></span>
                <div>
                  <strong>{value}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-frame">
            {heroImages.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={t('hero.titleB')}
                className={`hero-slide${i === slide ? ' active' : ''}`}
              />
            ))}
            <div className="hero-img-shadow" />
            <div className="hero-dots">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === slide ? ' active' : ''}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="float-card float-card-top">
            <div className="float-icon"><Star size={18} fill="currentColor" /></div>
            <div>
              <strong>{t('hero.rating')}</strong>
              <span>{t('hero.ratingLabel')}</span>
            </div>
          </div>
          <div className="float-card float-card-bottom">
            <div className="float-icon"><KeyRound size={18} /></div>
            <div>
              <strong>{t('hero.rentNow')}</strong>
              <span>{t('hero.rentNowSub')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}