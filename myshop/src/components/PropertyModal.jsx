export default function PropertyModal({ property, category, onClose }) {
  if (!property) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <span className="modal-icon">{category?.icon}</span>
          <div>
            <h3>{property.name}</h3>
            <span className="modal-category">{category?.type}</span>
          </div>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{property.desc}</p>

          {property.details && (
            <>
              <div className="modal-details">
                {property.details.bedrooms != null && (
                  <div className="detail-chip">
                    <strong>{property.details.bedrooms}</strong> Bed{property.details.bedrooms > 1 ? 's' : ''}
                  </div>
                )}
                {property.details.bathrooms != null && (
                  <div className="detail-chip">
                    <strong>{property.details.bathrooms}</strong> Bath{property.details.bathrooms > 1 ? 's' : ''}
                  </div>
                )}
                {property.details.sqft && (
                  <div className="detail-chip">
                    <strong>{property.details.sqft}</strong> sq ft
                  </div>
                )}
                {property.details.sleeps && (
                  <div className="detail-chip">
                    <strong>Sleeps {property.details.sleeps}</strong>
                  </div>
                )}
              </div>

              {property.details.rooms && property.details.rooms.length > 0 && (
                <div className="modal-section">
                  <h4>Rooms</h4>
                  <ul className="modal-list">
                    {property.details.rooms.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              )}

              {property.details.amenities && property.details.amenities.length > 0 && (
                <div className="modal-section">
                  <h4>Amenities</h4>
                  <ul className="modal-list">
                    {property.details.amenities.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              )}

              {property.details.includes && property.details.includes.length > 0 && (
                <div className="modal-section">
                  <h4>What's Included</h4>
                  <ul className="modal-list">
                    {property.details.includes.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        <div className="modal-footer">
          <span className="modal-price">{property.price}</span>
          <div className="modal-actions">
            <a href={`tel:+250783078487`} className="btn-call">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01z"/></svg>
              Call
            </a>
            <a href={`https://wa.me/250783078487?text=Hi%20I%27m%20interested%20in%20${encodeURIComponent(property.name)}`}
              target="_blank" rel="noopener" className="btn-wa">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.523 3.674 1.5 5.2L2.1 22l4.9-1.4A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.86 0-3.607-.64-5-1.8l-.8-.6-3 .8.8-2.9-.5-.8A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
