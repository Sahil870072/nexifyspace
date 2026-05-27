import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, LayoutDashboard, ShoppingCart, Palette } from 'lucide-react';
import './Services.css';

const services = [
  {
    num: '01',
    Icon: Monitor,
    title: 'Web Design',
    desc: 'Modern high-converting websites built for growth. Pixel-perfect, fast, and crafted to make a lasting first impression.',
    rotate: '-1deg',
  },
  {
    num: '02',
    Icon: Smartphone,
    title: 'App Development',
    desc: 'Fast, scalable mobile and web applications. From concept to launch — built with modern stacks and clean architecture.',
    rotate: '1deg',
  },
  {
    num: '03',
    Icon: LayoutDashboard,
    title: 'Custom CRM',
    desc: 'Tailored CRM systems designed around your workflow. Automate, track, and scale your operations with precision.',
    rotate: '-1deg',
  },
  {
    num: '04',
    Icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Conversion-focused online stores with seamless UX. From product page to checkout — optimised at every step.',
    rotate: '1.5deg',
  },
  {
    num: '05',
    Icon: Palette,
    title: 'Brand Identity',
    desc: 'Memorable visual identity that builds trust. Logo, colour system, typography — your brand in full clarity.',
    rotate: '-0.5deg',
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

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="service-card"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ rotate: '0deg', y: -6, boxShadow: '0 24px 60px rgba(46,204,113,0.18)' }}
            >
              <div className="service-num">{s.num}</div>
              <div className="service-icon">
                <s.Icon size={28} strokeWidth={1.7} color="#2ECC71" />
              </div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <Link to="/contact" className="service-link">
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
