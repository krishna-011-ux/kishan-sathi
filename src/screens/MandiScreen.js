import React, { useState } from 'react';
import { SectionTitle, TabBar, AlertCard } from '../components/UI';

const MANDI_DATA = {
  today: [
    { crop: '🌾 Gehu', mandi: 'Hapur', price: 2275, change: +45 },
    { crop: '🟡 Sarso', mandi: 'Agra', price: 5800, change: -30 },
    { crop: '🌾 Dhan', mandi: 'Lucknow', price: 2100, change: +20 },
    { crop: '🟤 Chana', mandi: 'Kanpur', price: 5440, change: +60 },
    { crop: '🧅 Pyaz', mandi: 'Nashik', price: 1800, change: -90 },
    { crop: '🥔 Aalu', mandi: 'Agra', price: 1200, change: +15 },
    { crop: '🌽 Makai', mandi: 'Bareilly', price: 1890, change: +25 },
  ],
};

const MSP = [
  { crop: '🌾 Gehu', msp: 2275 },
  { crop: '🟡 Sarso', msp: 5650 },
  { crop: '🌾 Dhan', msp: 2183 },
  { crop: '🟤 Chana', msp: 5440 },
];

export default function MandiScreen() {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div style={{ padding: '12px 14px' }}>

      <TabBar
        tabs={[
          { id: 'today', label: 'Aaj' },
          { id: 'week', label: 'Is Hafte' },
          { id: 'month', label: 'Mahina' },
        ]}
        active={activeTab}
        onChange={setActiveTab}
      />

      {/* Table Header */}
      <div style={{
        background: '#fff',
        borderRadius: 12,
        border: '0.5px solid rgba(0,0,0,0.08)',
        overflow: 'hidden',
        marginBottom: 10,
      }}>
        <div style={{
          display: 'flex',
          padding: '7px 14px',
          background: '#f0f4f0',
          borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        }}>
          {['Fasal', 'Mandi', 'Bhav/qtl', 'Badlaav'].map((h, i) => (
            <span key={i} style={{
              flex: i === 0 ? 2 : 1,
              fontSize: 10,
              color: '#888',
              fontWeight: 600,
              textAlign: i > 1 ? 'right' : i === 1 ? 'center' : 'left',
            }}>{h}</span>
          ))}
        </div>

        {MANDI_DATA.today.map((row, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '9px 14px',
            borderBottom: i < MANDI_DATA.today.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none',
          }}>
            <span style={{ flex: 2, fontSize: 12, fontWeight: 600 }}>{row.crop}</span>
            <span style={{ flex: 1, fontSize: 10, color: '#888', textAlign: 'center' }}>{row.mandi}</span>
            <span style={{ flex: 1, fontSize: 12, fontWeight: 700, color: '#1a7a3c', textAlign: 'right' }}>₹{row.price.toLocaleString()}</span>
            <span style={{
              flex: 1, fontSize: 10, textAlign: 'right',
              color: row.change > 0 ? '#2E7D32' : '#C62828',
              fontWeight: 500,
            }}>
              {row.change > 0 ? '▲' : '▼'} {Math.abs(row.change)}
            </span>
          </div>
        ))}
      </div>

      {/* Nearest Mandi */}
      <div style={{
        background: '#E8F5E9',
        borderRadius: 11,
        padding: '11px 13px',
        border: '0.5px solid #A5D6A7',
        marginBottom: 10,
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#1B5E20', marginBottom: 3 }}>📍 Aapki Nearest Mandi</div>
        <div style={{ fontSize: 11, color: '#2E7D32', lineHeight: 1.5 }}>
          Greater Noida se paas:<br/>
          • Dankaur Mandi — 12 km<br/>
          • Hapur Mandi — 28 km<br/>
          • Ghaziabad Mandi — 22 km
        </div>
      </div>

      {/* AI Advice */}
      <AlertCard title="🤖 AI Salah" color="amber">
        Sarso ke bhav neeche aa rahe hain — iss hafte becho ya 2 hafte ruko MSP ke liye. Gehu ke bhav MSP par hain — theek time hai.
      </AlertCard>

      {/* MSP */}
      <SectionTitle>MSP 2024-25 (Minimum Support Price)</SectionTitle>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        border: '0.5px solid rgba(0,0,0,0.08)',
        padding: '4px 14px',
        marginBottom: 16,
      }}>
        {MSP.map((row, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 0',
            borderBottom: i < MSP.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none',
          }}>
            <span style={{ fontSize: 12, fontWeight: 600 }}>{row.crop}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1a7a3c' }}>₹{row.msp.toLocaleString()}/qtl</span>
            <span style={{
              fontSize: 9, fontWeight: 600, padding: '3px 8px',
              borderRadius: 8, background: '#E8F5E9', color: '#1B5E20',
            }}>
              MSP ✓
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
