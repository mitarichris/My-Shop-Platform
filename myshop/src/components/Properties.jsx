import { useState } from 'react'
import PropertyModal from './PropertyModal'

const categories = [
  {
    type: 'Residential & Lodging',
    icon: '🏡',
    items: [
      {
        name: 'Cozy Studio Apartment',
        desc: 'Fully furnished, prime location, monthly stays.',
        price: '$600/mo',
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
        name: '3-Bedroom Family Home',
        desc: 'Spacious garden, garage, quiet neighborhood.',
        price: '$1,200/mo',
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
        name: 'Mountain View Cabin',
        desc: 'Weekend getaway, fireplace, sleeps 6.',
        price: '$150/night',
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
        name: 'Beachfront Villa',
        desc: 'Private pool, ocean view, 4 bedrooms.',
        price: '$350/night',
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
    type: 'Business & Commercial',
    icon: '🏢',
    items: [
      {
        name: 'Downtown Office Space',
        desc: 'Fully equipped, 10 desks, meeting room.',
        price: '$1,800/mo',
        details: {
          sqft: 600,
          rooms: ['Open workspace', 'Private meeting room', 'Kitchenette', 'Reception area'],
          amenities: ['High-speed fiber internet', 'Conference phone', 'Whiteboard', 'Security access', 'Cleaning service'],
          includes: ['All desks & chairs', 'Printer/Scanner', 'Coffee & water', 'Utilities'],
        },
      },
      {
        name: 'Retail Storefront',
        desc: 'High foot-traffic area, 1,200 sq ft.',
        price: '$2,500/mo',
        details: {
          sqft: 1200,
          rooms: ['Main retail floor', 'Storage room', 'Staff break room', 'Customer restroom'],
          amenities: ['Street-level entrance', 'Display windows', 'Security shutters', 'HVAC', 'Signage allowed'],
          includes: ['Basic lighting', 'Flooring', 'Storefront glass'],
        },
      },
      {
        name: 'Co-Working Desk',
        desc: 'Hot desk, high-speed WiFi, 24/7 access.',
        price: '$200/mo',
        details: {
          sqft: 0,
          rooms: ['Open co-working hall', 'Phone booths', 'Lounge area', 'Print station'],
          amenities: ['Gigabit WiFi', 'Free coffee', '24/7 access', 'Mail handling', 'Networking events'],
          includes: ['Desk & ergonomic chair', 'Locker', 'Meeting room credits (4hr/mo)'],
        },
      },
      {
        name: 'Warehouse Storage',
        desc: '2,000 sq ft, loading dock, 24hr security.',
        price: '$1,000/mo',
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
  const [selected, setSelected] = useState(null)

  const openModal = (item, cat) => setSelected({ item, cat })
  const closeModal = () => setSelected(null)

  return (
    <section id="properties" className="properties">
      <h2>Available Rentals</h2>
      <p className="section-desc">Find the perfect space for living or business</p>
      {categories.map((cat) => (
        <div key={cat.type} className="prop-category">
          <h3 className="cat-title"><span className="cat-icon">{cat.icon}</span> {cat.type}</h3>
          <div className="prop-grid">
            {cat.items.map((item) => (
              <div key={item.name} className="prop-card" onClick={() => openModal(item, cat)}>
                <div className="prop-img">{cat.icon}</div>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <span className="prop-price">{item.price}</span>
                <button className="btn-add" onClick={(e) => { e.stopPropagation(); openModal(item, cat) }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <PropertyModal
        property={selected?.item}
        category={selected?.cat}
        onClose={closeModal}
      />
    </section>
  )
}
