import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './ProjectsPreview.css';

/*
  Project cards now show SVG browser-frame mockups with actual UI elements,
  replacing the plain CSS gradient boxes. This simulates real screenshots
  until actual project photography/screencaps are available.
*/

const projects = [
  {
    title: 'LaunchPad',
    category: 'SaaS Web App',
    description: 'A project management platform for remote-first teams.',
    accent: '#2ECC71',
    bgA: '#0f1f14',
    bgB: '#0A0A0A',
    ui: 'dashboard',
  },
  {
    title: 'FlowFinance',
    category: 'UI/UX Design',
    description: 'Personal finance tracking with beautiful data visualisation.',
    accent: '#6C63FF',
    bgA: '#0f0e1f',
    bgB: '#0A0A0A',
    ui: 'finance',
  },
  {
    title: 'AeroShop',
    category: 'E-Commerce',
    description: 'High-converting storefront for a premium apparel brand.',
    accent: '#FF6B35',
    bgA: '#1f110a',
    bgB: '#0A0A0A',
    ui: 'ecom',
  },
];

/* SVG browser mockup — draws a simplified UI preview */
function BrowserMockup({ accent, bgA, bgB, ui }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-mockup-svg">
      {/* Browser chrome */}
      <rect width="400" height="260" rx="10" fill={bgA} />

      {/* Top bar */}
      <rect width="400" height="36" rx="10" fill={bgB} />
      <rect y="26" width="400" height="10" fill={bgB} />

      {/* Window dots */}
      <circle cx="16" cy="18" r="5" fill="#ff5f57" />
      <circle cx="32" cy="18" r="5" fill="#febc2e" />
      <circle cx="48" cy="18" r="5" fill="#28c840" />

      {/* URL bar */}
      <rect x="70" y="10" width="260" height="16" rx="8" fill="rgba(255,255,255,0.06)" />
      <rect x="82" y="15" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)" />

      {/* ── UI content based on type ── */}
      {ui === 'dashboard' && (
        <>
          {/* Sidebar */}
          <rect x="0" y="36" width="72" height="224" fill="rgba(255,255,255,0.03)" />
          <rect x="10" y="52" width="52" height="8" rx="4" fill={accent} fillOpacity="0.7" />
          <rect x="10" y="68" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
          <rect x="10" y="82" width="48" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="10" y="96" width="44" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="10" y="110" width="36" height="6" rx="3" fill="rgba(255,255,255,0.08)" />

          {/* Main content */}
          <rect x="82" y="48" width="120" height="10" rx="4" fill="rgba(255,255,255,0.6)" />
          <rect x="82" y="64" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)" />

          {/* Stat cards */}
          <rect x="82" y="82" width="72" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke={accent} strokeWidth="0.5" strokeOpacity="0.4" />
          <rect x="92" y="90" width="32" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="92" y="100" width="50" height="10" rx="3" fill={accent} fillOpacity="0.8" />

          <rect x="164" y="82" width="72" height="44" rx="8" fill="rgba(255,255,255,0.05)" />
          <rect x="174" y="90" width="28" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="174" y="100" width="40" height="10" rx="3" fill="rgba(255,255,255,0.3)" />

          <rect x="246" y="82" width="130" height="44" rx="8" fill="rgba(255,255,255,0.05)" />
          <rect x="258" y="90" width="40" height="5" rx="2" fill="rgba(255,255,255,0.2)" />

          {/* Chart bars */}
          <rect x="258" y="108" width="10" height="12" rx="2" fill={accent} fillOpacity="0.6" />
          <rect x="272" y="102" width="10" height="18" rx="2" fill={accent} fillOpacity="0.8" />
          <rect x="286" y="106" width="10" height="14" rx="2" fill={accent} fillOpacity="0.5" />
          <rect x="300" y="100" width="10" height="20" rx="2" fill={accent} />
          <rect x="314" y="104" width="10" height="16" rx="2" fill={accent} fillOpacity="0.7" />

          {/* Table rows */}
          <rect x="82" y="136" width="294" height="1" fill="rgba(255,255,255,0.06)" />
          <rect x="82" y="144" width="60" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
          <rect x="180" y="144" width="40" height="6" rx="3" fill={accent} fillOpacity="0.5" />
          <rect x="82" y="158" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="180" y="158" width="30" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
          <rect x="82" y="172" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="180" y="172" width="50" height="6" rx="3" fill={accent} fillOpacity="0.3" />
        </>
      )}

      {ui === 'finance' && (
        <>
          {/* Balance hero */}
          <rect x="20" y="48" width="160" height="80" rx="12" fill="rgba(108,99,255,0.15)" stroke={accent} strokeWidth="0.5" strokeOpacity="0.4" />
          <rect x="34" y="62" width="60" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x="34" y="76" width="100" height="16" rx="4" fill="rgba(255,255,255,0.8)" />
          <rect x="34" y="100" width="50" height="8" rx="4" fill={accent} fillOpacity="0.8" />

          {/* Line chart */}
          <rect x="196" y="48" width="184" height="80" rx="12" fill="rgba(255,255,255,0.04)" />
          <polyline points="210,116 230,100 255,108 280,88 305,96 330,78 355,86 370,72"
            stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M210 116 L230 100 L255 108 L280 88 L305 96 L330 78 L355 86 L370 72 L370 128 L210 128Z"
            fill={accent} fillOpacity="0.08" />

          {/* Transaction list */}
          <rect x="20" y="140" width="360" height="8" rx="3" fill="rgba(255,255,255,0.5)" />
          <rect x="20" y="156" width="200" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="340" y="156" width="40" height="6" rx="3" fill={accent} fillOpacity="0.7" />
          <rect x="20" y="170" width="160" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="340" y="170" width="40" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x="20" y="184" width="180" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="340" y="184" width="40" height="6" rx="3" fill="rgba(255,100,100,0.6)" />
          <rect x="20" y="198" width="140" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
          <rect x="340" y="198" width="40" height="6" rx="3" fill={accent} fillOpacity="0.5" />
        </>
      )}

      {ui === 'ecom' && (
        <>
          {/* Nav */}
          <rect x="20" y="48" width="360" height="28" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="32" y="56" width="50" height="8" rx="3" fill="rgba(255,255,255,0.5)" />
          <rect x="220" y="58" width="30" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="258" y="58" width="30" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="296" y="58" width="30" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="338" y="54" width="36" height="14" rx="7" fill={accent} />

          {/* Product grid */}
          <rect x="20" y="88" width="110" height="120" rx="10" fill="rgba(255,255,255,0.06)" />
          <rect x="26" y="94" width="98" height="76" rx="7" fill="rgba(255,255,255,0.08)" />
          <rect x="26" y="178" width="60" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="26" y="190" width="40" height="6" rx="3" fill={accent} fillOpacity="0.8" />

          <rect x="140" y="88" width="110" height="120" rx="10" fill="rgba(255,255,255,0.06)" />
          <rect x="146" y="94" width="98" height="76" rx="7" fill="rgba(255,255,255,0.08)" />
          <rect x="146" y="178" width="55" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="146" y="190" width="44" height="6" rx="3" fill={accent} fillOpacity="0.6" />

          <rect x="260" y="88" width="120" height="120" rx="10" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="0.8" strokeOpacity="0.5" />
          <rect x="266" y="94" width="108" height="76" rx="7" fill="rgba(255,255,255,0.08)" />
          <rect x="266" y="178" width="65" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="266" y="190" width="50" height="6" rx="3" fill={accent} />
        </>
      )}
    </svg>
  );
}

export default function ProjectsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="projects-preview" ref={ref}>
      <div className="pp-inner">
        <motion.div
          className="pp-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Work</span>
          <h2 className="pp-title">Projects That <span className="green">Define Eras.</span></h2>
          <p className="pp-sub">Bold builds that moved the needle for ambitious brands.</p>
        </motion.div>

        <div className="pp-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="pp-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Browser mockup — replaces plain gradient box */}
              <div className="pp-mockup" style={{ background: `linear-gradient(160deg, ${p.bgA} 0%, ${p.bgB} 100%)` }}>
                <BrowserMockup accent={p.accent} bgA={p.bgA} bgB={p.bgB} ui={p.ui} />
                <div className="pp-mockup-shine" />
              </div>

              {/* Card body */}
              <div className="pp-body">
                <span className="pp-cat" style={{ color: p.accent }}>
                  {p.category}
                </span>
                <h3 className="pp-name">{p.title}</h3>
                <p className="pp-desc">{p.description}</p>
                <div className="pp-footer">
                  <Link to="/projects" className="pp-link">
                    View Case Study
                    <span className="pp-link-arrow">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pp-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <Link to="/projects" className="btn-ghost">View All Projects →</Link>
        </motion.div>
      </div>
    </section>
  );
}
