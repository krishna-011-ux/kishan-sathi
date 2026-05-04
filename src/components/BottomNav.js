import React from 'react';

const NAV_ITEMS = [
  { id: 'home', icon: '🏠', label: 'Ghar' },
  { id: 'fasal', icon: '🌱', label: 'Fasal' },
  { id: 'voice', icon: '🎤', label: 'Awaaz' },
  { id: 'mandi', icon: '📊', label: 'Mandi' },
  { id: 'yojana', icon: '📋', label: 'Yojana' },
];

export default function BottomNav({ activeTab, setActiveTab }) {
  return (
    <div style={{
      background: '#fff',
      borderTop: '0.5px solid rgba(0,0,0,0.1)',
      display: 'flex',
      paddingBottom: 10,
      paddingTop: 6,
    }}>
      {NAV_ITEMS.map(item => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              padding: '4px 2px',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{
              fontSize: 9,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? '#1a7a3c' : '#999',
              fontFamily: 'var(--font)',
            }}>
              {item.label}
            </span>
            {isActive && (
              <div style={{
                width: 4, height: 4,
                background: '#1a7a3c',
                borderRadius: '50%',
                marginTop: 1,
              }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
