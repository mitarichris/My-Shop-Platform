import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useLang } from '../i18n/lang'

const phone = '+250783078407'
const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <div className="contact-ring" />
        <span className="contact-icon"><Phone size={26} /></span>
        <h2>{t('contact.title')}</h2>
        <p className="contact-sub">{t('contact.sub')}</p>

        <div className="contact-number-wrap">
          <span className="contact-number">{phone}</span>
          <span className="contact-label">{t('contact.callOrWa')}</span>
        </div>

        <div className="contact-btns">
          <a href={`tel:${phone}`} className="contact-btn call">
            <Phone size={18} />
            {t('contact.call')}
          </a>
          <a href={waLink} target="_blank" rel="noopener" className="contact-btn whatsapp">
            <MessageCircle size={18} />
            {t('contact.whatsapp')}
          </a>
        </div>

        <div className="contact-extra">
          <span><MapPin size={15} /> {t('contact.location')}</span>
          <span><Clock size={15} /> {t('contact.hours')}</span>
          <span><Mail size={15} /> janmurenzi1@gmail.com</span>
        </div>
      </div>
    </section>
  )
}