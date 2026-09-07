import { useMemo, useState } from 'react'
import { Bath, BedDouble, Heart, MapPin, Search, Square } from 'lucide-react'
import { useLang } from '../i18n/lang'
import PropertyModal from './PropertyModal'

const categories = [
  {
    key: 'residential',
    items: [
      {
        id: 'studio',
        price: 'RWF 650,000/mo',
        img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
        details: {
          bedrooms: 0,
          bathrooms: 1,
          sqft: 350,
          rooms: ['Open-plan living & bedroom', 'Kitchenette', 'Bathroom', 'Balcony'],
          amenities: ['High-speed WiFi', 'Air conditioning', 'Washer/Dryer', 'Elevator access'],
          includes: ['All utilities', 'Basic furniture', 'Kitchen appliances', 'Linens'],
        },
      },
      {
        id: 'familyHome',
        price: 'RWF 1,300,000/mo',
        img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
        details: {
          bedrooms: 3,
          bathrooms: 2,
          sqft: 1400,
          rooms: ['Master bedroom (en-suite)', '2 guest bedrooms', 'Living room', 'Dining room', 'Kitchen', 'Garden'],
          amenities: ['Private garage', 'Central heating', 'Lawn & garden', 'Security system', 'Storage shed'],
          includes: ['Refrigerator', 'Washing machine', 'Stove/Oven', 'Water tank'],
        },
      },
      {
        id: 'cabin',
        price: 'RWF 160,000/night',
        img: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80',
        details: {
          bedrooms: 2,
          bathrooms: 1,
          sqft: 800,
          sleeps: 6,
          rooms: ['Master bedroom', 'Bunk room', 'Living room with fireplace', 'Full kitchen', 'Deck'],
          amenities: ['Wood-burning fireplace', 'Mountain view deck', 'BBQ grill', 'Hot tub', 'Parking'],
          includes: ['Firewood', 'Basic cookware', 'Towels & bedding', 'Coffee & tea'],
        },
      },
      {
        id: 'villa',
        price: 'RWF 380,000/night',
        img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
        details: {
          bedrooms: 4,
          bathrooms: 3,
          sqft: 2200,
          sleeps: 8,
          rooms: ['4 bedrooms (2 en-suite)', 'Grand living room', 'Modern kitchen', 'Dining terrace', 'Private pool'],
          amenities: ['Private pool', 'Direct beach access', 'Outdoor shower', 'Satellite TV', 'WiFi', 'Parking for 4'],
          includes: ['Pool maintenance', 'Linens & towels', 'Welcome basket', 'Airport transfer', 'Concierge service'],
        },
      },
    ],
  },
  {
    key: 'business',
    items: [
      {
        id: 'office',
        price: 'RWF 1,900,000/mo',
        img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
        details: {
          sqft: 600,
          rooms: ['Open workspace', 'Private meeting room', 'Kitchenette', 'Reception area'],
          amenities: ['High-speed fiber internet', 'Conference phone', 'Whiteboard', 'Security access', 'Cleaning service'],
          includes: ['All desks & chairs', 'Printer/Scanner', 'Coffee & water', 'Utilities'],
        },
      },
      {
        id: 'storefront',
        price: 'RWF 2,600,000/mo',
        img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
        details: {
          sqft: 1200,
          rooms: ['Main retail floor', 'Storage room', 'Staff break room', 'Customer restroom'],
          amenities: ['Street-level entrance', 'Display windows', 'Security shutters', 'HVAC', 'Signage allowed'],
          includes: ['Basic lighting', 'Flooring', 'Storefront glass'],
        },
      },
      {
        id: 'coworking',
        price: 'RWF 220,000/mo',
        img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
        details: {
          sqft: 0,
          sleeps: 0,
          rooms: ['Open co-working hall', 'Phone booths', 'Lounge area', 'Print station'],
          amenities: ['Gigabit WiFi', 'Free coffee', '24/7 access', 'Mail handling', 'Networking events'],
          includes: ['Desk & ergonomic chair', 'Locker', 'Meeting room credits (4hr/mo)'],
        },
      },
      {
        id: 'warehouse',
        price: 'RWF 1,100,000/mo',
        img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
        details: {
          sqft: 2000,
          rooms: ['Main storage area', 'Office nook', 'Loading dock', 'Security room'],
          amenities: ['24/7 CCTV', 'Loading dock', 'Pallet racks', 'Climate control', 'Truck access'],
          includes: ['Basic shelving', 'Security monitoring', 'Waste disposal'],
        },
      },
    ],
  },
]

