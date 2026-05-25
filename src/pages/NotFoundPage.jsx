import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <>
      <section className="notfound">
        <div className="notfound-glow" />
        <motion.div
          className="notfound-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="notfound-code">404</div>
          <h1 className="notfound-title">
            Page Not <span className="green">Found.</span>
          </h1>
          <p className="notfound-sub">
            Looks like this page went off into the digital void. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary notfound-btn">
            ← Back to Home
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
