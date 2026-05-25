import { Link } from 'react-router-dom';
import mainLogo from '../assets/NexifySpace Main Logo Png (1).png';
import './Footer.css';

const footerLinks = {
  Services: [
    { label: 'Web Development', to: '/services' },
    { label: 'UI/UX Design', to: '/services' },
    { label: 'SEO & Growth', to: '/services' },
    { label: 'Motion Design', to: '/services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Work', to: '/projects' },
    { label: 'Meet the Team', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Connect: [
    { label: 'Twitter', to: '#' },
    { label: 'Instagram', to: '#' },
    { label: 'LinkedIn', to: '#' },
    { label: 'Dribbble', to: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-green-line" />
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={mainLogo} alt="NexifySpace" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              Building digital futures for the boldest brands on the planet. No compromises. No excuses.
            </p>
            <div className="footer-badge">
              <span className="badge-dot-footer" />
              Available for new projects
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className="footer-col">
              <h4 className="footer-col-title">{col}</h4>
              <ul>
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 NexifySpace. All rights reserved.
          </span>
          <span className="footer-made">
            Made with ♥ by <strong>Sahil Kumar</strong> &amp; <strong>Tushar Kumar</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
