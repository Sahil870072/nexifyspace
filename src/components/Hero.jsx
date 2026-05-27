import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

function StatCounter({ target, suffix = '+', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(start);
          if (start >= target) clearInterval(timer);
        }, 25);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero" id="hero">

      <div className="hero-content">
        {/* <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        > */}
        {/* </motion.div> */}

        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="eyebrow-dot" />
          Creative Agency · Design & Development
        </motion.div>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          The space where<br />
          <span className="headline-green">brands grow.</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          We help ambitious brands establish a powerful digital presence<br />
          through strategy, design, and development.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button
            className="btn-primary hero-btn"
            onClick={() => navigate('/contact')}
          >
            Start a Project →
          </button>
          <button
            className="btn-ghost"
            onClick={() => navigate('/projects')}
          >
            View Our Work ↓
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <StatCounter target={130} suffix="+" label="Customers" />
          <div className="stat-divider" />
          <StatCounter target={80} suffix="+" label="Projects" />
          <div className="stat-divider" />
          <StatCounter target={5} suffix="★" label="Star Rating" />
        </motion.div>
      </div>

      {/* SVG wave divider — replaces the 2018 diagonal clip-path */}
      <div className="hero-diagonal" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 C 360 20, 720 60, 1080 30 C 1260 15, 1380 40, 1440 20 L1440 80 Z"
            fill="var(--dark-2)" />
        </svg>
      </div>
    </section>
  );
}
