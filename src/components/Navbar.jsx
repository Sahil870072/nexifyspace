import { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import mainLogo from '../assets/NexifySpace Main Logo Png (1).png';
import './Navbar.css';

const navLinks = ['Services', 'Projects', 'About', 'Testimonials', 'Contact'];

function MagneticButton({ children, onClick, className }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={mainLogo} alt="NexifySpace" className="nav-logo-img" />
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <MagneticButton onClick={() => scrollTo(link)} className="nav-link">
                {link}
              </MagneticButton>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <button className="btn-primary" onClick={() => scrollTo('Contact')}>
            Start a Project →
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="mobile-link">
              {link}
            </button>
          ))}
          <button className="btn-primary" onClick={() => scrollTo('Contact')}>
            Start a Project →
          </button>
        </div>
      )}
    </motion.nav>
  );
}
