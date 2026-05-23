import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

function Counter({ target, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        let start = 0;
        const step = Math.ceil(target / 50);
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(start);
          if (start >= target) clearInterval(timer);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { num: 130, suffix: '+', label: 'Clients Served' },
  { num: 60, suffix: '+', label: 'Happy Clients' },
  { num: 0, suffix: '', label: 'Failed Projects' },
  { num: 7, suffix: '%', label: 'Extra Growth' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-inner">
        {/* Left */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag" style={{ color: 'var(--green)' }}>Our Ethos</span>
          <blockquote className="about-quote">
            "We Don't Follow Trends.
            <br />
            <span className="quote-accent">We Set Them.</span>"
          </blockquote>
          <p className="about-body">
            At NexifySpace, we believe digital products should do more than exist — they should <strong>dominate</strong>. Every pixel, every interaction, every line of code is crafted with obsessive attention to impact.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <div className="about-stat-num">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="about-img-wrap">
            <div className="about-img-placeholder">
              {/* Team visual */}
              <div className="team-graphic">
                <div className="team-grid">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="team-avatar" style={{ animationDelay: `${i * 0.15}s` }}>
                      <span>{['TK', 'AS', 'MR', 'JP', 'SL', 'NB'][i]}</span>
                    </div>
                  ))}
                </div>
                <div className="team-label">The NexifySpace Team</div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="badge-sticker badge-1"
              animate={{ rotate: [-3, 3, -3], y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🚀 Launch Fast
            </motion.div>
            <motion.div
              className="badge-sticker badge-2"
              animate={{ rotate: [2, -2, 2], y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              ✦ Build Bold
            </motion.div>
            <motion.div
              className="badge-sticker badge-3"
              animate={{ rotate: [-2, 2, -2], y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              💚 Grow More
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
