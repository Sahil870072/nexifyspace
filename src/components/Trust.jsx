import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Trust.css';

const logos = [
  { src: '/Grace Salon logo.png', alt: 'Grace Salon' },
  { src: '/Pink Box Logo.png',    alt: 'Pink Box' },
];

export default function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="trust" id="trust" ref={ref}>
      <div className="trust-bg-glow trust-bg-glow--l" />
      <div className="trust-bg-glow trust-bg-glow--r" />

      <div className="trust-inner">
        <motion.div
          className="trust-bar-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-bar-text">Trusted by Growing Businesses</span>

          <div className="trust-bar-logos">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="trust-bar-logo"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
