import React from 'react';

const SCREEN_TITLES = {
  home: { title: '🌾 KisanMitra', sub: 'Aapka Khet, Aapki Awaaz', showSearch: true },
  fasal: { title: '🌱 Fasal Guide', sub: 'Apni fasal chunein', showSearch: false },
  bimari: { title: '🔬 Bimari Jaanch', sub: 'Photo lo ya symptoms batao', showSearch: false },
  mandi: { title: '📊 Mandi Bhav', sub: 'Agmarknet se live data', showSearch: false },
  yojana: { title: '📋 Sarkari Yojana', sub: 'Apna haq paao', showSearch: false },
  news: { title: '📰 Khet Ki Khabar', sub: 'Taza samachar', showSearch: false },
  voice: { title: '🎤 Awaaz Sahayak', sub: 'Apni bhasha mein puchho', showSearch: false },
};

const MicIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" fill="none" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

export default function Header({ lang, setLang, activeTab }) {
  const info = SCREEN_TITLES[activeTab] || SCREEN_TITLES.home;

  return (
    <div style={{
      background: activeTab === 'voice' ? '#0d5c2e' : 'linear-gradient(135deg, #1a7a3c 0%, #2d9a52 100%)',
      padding: '14px 16px',
      color: '#fff',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: info.showSearch ? 12 : 0 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600 }}>{info.title}</div>
          <div style={{ fontSize: 11, opacity: 0.8, fontWeight: 400 }}>{info.sub}</div>
        </div>
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: 20,
            padding: '4px 10px',
            color: '#fff',
            fontSize: 11,
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <option value="Hindi">🇮🇳 हिंदी</option>
          <option value="English">English</option>
          <option value="Punjabi">ਪੰਜਾਬੀ</option>
          <option value="Marathi">मराठी</option>
          <option value="Telugu">తెలుగు</option>
          <option value="Bengali">বাংলা</option>
        </select>
      </div>

      {info.showSearch && (
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 25,
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          gap: 8,
        }}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Puchho kuch bhi... जैसे 'गेहूं में कौन सा खाद?'"
            style={{
              border: 'none',
              background: 'transparent',
              flex: 1,
              fontSize: 12,
              color: '#333',
              outline: 'none',
            }}
          />
          <div style={{
            width: 30, height: 30,
            background: '#1a7a3c',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, cursor: 'pointer',
          }}>
            <MicIcon />
          </div>
        </div>
      )}
    </div>
  );
}
