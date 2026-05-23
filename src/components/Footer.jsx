import mainLogo from '../assets/NexifySpace Main Logo Png (1).png';
import './Footer.css';

const footerLinks = {
  Services: ['Web Development', 'UI/UX Design', 'SEO & Growth', 'Motion Design'],
  Company: ['About Us', 'Our Work', 'Testimonials', 'Careers'],
  Connect: ['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'],
};

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-green-line" />
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={mainLogo} alt="NexifySpace" className="footer-logo-img" />
            </div>
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
                  <li key={link}>
                    <a href="#" className="footer-link" onClick={(e) => {
                      e.preventDefault();
                      if (col === 'Services') scrollTo('services');
                      else if (col === 'Company') scrollTo('about');
                    }}>
                      {link}
                    </a>
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
            Made with ♥ by NexifySpace
          </span>
        </div>
      </div>
    </footer>
  );
}
