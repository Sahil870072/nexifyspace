import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './ServicesPreview.css';

const services = [
  {
    num: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="4" width="28" height="20" rx="3" stroke="#2ECC71" strokeWidth="2"/>
        <path d="M10 28H22M16 24V28" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 12L12 16L8 20" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20H22" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Blazing-fast, pixel-perfect websites and web apps built with modern stacks.',
  },
  {
    num: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#2ECC71" strokeWidth="2"/>
        <rect x="10" y="10" width="8" height="8" rx="2" stroke="#2ECC71" strokeWidth="1.5"/>
        <path d="M20 12L26 8M20 20L26 24" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Experiences that convert and delight. From wireframes to high-fidelity prototypes.',
  },
  {
    num: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24L10 16L16 20L22 10L28 14" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="16" r="2" fill="#2ECC71"/>
        <circle cx="16" cy="20" r="2" fill="#2ECC71"/>
        <circle cx="22" cy="10" r="2" fill="#2ECC71"/>
        <path d="M24 4L28 4L28 8" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO & Growth',
    desc: 'Data-driven SEO strategies that put you at the top of every search result.',
  },
  {
    num: '04',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8L16 4L26 8V16C26 22 20 27 16 28C12 27 6 22 6 16V8Z" stroke="#2ECC71" strokeWidth="2"/>
        <path d="M12 14L15 17L20 12" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Motion Design',
    desc: 'Animations that breathe life into your brand and stop the scroll cold.',
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services-preview" ref={ref}>
      <div className="sp-inner">
        <motion.div
          className="sp-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="sp-title">Services Built for <span className="green">Impact.</span></h2>
          <p className="sp-sub">We craft digital products that don't just look good — they grow businesses.</p>
        </motion.div>

        <div className="sp-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="sp-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(46,204,113,0.12)' }}
            >
              <div className="sp-num">{s.num}</div>
              <div className="sp-icon">{s.icon}</div>
              <h3 className="sp-name">{s.title}</h3>
              <p className="sp-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="sp-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/services" className="btn-primary">See All Services →</Link>
        </motion.div>
      </div>
    </section>
  );
}
