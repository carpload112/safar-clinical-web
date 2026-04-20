const items = [
  'NCT05783438 / ONCOLOGY · NSCLC / +4 MATCHED',
  'NCT05621890 / CARDIOLOGY · HFrEF / +11 MATCHED',
  'NCT05490017 / RARE DISEASE · FABRY / +2 MATCHED',
  'NCT05812034 / HEMATOLOGY · MDS / +7 MATCHED',
  'NCT05673291 / ONCOLOGY · BREAST / +9 MATCHED',
  'NCT05544012 / NEUROLOGY · ALS / +3 MATCHED',
  'NCT05901223 / ONCOLOGY · PDAC / +5 MATCHED',
  'NCT05439876 / CARDIOLOGY · AFib / +6 MATCHED',
]

export default function Ticker() {
  const row = [...items, ...items]
  return (
    <div style={{ background: 'var(--forest)', overflow: 'hidden', borderBottom: '0.5px solid rgba(241,239,232,0.1)', position: 'relative' }}>
      <style>{`
        @keyframes safar-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          animation: safar-ticker 80s linear infinite;
          width: max-content;
        }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="ticker-track" style={{ padding: '12px 0' }}>
        {[...row, ...row].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.16em', color: 'var(--sage-soft)',
              whiteSpace: 'nowrap', padding: '0 32px',
              borderRight: '0.5px solid rgba(241,239,232,0.1)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
