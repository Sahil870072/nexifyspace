import './Marquee.css';

/*
  Trusted-by bar — replaces the self-promotional "GROW FAST BUILD BOLD" marquee.
  Uses styled SVG text logos to simulate real brand clients.
  These are placeholder brand names styled as if they were real client logos.
  Replace with actual client SVG logos when available.
*/

const clients = [
  { name: 'Zephyr Studio',  abbr: 'ZS' },
  { name: 'Axiom Labs',     abbr: 'AX' },
  { name: 'NovaSpark',      abbr: 'NS' },
  { name: 'Grovelink',      abbr: 'GL' },
  { name: 'PeakForge',      abbr: 'PF' },
  { name: 'Crestline Co.',  abbr: 'CC' },
  { name: 'Driftmark',      abbr: 'DM' },
  { name: 'Ironveil',       abbr: 'IV' },
];

function ClientLogo({ name, abbr }) {
  return (
    <div className="client-logo" title={name}>
      <span className="client-logo-abbr">{abbr}</span>
      <span className="client-logo-name">{name}</span>
    </div>
  );
}

export default function Marquee() {
  const all = [...clients, ...clients]; // duplicate for seamless loop

  return (
    <div className="trust-bar">
      <p className="trust-bar-label">Trusted by 130+ growing businesses</p>

      <div className="trust-track-wrap">
        <div className="trust-track">
          {all.map((c, i) => (
            <ClientLogo key={i} name={c.name} abbr={c.abbr} />
          ))}
        </div>
      </div>
    </div>
  );
}
