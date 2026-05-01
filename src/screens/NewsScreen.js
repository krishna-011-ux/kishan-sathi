import React, { useState } from 'react';
import { TabBar } from '../components/UI';

const ALL_NEWS = [
  { cat: 'yojana', icon: '🌾', title: 'Gehu MSP mein ₹150 ki badhottari — kisan khush', meta: 'Aaj · Sarkar', time: '3 min', tag: 'Yojana', tagColor: 'green' },
  { cat: 'mausam', icon: '🌧️', title: 'UP mein 5 dino mein mansoon jaldi aane ki sambhavna', meta: 'Kal · IMD Alert', time: '2 min', tag: 'Mausam', tagColor: 'blue' },
  { cat: 'bimari', icon: '💊', title: 'Pila rust se gehu ki fasal ko bachane ke upay — experts ki salah', meta: '2 din pehle · Bimari', time: '4 min', tag: 'Bimari', tagColor: 'red' },
  { cat: 'yojana', icon: '📋', title: 'PM Kisan 19vi kist jaldi — is baar ₹2,000 aayenge', meta: '3 din pehle · Yojana', time: '2 min', tag: 'Yojana', tagColor: 'green' },
  { cat: 'mandi', icon: '💰', title: 'Sarso ke bhav mein giraavat — kab tak rukna chahiye?', meta: '4 din pehle · Mandi', time: '3 min', tag: 'Mandi', tagColor: 'amber' },
  { cat: 'mausam', icon: '☀️', title: 'Agle hafte garmi mein izaafa — khet ki suraksha karo', meta: '5 din pehle · IMD', time: '2 min', tag: 'Mausam', tagColor: 'blue' },
  { cat: 'bimari', icon: '🦟', title: 'Dhan mein tunndu bimari aayi — dhyan rakhein', meta: '6 din pehle · ICAR', time: '3 min', tag: 'Bimari', tagColor: 'red' },
  { cat: 'mandi', icon: '📈', title: 'Chana ke bhav mein uchar — is samay becho', meta: '1 hafte pehle · Mandi', time: '2 min', tag: 'Mandi', tagColor: 'amber' },
];

const TAG_COLORS = {
  green: { bg: '#E8F5E9', text: '#1B5E20' },
  blue: { bg: '#E3F2FD', text: '#0D47A1' },
  red: { bg: '#FFEBEE', text: '#B71C1C' },
  amber: { bg: '#FFF3E0', text: '#E65100' },
};

export default function NewsScreen() {
  const [tab, setTab] = useState('all');
  const filtered = tab === 'all' ? ALL_NEWS : ALL_NEWS.filter(n => n.cat === tab);

  return (
    <div style={{ padding: '12px 14px' }}>

      <TabBar
        tabs={[
          { id: 'all', label: 'Sabhi' },
          { id: 'yojana', label: 'Yojana' },
          { id: 'mausam', label: 'Mausam' },
          { id: 'mandi', label: 'Mandi' },
        ]}
        active={tab}
        onChange={setTab}
      />

      {filtered.map((item, i) => {
        const tc = TAG_COLORS[item.tagColor] || TAG_COLORS.green;
        return (
          <div key={i} style={{
            background: '#fff',
            borderRadius: 12,
            border: '0.5px solid rgba(0,0,0,0.08)',
            padding: '12px 13px',
            marginBottom: 8,
            display: 'flex',
            gap: 11,
            cursor: 'pointer',
          }}>
            <div style={{
              width: 52, height: 52,
              background: '#E8F5E9',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4, marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10, color: '#aaa' }}>{item.meta} · {item.time} padhne mein</span>
              </div>
            </div>
            <span style={{
              fontSize: 9, fontWeight: 600,
              padding: '3px 7px',
              borderRadius: 8,
              background: tc.bg, color: tc.text,
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
            }}>
              {item.tag}
            </span>
          </div>
        );
      })}

      <div style={{ height: 16 }} />
    </div>
  );
}
