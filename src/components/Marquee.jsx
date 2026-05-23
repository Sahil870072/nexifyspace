import './Marquee.css';

const items = [
  'NEXIFY SPACE', '✦', 'GROW FAST', '✦', 'BUILD BOLD', '✦', 'LAUNCH NOW', '✦',
  'NEXIFY SPACE', '✦', 'GROW FAST', '✦', 'BUILD BOLD', '✦', 'LAUNCH NOW', '✦',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} className={item === '✦' ? 'marquee-dot' : 'marquee-word'}>
              {item}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, i) => (
            <span key={`dup-${i}`} className={item === '✦' ? 'marquee-dot' : 'marquee-word'}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
