const phone = '+250783078407'

export default function Contact() {
  return (h
    <section id="contact" className="contact">
      <div className="contact-card">
        <div className="contact-ring" />
        <h2>Get In Touch</h2>
        <p className="contact-sub">We're here to help you find the perfect space</p>

        <div className="contact-number-wrap">
          <span className="contact-number">{phone}</span>
          <span className="contact-label">Call or WhatsApp anytime</span>
        </div>

        <div className="contact-btns">
          <a href={`tel:${phone}`} className="contact-btn call">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01z"/></svg>
            Call Now
          </a>
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener" className="contact-btn whatsapp">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.523 3.674 1.5 5.2L2.1 22l4.9-1.4A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.86 0-3.607-.64-5-1.8l-.8-.6-3 .8.8-2.9-.5-.8A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
