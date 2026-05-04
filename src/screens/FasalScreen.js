import React, { useState } from 'react';
import { SectionTitle, ScrollChips, Badge } from '../components/UI';

const CROPS = [
  { id: 'gehu', label: '🌾 Gehu' },
  { id: 'dhan', label: '🌾 Dhan' },
  { id: 'makai', label: '🌽 Makai' },
  { id: 'sarso', label: '🟡 Sarso' },
  { id: 'chana', label: '🟤 Chana' },
  { id: 'aalu', label: '🥔 Aalu' },
  { id: 'pyaz', label: '🧅 Pyaz' },
  { id: 'tamatar', label: '🍅 Tamatar' },
];

const CROP_INFO = {
  gehu: {
    name: 'Gehu (Wheat)', season: 'Rabi | Oct–Nov buaai | Mar–Apr katai',
    tags: ['HD-2967 Bij', 'DAP + Urea', '5-6 Sinchai'],
    schedule: [
      { month: 'Oct\nWk1', task: 'Bij Upchar', desc: 'Thiram 2.5g/kg bij + Vitavax', badge: 'Zaroori', color: 'green' },
      { month: 'Oct\nWk2', task: 'Buaai ke samay DAP', desc: '50 kg/acre — beej ke neeche daalein', badge: 'Zaroori', color: 'green' },
      { month: 'Nov\nWk3', task: 'Pehli Sinchai + Urea', desc: '25 kg Urea/acre — CRI stage', badge: 'Timing', color: 'amber' },
      { month: 'Dec\nWk2', task: 'Doosri Urea + Zinc', desc: '25 kg Urea + 5 kg ZnSO4/acre', badge: 'Timing', color: 'amber' },
      { month: 'Jan\nWk1', task: 'Teesri Sinchai', desc: 'Jointing stage — critical', badge: 'Optional', color: 'blue' },
      { month: 'Mar\nWk3', task: 'Katai', desc: 'Dane sone jaise hone par kaatein', badge: 'Taiyaar', color: 'green' },
    ],
  },
  dhan: {
    name: 'Dhan (Rice)', season: 'Kharif | Jun–Jul buaai | Oct–Nov katai',
    tags: ['Pusa Basmati 1121', 'Urea + Potash', '15-20 Sinchai'],
    schedule: [
      { month: 'Jun\nWk1', task: 'Nursery Taiyar', desc: 'Beej 25kg/acre nursery mein', badge: 'Zaroori', color: 'green' },
      { month: 'Jul\nWk1', task: 'Ropai', desc: 'Paudhon ki ropai 2-3 inches gehraai', badge: 'Zaroori', color: 'green' },
      { month: 'Jul\nWk3', task: 'DAP + Urea', desc: '50 kg DAP + 25 kg Urea/acre', badge: 'Timing', color: 'amber' },
      { month: 'Aug\nWk2', task: 'Khad ki doosri matra', desc: '25 kg Urea + 15 kg Potash', badge: 'Timing', color: 'amber' },
      { month: 'Oct\nWk2', task: 'Katai', desc: 'Dane pakne par kaatein', badge: 'Taiyaar', color: 'green' },
    ],
  },
  sarso: {
    name: 'Sarso (Mustard)', season: 'Rabi | Oct buaai | Feb–Mar katai',
    tags: ['Pusa Bold Bij', 'SSP + Boron', '2-3 Sinchai'],
    schedule: [
      { month: 'Oct\nWk1', task: 'Khet Ki Taiyari', desc: 'Mitti mein Sulphur 10kg/acre milao', badge: 'Zaroori', color: 'green' },
      { month: 'Oct\nWk2', task: 'Buaai', desc: 'Bij 1.5-2 kg/acre, 45cm antar', badge: 'Zaroori', color: 'green' },
      { month: 'Nov\nWk1', task: 'Pehli Sinchai + Urea', desc: '25 kg Urea/acre — CRI stage', badge: 'Timing', color: 'amber' },
      { month: 'Jan\nWk1', task: 'Doosri Sinchai', desc: 'Phool aane par zaroor karein', badge: 'Timing', color: 'amber' },
      { month: 'Feb\nWk3', task: 'Katai', desc: 'Phaliyan peeli hone par kaatein', badge: 'Taiyaar', color: 'green' },
    ],
  },
};

const DEFAULT_SCHEDULE = {
  name: 'Yeh Fasal', season: 'Jankari uplabdh nahi',
  tags: ['Sthaaneeya salahkar se poochhen'],
  schedule: [
    { month: 'Chap\nKarein', task: 'Salahkar se mile', desc: 'Sthaaneeya krishi vibhag se jaankari lein', badge: 'Tip', color: 'blue' },
  ],
};

export default function FasalScreen() {
  const [activeCrop, setActiveCrop] = useState('gehu');
  const info = CROP_INFO[activeCrop] || DEFAULT_SCHEDULE;

  return (
    <div style={{ padding: '12px 14px' }}>

      <ScrollChips
        chips={CROPS}
        active={activeCrop}
        onChange={setActiveCrop}
      />

      {/* Crop Info Banner */}
      <div style={{
        background: '#E8F5E9',
        borderRadius: 13,
        padding: 13,
        marginBottom: 12,
        border: '0.5px solid #A5D6A7',
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#1B5E20', marginBottom: 4 }}>
          {CROPS.find(c => c.id === activeCrop)?.label || '🌾'} — Poori Jaankari
        </div>
        <div style={{ fontSize: 11, color: '#2E7D32', marginBottom: 8 }}>{info.season}</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {info.tags.map((tag, i) => (
            <span key={i} style={{
              background: '#fff',
              borderRadius: 8,
              padding: '3px 9px',
              fontSize: 10,
              color: '#1B5E20',
              border: '0.5px solid #A5D6A7',
              fontWeight: 500,
            }}>
              ✓ {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <SectionTitle>Khad & Prabandhan Schedule</SectionTitle>
      {info.schedule.map((item, i) => (
        <div key={i} style={{
          background: '#fff',
          borderRadius: 11,
          border: '0.5px solid rgba(0,0,0,0.08)',
          padding: '10px 12px',
          marginBottom: 7,
          display: 'flex',
          alignItems: 'center',
          gap: 11,
        }}>
          <div style={{
            width: 38, height: 38,
            background: '#E8F5E9',
            borderRadius: 9,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontWeight: 600, color: '#1B5E20',
            textAlign: 'center',
            lineHeight: 1.3,
            flexShrink: 0,
            whiteSpace: 'pre',
          }}>
            {item.month}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a' }}>{item.task}</div>
            <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{item.desc}</div>
          </div>
          <Badge color={item.color}>{item.badge}</Badge>
        </div>
      ))}

      {/* Soil Test Tip */}
      <div style={{ height: 8 }} />
      <div style={{
        background: '#E3F2FD',
        borderRadius: 11,
        padding: '11px 13px',
        border: '0.5px solid #90CAF9',
        marginBottom: 16,
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#0D47A1', marginBottom: 3 }}>🧪 Mitti Janch Karein</div>
        <div style={{ fontSize: 11, color: '#1565C0', lineHeight: 1.5 }}>
          Khad dalne se pehle mitti ki janch zaroor karein. Krishi vibhag ki lab mein sirf ₹50 mein ho jaati hai.
          pH 6.5–7.5 best hota hai fasal ke liye.
        </div>
      </div>

    </div>
  );
}
