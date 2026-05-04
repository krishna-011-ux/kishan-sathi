import React from 'react';
import { Card, SectionTitle, AlertCard } from '../components/UI';

const MicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" fill="none" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const QUICK_ITEMS = [
  { icon: '🌤️', label: 'Mausam\n7 Din' },
  { icon: '🔬', label: 'Fasal\nBimari' },
  { icon: '🌾', label: 'Khad\n& Bij' },
  { icon: '💰', label: 'Mandi\nBhav' },
  { icon: '📋', label: 'Govt\nYojana' },
  { icon: '💧', label: 'Sinchai\nTiming' },
  { icon: '🚜', label: 'Katai\nTime' },
  { icon: '🧪', label: 'Mitti\nJanch' },
];

const MANDI_DATA = [
  { crop: '🌾 Gehu', price: '₹2,275', change: '+45', up: true },
  { crop: '🟡 Sarso', price: '₹5,800', change: '-30', up: false },
  { crop: '🌾 Dhan', price: '₹2,100', change: '+20', up: true },
  { crop: '🟤 Chana', price: '₹5,440', change: '+60', up: true },
];

export default function HomeScreen({ setActiveTab }) {
  return (
    <div style={{ padding: '12px 14px' }}>

      {/* Weather Card */}
      <div onClick={() => setActiveTab('mandi')} style={{
        background: '#fff',
        borderRadius: 14,
        border: '0.5px solid rgba(0,0,0,0.08)',
        padding: '13px 14px',
        marginBottom: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
      }}>
        <div style={{
          width: 52, height: 52,
          background: '#FFF8E1',
          borderRadius: 13,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, flexShrink: 0,
        }}>☀️</div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#1a7a3c' }}>32°C — Dhoop</div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>Greater Noida, UP &nbsp;|&nbsp; Nami: 58%</div>
          <div style={{ fontSize: 11, color: '#aaa' }}>Hawa: 12 km/h &nbsp;|&nbsp; Barish: 5%</div>
        </div>
      </div>

      <div style={{
        background: '#FFF3CD',
        borderRadius: 8,
        padding: '7px 11px',
        marginBottom: 10,
        fontSize: 11,
        color: '#856404',
        borderLeft: '3px solid #ffc107',
      }}>
        ⚠️ Agle 3 din mein aandhi aa sakti hai — fasal ko suraksha dein
      </div>

      {/* Voice Assistant Button */}
      <div
        onClick={() => setActiveTab('voice')}
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '0.5px solid rgba(0,0,0,0.08)',
          padding: '16px 12px',
          textAlign: 'center',
          marginBottom: 12,
          cursor: 'pointer',
        }}
      >
        <div style={{
          width: 72, height: 72,
          border: '2px solid rgba(26,122,60,0.2)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 8px',
        }}>
          <div style={{
            width: 56, height: 56,
            background: '#1a7a3c',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <MicIcon />
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 500, color: '#333' }}>Bolke Puchho — Awaaz Sahayak</div>
        <div style={{ fontSize: 11, color: '#999', marginTop: 3 }}>
          "Sarso mein kaunsa khad?" &nbsp;|&nbsp; "Mandi mein aaj kya bhav?"
        </div>
      </div>

      {/* Quick Grid */}
      <SectionTitle>Jaldi Jaankari</SectionTitle>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8,
        marginBottom: 12,
      }}>
        {QUICK_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: 11,
              border: '0.5px solid rgba(0,0,0,0.08)',
              padding: '9px 4px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 4 }}>{item.icon}</div>
            <div style={{ fontSize: 9, color: '#777', lineHeight: 1.3 }}>
              {item.label.split('\n').map((l, j) => <div key={j}>{l}</div>)}
            </div>
          </div>
        ))}
      </div>

      {/* Disease Alert */}
      <AlertCard title="⚠️ Pila Rust Alert — Gehu" color="amber">
        UP, Punjab mein gehu mein pila rust bimari — abhi Propiconazole spray karein
      </AlertCard>

      {/* Mandi Bhav */}
      <SectionTitle>Aaj Ki Mandi</SectionTitle>
      <Card style={{ padding: '8px 14px', marginBottom: 12 }}>
        {MANDI_DATA.map((row, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '7px 0',
            borderBottom: i < MANDI_DATA.length - 1 ? '0.5px solid rgba(0,0,0,0.07)' : 'none',
          }}>
            <span style={{ fontSize: 12, fontWeight: 500 }}>{row.crop}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#1a7a3c' }}>{row.price}/qtl</span>
            <span style={{ fontSize: 10, color: row.up ? '#2E7D32' : '#C62828' }}>
              {row.up ? '▲' : '▼'} {row.change}
            </span>
          </div>
        ))}
        <div
          onClick={() => setActiveTab('mandi')}
          style={{ textAlign: 'right', marginTop: 8, fontSize: 12, color: '#1a7a3c', cursor: 'pointer', fontWeight: 500 }}
        >
          Sabhi dekho →
        </div>
      </Card>

      {/* Info Cards */}
      <SectionTitle>Useful Links</SectionTitle>
      {[
        { icon: '🌾', bg: '#E8F5E9', title: 'Gehu — Puri Guide', sub: 'Bij chunav • Khad schedule • Katai', tab: 'fasal' },
        { icon: '📋', bg: '#E3F2FD', title: 'PM Kisan + Fasal Bima', sub: 'Apply karein • ₹6,000/saal', tab: 'yojana' },
        { icon: '📰', bg: '#FFF3E0', title: 'Khet Ki Taza Khabar', sub: 'Sarkar, mausam, mandi news', tab: 'news' },
        { icon: '🔬', bg: '#FFEBEE', title: 'Fasal Bimari Jaanch', sub: 'Photo lo → AI se pehchano', tab: 'bimari' },
      ].map((item, i) => (
        <div
          key={i}
          onClick={() => setActiveTab(item.tab)}
          style={{
            background: '#fff',
            borderRadius: 11,
            border: '0.5px solid rgba(0,0,0,0.08)',
            padding: '11px 13px',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: 38, height: 38,
            background: item.bg,
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 19, flexShrink: 0,
          }}>
            {item.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a' }}>{item.title}</div>
            <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{item.sub}</div>
          </div>
          <div style={{ color: '#ccc', fontSize: 18 }}>›</div>
        </div>
      ))}

      <div style={{ height: 16 }} />
    </div>
  );
}
