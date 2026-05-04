import React, { useState } from 'react';
import { SectionTitle, AlertCard } from '../components/UI';

const DISEASES = [
  {
    id: 'rust', name: 'Pila Rust (Yellow Rust)', crop: 'Gehu', confidence: 94,
    symptoms: ['Peele dhabbe', 'Patte sukh rahe', 'Powder jaisi dhool'],
    medicines: [
      { name: 'Propiconazole 25% EC', dose: 'Matra: 1ml/litre paani | Spray: 2 baar, 10 din antar' },
      { name: 'Tebuconazole 250 EC', dose: 'Matra: 0.5ml/litre | Subah ya shaam spray karein' },
    ],
    organic: 'Neem tel 5ml + 1L paani ka ghol chhidken. Haldi powder bhi upyogi hai.',
    warning: 'Spray ke baad 24 ghante tak khane ka koi kaam na karein. Mask zaroor pehnen.',
  },
];

export default function BimariScreen() {
  const [detected, setDetected] = useState(false);
  const disease = DISEASES[0];

  return (
    <div style={{ padding: '12px 14px' }}>

      {/* Camera Area */}
      <div
        onClick={() => setDetected(true)}
        style={{
          width: '100%', height: 100,
          background: detected ? '#C8E6C9' : '#E8F5E9',
          borderRadius: 12,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          border: '1.5px dashed #81C784',
          marginBottom: 10,
          cursor: 'pointer',
          fontSize: 32,
        }}
      >
        {detected ? '✅' : '📷'}
        <span style={{ fontSize: 11, color: '#2E7D32', marginTop: 6 }}>
          {detected ? 'Bimari pehchani gayi!' : 'Click karein — fasal ki photo lo'}
        </span>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button
          onClick={() => setDetected(true)}
          style={{
            flex: 1, background: '#1a7a3c', color: '#fff',
            border: 'none', borderRadius: 9, padding: '9px 12px',
            fontSize: 12, cursor: 'pointer', fontWeight: 500,
          }}
        >
          📷 Camera Se
        </button>
        <button
          onClick={() => setDetected(true)}
          style={{
            flex: 1, background: '#fff', color: '#1a7a3c',
            border: '0.5px solid #1a7a3c', borderRadius: 9, padding: '9px 12px',
            fontSize: 12, cursor: 'pointer', fontWeight: 500,
          }}
        >
          🖼️ Gallery Se
        </button>
      </div>

      {detected && (
        <div className="slide-up">
          {/* Detection Result */}
          <div style={{
            background: '#FFEBEE',
            borderRadius: 12,
            padding: 13,
            marginBottom: 12,
            border: '0.5px solid #FFCDD2',
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#B71C1C', marginBottom: 5 }}>
              🔴 Pata Chali Bimari: {disease.name}
            </div>
            <div style={{ fontSize: 11, color: '#C62828', marginBottom: 8 }}>
              Confidence: {disease.confidence}% | {disease.crop} ki Fasal
            </div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {disease.symptoms.map((s, i) => (
                <span key={i} style={{
                  background: '#FFF3E0',
                  color: '#E65100',
                  borderRadius: 12,
                  padding: '3px 9px',
                  fontSize: 10,
                  fontWeight: 500,
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Medicines */}
          <SectionTitle>Dawai aur Ilaj</SectionTitle>
          {disease.medicines.map((m, i) => (
            <div key={i} style={{
              background: '#E8F5E9',
              borderRadius: 11,
              padding: '11px 13px',
              marginBottom: 8,
              border: '0.5px solid #A5D6A7',
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1B5E20' }}>💊 {m.name}</div>
              <div style={{ fontSize: 11, color: '#2E7D32', marginTop: 3 }}>{m.dose}</div>
            </div>
          ))}

          {/* Organic */}
          <div style={{
            background: '#E3F2FD',
            borderRadius: 11,
            padding: '11px 13px',
            border: '0.5px solid #90CAF9',
            marginBottom: 8,
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#0D47A1', marginBottom: 3 }}>🌿 Organic Ilaj</div>
            <div style={{ fontSize: 11, color: '#1565C0', lineHeight: 1.5 }}>{disease.organic}</div>
          </div>

          {/* Warning */}
          <AlertCard title="Savdhani" color="amber">{disease.warning}</AlertCard>
        </div>
      )}

      {/* Common Diseases */}
      {!detected && (
        <>
          <SectionTitle>Aam Bimariyaan</SectionTitle>
          {[
            { icon: '🟡', name: 'Pila Rust', crop: 'Gehu', severity: 'Tej' },
            { icon: '🟤', name: 'Jhulsa Rog', crop: 'Dhan', severity: 'Madhyam' },
            { icon: '⚫', name: 'Kala Dhaba', crop: 'Makai', severity: 'Kam' },
            { icon: '🔴', name: 'Tamatar Mosaik', crop: 'Tamatar', severity: 'Tej' },
          ].map((d, i) => (
            <div
              key={i}
              onClick={() => setDetected(true)}
              style={{
                background: '#fff',
                borderRadius: 11,
                border: '0.5px solid rgba(0,0,0,0.08)',
                padding: '11px 13px',
                marginBottom: 7,
                display: 'flex',
                alignItems: 'center',
                gap: 11,
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: 24 }}>{d.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{d.name}</div>
                <div style={{ fontSize: 10, color: '#888' }}>{d.crop} mein hoti hai</div>
              </div>
              <span style={{
                fontSize: 9, fontWeight: 600,
                padding: '3px 8px', borderRadius: 8,
                background: d.severity === 'Tej' ? '#FFEBEE' : d.severity === 'Madhyam' ? '#FFF3E0' : '#E8F5E9',
                color: d.severity === 'Tej' ? '#B71C1C' : d.severity === 'Madhyam' ? '#E65100' : '#1B5E20',
              }}>
                {d.severity}
              </span>
            </div>
          ))}
        </>
      )}

      <div style={{ height: 16 }} />
    </div>
  );
}