export default function Properties() {
  const { t } = useLang()
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [favorites, setFavorites] = useState(() => new Set())

  const filters = [{ key: 'all', label: t('props.all') }, ...categories.map((c) => ({ key: c.key, label: t(`props.${c.key}`) }))]

  const allItems = useMemo(
    () => categories.flatMap((cat) => cat.items.map((item) => ({ categoryKey: cat.key, ...item }))),
    [],
  )

  const results = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCat = activeCat === 'all' || item.categoryKey === activeCat
      const data = t(`propData.${item.id}`)
      const q = query.toLowerCase()
      const matchesQuery =
        data?.name.toLowerCase().includes(q) ||
        data?.desc.toLowerCase().includes(q) ||
        data?.loc.toLowerCase().includes(q)
      return matchesCat && matchesQuery
    })
  }, [query, activeCat, allItems, t])

  const toggleFav = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const openModal = (item) => {
    const cat = categories.find((c) => c.key === item.categoryKey)
    setSelected({ item, cat })
  }
  const closeModal = () => setSelected(null)

  return (
    <section id="properties" className="properties">
      <h2>{t('props.title')}</h2>
      <p className="section-desc">{t('props.desc')}</p>

      <div className="prop-toolbar">
        <div className="prop-search">
          <Search size={18} />
          <input
            type="text"
            placeholder={t('props.search')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="prop-tabs">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`prop-tab${f.key === activeCat ? ' active' : ''}`}
              onClick={() => setActiveCat(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="prop-empty">{t('props.empty')}</p>
      ) : (
        <div className="prop-grid">
          {results.map((item) => {
            const data = t(`propData.${item.id}`)
            const { details } = item
            const badgeKey = data?.badge
            return (
              <div key={item.id} className="prop-card" onClick={() => openModal(item)}>
                <div className="prop-media" style={{ backgroundImage: `linear-gradient(180deg, rgba(184,107,29,.25), rgba(45,52,54,.35)), url(${item.img})` }}>
                  {badgeKey && <span className="prop-badge">{t(`props.badges.${badgeKey}`)}</span>}
                  <button
                    className={`prop-fav${favorites.has(item.id) ? ' active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleFav(item.id) }}
                    aria-label="Toggle favorite"
                  >
                    <Heart size={18} fill={favorites.has(item.id) ? 'currentColor' : 'none'} />
                  </button>
                  <span className="prop-price">{item.price}</span>
                </div>
                <div className="prop-body">
                  <h4>{data?.name}</h4>
                  <span className="prop-loc"><MapPin size={14} /> {data?.loc}</span>
                  <p>{data?.desc}</p>
                  <div className="prop-specs">
                    {details.bedrooms != null && (
                      <span className="prop-spec"><BedDouble size={15} /> <strong>{details.bedrooms}</strong> {details.bedrooms > 1 ? t('props.beds') : t('props.bed')}</span>
                    )}
                    {details.bathrooms != null && (
                      <span className="prop-spec"><Bath size={15} /> <strong>{details.bathrooms}</strong> {t('props.bath')}</span>
                    )}
                    {details.sqft > 0 && (
                      <span className="prop-spec"><Square size={15} /> <strong>{details.sqft.toLocaleString()}</strong> {t('props.sqft')}</span>
                    )}
                  </div>
                  <button className="btn-add" onClick={(e) => { e.stopPropagation(); openModal(item) }}>
                    {t('props.viewDetails')}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <PropertyModal property={selected?.item} category={selected?.cat} onClose={closeModal} />
    </section>
  )
}