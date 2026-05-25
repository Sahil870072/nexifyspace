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
      {/* Ambient glow orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        {/* <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        > */}
        {/* </motion.div> */}

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          We Build The
          <br />
          <span className="headline-green">Digital Future.</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          Creating Growth Engines for bold brands &amp; ambitious startups.<br />
          Bold design. Cutting-edge dev. Real results.
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

      {/* Diagonal bottom border */}
      <div className="hero-diagonal" />
    </section>
  );
}
