import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'LaunchPad',
    category: 'Web App',
    gradient: 'linear-gradient(135deg, #2ECC71 0%, #0A0A0A 100%)',
    size: 'large',
  },
  {
    title: 'FlowFinance',
    category: 'UI/UX Design',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2ECC71 100%)',
    size: 'small',
  },
  {
    title: 'AeroShop',
    category: 'E-Commerce',
    gradient: 'linear-gradient(135deg, #0d2137 0%, #1a7f4e 100%)',
    size: 'small',
  },
  {
    title: 'NovaBrand',
    category: 'Brand Identity',
    gradient: 'linear-gradient(135deg, #2ECC71 30%, #27ae60 100%)',
    size: 'medium',
  },
  {
    title: 'PulseCRM',
    category: 'SaaS Platform',
    gradient: 'linear-gradient(135deg, #0a2818 0%, #2ECC71 100%)',
    size: 'medium',
  },
  {
    title: 'VidBox',
    category: 'Motion Design',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #E53935 60%, #2ECC71 100%)',
    size: 'small',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="projects noise" id="projects">
      <div className="projects-inner" ref={ref}>
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag" style={{ color: 'var(--green)' }}>Our Work</span>
          <h2 className="projects-title">
            Projects That{' '}
            <span className="green">Define Eras.</span>
          </h2>
          <p className="projects-sub">
            Six bold builds that moved the needle for ambitious brands.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`project-card project-${p.size}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="project-img"
                style={{ background: p.gradient }}
              >
                {/* Floating grid lines on hover */}
                <div className="project-grid-overlay" />
                <div className="project-label-top">
                  <span className="project-cat">{p.category}</span>
                </div>
              </div>
              <div className="project-overlay">
                <span className="project-num">0{i + 1}</span>
                <div>
                  <h3 className="project-name">{p.title}</h3>
                  <span className="project-tag">{p.category}</span>
                </div>
                <span className="project-arrow">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
