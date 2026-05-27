import './Marquee.css';

const logos = [
  { src: '/Grace Salon logo.png', alt: 'Grace Salon' },
  { src: '/Pink Box Logo.png',    alt: 'Pink Box' },
];

export default function Marquee() {
  // Repeat multiple times for a full seamless scroll strip
  const all = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="trust-bar">
      <p className="trust-bar-label">Trusted by growing businesses</p>

      <div className="trust-track-wrap">
        <div className="trust-track">
          {all.map((logo, i) => (
            <div key={i} className="client-logo">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`client-logo-img client-logo-img--${logo.alt.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
