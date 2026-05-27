import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, LayoutDashboard, ShoppingCart, Palette } from 'lucide-react';
import './ServicesPreview.css';

const services = [
  {
    num: '01',
    Icon: Monitor,
    title: 'Web Design',
    desc: 'Modern high-converting websites built for growth.',
  },
  {
    num: '02',
    Icon: Smartphone,
    title: 'App Development',
    desc: 'Fast, scalable mobile and web applications.',
  },
  {
    num: '03',
    Icon: LayoutDashboard,
    title: 'Custom CRM',
    desc: 'Tailored CRM systems designed around your workflow.',
  },
  {
    num: '04',
    Icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Conversion-focused online stores with seamless UX.',
  },
  {
    num: '05',
    Icon: Palette,
    title: 'Brand Identity',
    desc: 'Memorable visual identity that builds trust.',
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services-preview" ref={ref}>
      <div className="sp-inner">

        <div className="sp-grid sp-grid--5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="sp-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(46,204,113,0.18)' }}
            >
              {/* Glow layer */}
              <div className="sp-card-glow" />

              <div className="sp-num">{s.num}</div>
              <div className="sp-icon">
                <s.Icon size={26} strokeWidth={1.8} color="#2ECC71" />
              </div>
              <h3 className="sp-name">{s.title}</h3>
              <p className="sp-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="sp-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/services" className="btn-primary">See All Services →</Link>
        </motion.div>
      </div>
    </section>
  );
}
