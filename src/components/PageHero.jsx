import { motion } from 'framer-motion';
import './PageHero.css';

export default function PageHero({ tag, title, highlight, sub }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow page-hero-glow--left" />
      <div className="page-hero-glow page-hero-glow--right" />
      <div className="page-hero-inner">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tag}
        </motion.span>
        <motion.h1
          className="page-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}{' '}
          <span className="green">{highlight}</span>
        </motion.h1>
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sub}
        </motion.p>
        <motion.div
          className="page-hero-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </section>
  );
}
