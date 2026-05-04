import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import FasalScreen from './screens/FasalScreen';
import BimariScreen from './screens/BimariScreen';
import MandiScreen from './screens/MandiScreen';
import YojanaScreen from './screens/YojanaScreen';
import NewsScreen from './screens/NewsScreen';
import VoiceScreen from './screens/VoiceScreen';
import BottomNav from './components/BottomNav';
import Header from './components/Header';

const SCREENS = {
  home: HomeScreen,
  fasal: FasalScreen,
  bimari: BimariScreen,
  mandi: MandiScreen,
  yojana: YojanaScreen,
  news: NewsScreen,
  voice: VoiceScreen,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('Hindi');

  const Screen = SCREENS[activeTab] || HomeScreen;

  return (
    <div style={{
      width: 390,
      minHeight: '100vh',
      background: '#fff',
      borderRadius: 36,
      overflow: 'hidden',
      boxShadow: '0 0 0 6px #fff, 0 0 0 7px rgba(0,0,0,0.12), 0 20px 60px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      {/* Status Bar */}
      <div style={{
        background: '#1a7a3c',
        padding: '8px 20px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 11,
        color: '#fff',
        fontWeight: 500,
      }}>
        <span>9:41</span>
        <span>KisanMitra</span>
        <span>🔋 92%</span>
      </div>

      {/* Header */}
      <Header lang={lang} setLang={setLang} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Screen Content */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#f8faf8' }} className="fade-in" key={activeTab}>
        <Screen setActiveTab={setActiveTab} lang={lang} />
      </div>

      {/* Bottom Nav */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
