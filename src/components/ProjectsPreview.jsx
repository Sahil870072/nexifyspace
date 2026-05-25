import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './ProjectsPreview.css';

const projects = [
  { title: 'LaunchPad', category: 'Web App', gradient: 'linear-gradient(135deg, #2ECC71 0%, #0A0A0A 100%)' },
  { title: 'FlowFinance', category: 'UI/UX Design', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2ECC71 100%)' },
  { title: 'AeroShop', category: 'E-Commerce', gradient: 'linear-gradient(135deg, #0d2137 0%, #1a7f4e 100%)' },
];

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
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="pp-img" style={{ background: p.gradient }}>
                <div className="pp-grid-overlay" />
                <div className="pp-label">
                  <span className="pp-cat">{p.category}</span>
                </div>
              </div>
              <div className="pp-overlay">
                <span className="pp-num">0{i + 1}</span>
                <div>
                  <h3 className="pp-name">{p.title}</h3>
                  <span className="pp-tag">{p.category}</span>
                </div>
                <span className="pp-arrow">→</span>
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
