import { Bath, BedDouble, MapPin, MessageCircle, Phone, Square, Users } from 'lucide-react'
import { useLang } from '../i18n/lang'

const phone = '+250783078407'

export default function PropertyModal({ property, category, onClose }) {
  const { t } = useLang()
  if (!property) return null

  const data = t(`propData.${property.id}`)
  const details = property.details
  const categoryLabel = category ? t(`props.${category.key}`) : null
  const badgeKey = data?.badge

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        {property.img && (
          <div className="modal-cover" style={{ backgroundImage: `linear-gradient(180deg, rgba(184,107,29,.15), rgba(45,52,54,.45)), url(${property.img})` }}>
            <span className="prop-badge">{badgeKey ? t(`props.badges.${badgeKey}`) : t('props.badges.listed')}</span>
          </div>
        )}
        <div className="modal-header">
          <div>
            <h3>{data?.name}</h3>
            <span className="modal-category">
              {categoryLabel}
              {data?.loc && <> · <MapPin size={13} style={{ verticalAlign: '-2px' }} /> {data.loc}</>}
            </span>
          </div>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{data?.desc}</p>

          {details && (
            <>
              <div className="modal-details">
                {details.bedrooms != null && (
                  <div className="detail-chip"><BedDouble size={15} /> <strong>{details.bedrooms}</strong> {details.bedrooms > 1 ? t('props.beds') : t('props.bed')}</div>
                )}
                {details.bathrooms != null && (
                  <div className="detail-chip"><Bath size={15} /> <strong>{details.bathrooms}</strong> {t('props.bath')}</div>
                )}
                {details.sqft > 0 && (
                  <div className="detail-chip"><Square size={15} /> <strong>{details.sqft.toLocaleString()}</strong> {t('props.sqft')}</div>
                )}
                {details.sleeps > 0 && (
                  <div className="detail-chip"><Users size={15} /> <strong>{t('modal.sleep')} {details.sleeps}</strong></div>
                )}
              </div>

              {data?.rooms && data.rooms.length > 0 && (
                <div className="modal-section">
                  <h4>{t('modal.rooms')}</h4>
                  <ul className="modal-list">{data.rooms.map((r) => <li key={r}>{r}</li>)}</ul>
                </div>
              )}

              {data?.amenities && data.amenities.length > 0 && (
                <div className="modal-section">
                  <h4>{t('modal.amenities')}</h4>
                  <ul className="modal-list">{data.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
                </div>
              )}

              {data?.includes && data.includes.length > 0 && (
                <div className="modal-section">
                  <h4>{t('modal.included')}</h4>
                  <ul className="modal-list">{data.includes.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              )}
            </>
          )}
        </div>
        <div className="modal-footer">
          <span className="modal-price">{property.price}</span>
          <div className="modal-actions">
            <a href={`tel:${phone}`} className="btn-call">
              <Phone size={16} />
              {t('modal.call')}
            </a>
            <a
              href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in ${data?.name}`)}`}
              target="_blank" rel="noopener" className="btn-wa"
            >
              <MessageCircle size={16} />
              {t('modal.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}