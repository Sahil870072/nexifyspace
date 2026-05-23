import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

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
    desc: 'Blazing-fast, pixel-perfect websites and web apps built with modern stacks. React, Next.js, and beyond.',
    rotate: '-1deg',
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
    desc: 'Experiences that convert and delight. From wireframes to high-fidelity prototypes that wow.',
    rotate: '1deg',
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
    desc: 'Data-driven SEO strategies and growth hacking that puts you at the top of every search.',
    rotate: '-1deg',
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
    desc: 'Animations and micro-interactions that breathe life into your brand and stop the scroll.',
    rotate: '1.5deg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: 0 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: services[i]?.rotate || '0deg',
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <motion.div
          className="services-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="services-title">
            Services Built for{' '}
            <span className="green animated-underline" style={inView ? { '--w': '100%' } : {}}>
              Impact
            </span>
          </h2>
          <p className="services-sub">
            We craft digital products that don't just look good — they grow businesses.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="service-card"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ rotate: '0deg', y: -6, boxShadow: '0 20px 60px rgba(46,204,113,0.15)' }}
            >
              <div className="service-num">{s.num}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href="#contact" className="service-link" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
