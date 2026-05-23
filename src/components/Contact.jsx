import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import './Contact.css';

const services = ['Web Development', 'UI/UX Design', 'SEO & Growth', 'Motion Design', 'Brand Strategy', 'Other'];

const infoItems = [
  { icon: Mail, label: 'Email', val: 'hello@nexifyspace.com' },
  { icon: Phone, label: 'Phone', val: '+91 98765 43210' },
  { icon: MapPin, label: 'Location', val: 'Mumbai, India' },
  { icon: Clock, label: 'Response Time', val: 'Within 24 hours' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const toggle = (s) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact noise" id="contact" ref={ref}>
      <div className="contact-inner">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="contact-title">
            Ready to Build Something
            <br />
            <span className="green">Extraordinary?</span>
          </h2>
          <p className="contact-sub">
            Let's turn your vision into a digital reality. Drop us a message and we'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="contact-body">
          {/* Left: contact info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {infoItems.map(({ icon: Icon, label, val }) => (
              <div key={label} className="info-item">
                <span className="info-icon"><Icon size={18} strokeWidth={1.8} /></span>
                <div>
                  <div className="info-label">{label}</div>
                  <div className="info-val">{val}</div>
                </div>
              </div>
            ))}

            <div className="contact-socials">
              {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map(s => (
                <a key={s} href="#" className="social-pill">{s}</a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <CheckCircle size={48} strokeWidth={1.5} color="var(--green)" />
                </div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours. Let's build something extraordinary!</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another →</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone <span className="optional">(optional)</span></label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Services Needed</label>
                  <div className="service-checks">
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`service-check ${selected.includes(s) ? 'active' : ''}`}
                        onClick={() => toggle(s)}
                      >
                        {selected.includes(s) ? '✓ ' : ''}{s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell us about your project, goals, timeline..."
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" id="contact-submit" className="btn-primary submit-btn">
                  <Send size={16} strokeWidth={2} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
