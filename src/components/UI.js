import React from 'react';

export function Card({ children, style = {}, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#fff',
        borderRadius: 12,
        border: '0.5px solid rgba(0,0,0,0.1)',
        padding: '12px 14px',
        marginBottom: 8,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <div style={{
      fontSize: 10,
      fontWeight: 600,
      color: '#888',
      margin: '14px 0 7px',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
    }}>
      {children}
    </div>
  );
}

export function Badge({ children, color = 'green' }) {
  const colors = {
    green: { bg: '#E8F5E9', text: '#1B5E20' },
    red: { bg: '#FFEBEE', text: '#B71C1C' },
    amber: { bg: '#FFF3E0', text: '#E65100' },
    blue: { bg: '#E3F2FD', text: '#0D47A1' },
    gray: { bg: '#F5F5F5', text: '#555' },
  };
  const c = colors[color] || colors.green;
  return (
    <span style={{
      background: c.bg,
      color: c.text,
      fontSize: 9,
      fontWeight: 600,
      padding: '3px 8px',
      borderRadius: 8,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

export function AlertCard({ title, children, color = 'amber' }) {
  const colors = {
    amber: { bg: '#FFF8E1', border: '#FFD54F', dot: '#FF8F00', title: '#E65100', text: '#4E342E' },
    red: { bg: '#FFEBEE', border: '#FFCDD2', dot: '#C62828', title: '#B71C1C', text: '#4E342E' },
    green: { bg: '#E8F5E9', border: '#A5D6A7', dot: '#2E7D32', title: '#1B5E20', text: '#2E7D32' },
    blue: { bg: '#E3F2FD', border: '#90CAF9', dot: '#1565C0', title: '#0D47A1', text: '#1565C0' },
  };
  const c = colors[color] || colors.amber;
  return (
    <div style={{
      background: c.bg,
      borderRadius: 11,
      border: `0.5px solid ${c.border}`,
      padding: '11px 12px',
      marginBottom: 8,
      display: 'flex',
      gap: 8,
    }}>
      <div style={{
        width: 7, height: 7,
        background: c.dot,
        borderRadius: '50%',
        flexShrink: 0,
        marginTop: 4,
      }} />
      <div>
        {title && <div style={{ fontWeight: 600, fontSize: 12, color: c.title, marginBottom: 3 }}>{title}</div>}
        <div style={{ fontSize: 11, color: c.text, lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

export function GreenButton({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#1a7a3c',
        color: '#fff',
        border: 'none',
        borderRadius: 9,
        padding: '9px 16px',
        fontSize: 12,
        fontWeight: 500,
        cursor: 'pointer',
        width: '100%',
        fontFamily: 'var(--font)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#fff',
        color: '#1a7a3c',
        border: '0.5px solid #1a7a3c',
        borderRadius: 9,
        padding: '9px 16px',
        fontSize: 12,
        fontWeight: 500,
        cursor: 'pointer',
        width: '100%',
        fontFamily: 'var(--font)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function TabBar({ tabs, active, onChange }) {
  return (
    <div style={{
      display: 'flex',
      background: '#f0f4f0',
      borderRadius: 9,
      padding: 3,
      marginBottom: 12,
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            flex: 1,
            background: active === tab.id ? '#fff' : 'transparent',
            border: active === tab.id ? '0.5px solid rgba(0,0,0,0.1)' : 'none',
            borderRadius: 7,
            padding: '6px 4px',
            fontSize: 11,
            fontWeight: active === tab.id ? 600 : 400,
            color: active === tab.id ? '#1a7a3c' : '#888',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function Divider() {
  return <div style={{ height: '0.5px', background: 'rgba(0,0,0,0.08)', margin: '4px 0' }} />;
}

export function ScrollChips({ chips, active, onChange }) {
  return (
    <div className="chip-scroll" style={{
      display: 'flex', gap: 6,
      overflowX: 'auto',
      marginBottom: 10,
      paddingBottom: 2,
    }}>
      {chips.map(chip => (
        <button
          key={chip.id}
          onClick={() => onChange(chip.id)}
          style={{
            background: active === chip.id ? '#1a7a3c' : '#fff',
            color: active === chip.id ? '#fff' : '#666',
            border: active === chip.id ? 'none' : '0.5px solid rgba(0,0,0,0.1)',
            borderRadius: 16,
            padding: '5px 12px',
            fontSize: 11,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            fontWeight: 500,
            fontFamily: 'var(--font)',
          }}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
