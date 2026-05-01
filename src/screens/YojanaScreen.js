import React from 'react';

const SCHEMES = [
  {
    icon: '🌾', bg: '#E8F5E9', border: '#A5D6A7',
    name: 'PM Kisan Samman Nidhi',
    amount: '₹6,000/saal — 3 kishton mein',
    desc: '2 hectare tak zameen wale kisan iske liye apply kar sakte hain. Raqam seedha bank account mein aati hai.',
    btn: 'Apply Karein / Status Dekho',
    docs: ['Aadhar Card', 'Khasra-Khatauni', 'Bank Passbook', 'Mobile Number'],
  },
  {
    icon: '🛡️', bg: '#E3F2FD', border: '#90CAF9',
    name: 'Pradhan Mantri Fasal Bima',
    amount: 'Kharif: 2% | Rabi: 1.5% premium',
    desc: 'Aakaal, baarish, bimari se fasal kharab ho to claim milega. Buaai ke 10 din ke andar apply karein.',
    btn: 'Claim Karein / Apply Karein',
    docs: ['Kisan ID', 'Buaai Praman Patra', 'Khasra', 'Bank Khata'],
  },
  {
    icon: '💳', bg: '#FFF3E0', border: '#FFCC80',
    name: 'Kisan Credit Card (KCC)',
    amount: '3 lakh tak — sirf 4% byaj',
    desc: 'Khad, bij, diesel ke liye asaan loan. Kisi bhi sarkari bank se banwao. 5 saal tak valid.',
    btn: 'KCC Banwao',
    docs: ['Aadhar', 'Zameen Ke Kaagaz', 'Photo', 'Bank Khata'],
  },
  {
    icon: '🚿', bg: '#FFEBEE', border: '#FFCDD2',
    name: 'PM Krishi Sinchai Yojana',
    amount: '90% subsidy — drip/sprinkler',
    desc: 'Drip irrigation aur sprinkler system par 90% subsidy. Paani bachao, fasal badhao.',
    btn: 'Subsidy Lo',
    docs: ['Aadhar', 'Zameen Ke Kaagaz', 'Bank Khata'],
  },
  {
    icon: '🌱', bg: '#E8F5E9', border: '#A5D6A7',
    name: 'Paramparagat Krishi Vikas',
    amount: '₹50,000/hectare — organic farming',
    desc: 'Organic kheti apnaao aur zyada kamaao. 3 saal ke liye sahayata milti hai sarkar se.',
    btn: 'Jude Abhi',
    docs: ['Aadhar', 'Zameen', 'Group Registration'],
  },
];

export default function YojanaScreen() {
  const [expanded, setExpanded] = React.useState(null);

  return (
    <div style={{ padding: '12px 14px' }}>

      <div style={{
        background: '#E8F5E9',
        borderRadius: 12,
        padding: '11px 13px',
        border: '0.5px solid #A5D6A7',
        marginBottom: 12,
        fontSize: 11,
        color: '#1B5E20',
        lineHeight: 1.6,
      }}>
        💡 Sarkari yojanaon ka labh uthao. Neeche di gayi yojanaon ke liye apply karein aur apna haq paao.
      </div>

      {SCHEMES.map((scheme, i) => (
        <div key={i} style={{
          background: '#fff',
          borderRadius: 12,
          border: '0.5px solid rgba(0,0,0,0.08)',
          padding: 13,
          marginBottom: 9,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 7 }}>
            <div style={{
              width: 34, height: 34,
              background: scheme.bg,
              borderRadius: 9,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 17, flexShrink: 0,
              border: `0.5px solid ${scheme.border}`,
            }}>
              {scheme.icon}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a' }}>{scheme.name}</div>
              <div style={{ fontSize: 11, color: '#1a7a3c', fontWeight: 500, marginTop: 1 }}>{scheme.amount}</div>
            </div>
          </div>

          <div style={{ fontSize: 11, color: '#666', lineHeight: 1.6, marginBottom: 8 }}>{scheme.desc}</div>

          {/* Documents required */}
          <div
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{ fontSize: 11, color: '#1a7a3c', cursor: 'pointer', marginBottom: 8, fontWeight: 500 }}
          >
            📄 Zaroori Documents {expanded === i ? '▲' : '▼'}
          </div>
          {expanded === i && (
            <div style={{ marginBottom: 8 }}>
              {scheme.docs.map((doc, j) => (
                <div key={j} style={{ fontSize: 11, color: '#555', padding: '2px 0' }}>✓ {doc}</div>
              ))}
            </div>
          )}

          <button style={{
            background: '#1a7a3c',
            color: '#fff',
            border: 'none',
            borderRadius: 9,
            padding: '9px 16px',
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
            width: '100%',
            fontFamily: 'inherit',
          }}>
            {scheme.btn} →
          </button>
        </div>
      ))}

      <div style={{ height: 16 }} />
    </div>
  );
}
