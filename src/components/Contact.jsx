import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const WHATSAPP_NUMBER = '918130638410';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20NexifySpace!%20I%20want%20to%20discuss%20a%20project.`;

// 🔑 Web3Forms access key — delivers to sahil870072@gmail.com
const WEB3FORMS_ACCESS_KEY = 'bd69ce51-f9d3-4775-83cf-b8a8ff43306e';

const serviceOptions = [
  'Web Development', 'UI/UX Design', 'SEO & Growth',
  'Motion Design', 'Brand Strategy', 'Other',
];

const infoItems = [
  {
    icon: Mail,
    label: 'Email',
    val: 'sahil870072@gmail.com',
    href: 'mailto:sahil870072@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    val: '+91 8130638410',
    href: `tel:+918130638410`,
  },
  {
    icon: MapPin,
    label: 'Location',
    val: 'Delhi, India',
    href: 'https://maps.google.com/?q=Delhi,India',
  },
  {
    icon: Clock,
    label: 'Response Time',
    val: 'Within 24 hours',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const toggle = (s) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!WEB3FORMS_ACCESS_KEY) {
      setError('Form not configured yet. Please add your Web3Forms key in the .env file.');
      setLoading(false);
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Project Inquiry from ${form.name} — NexifySpace`,
      from_name: 'NexifySpace Contact Form',
      name: form.name,
      email: form.email,
      phone: form.phone || 'Not provided',
      services: selected.length > 0 ? selected.join(', ') : 'Not specified',
      message: form.message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setSelected([]);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact noise" id="contact" ref={ref}>
      <div className="contact-inner">
        {/* Header */}
        <div className="contact-body">
          {/* Left: contact info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {infoItems.map(({ icon: Icon, label, val, href }) => (
              <div key={label} className="info-item">
                <span className="info-icon"><Icon size={18} strokeWidth={1.8} /></span>
                <div>
                  <div className="info-label">{label}</div>
                  {href ? (
                    <a href={href} className="info-val info-link" target="_blank" rel="noopener noreferrer">
                      {val}
                    </a>
                  ) : (
                    <div className="info-val">{val}</div>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={20} strokeWidth={1.8} />
              Chat on WhatsApp
            </a>

            {/* Social pills */}
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
            {/* Setup banner — only visible when key is missing */}
            {!WEB3FORMS_ACCESS_KEY && (
              <div className="setup-banner">
                <span className="setup-icon">🔑</span>
                <div>
                  <strong>One-time setup needed:</strong> Go to{' '}
                  <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">web3forms.com</a>,
                  enter <code>sahil870072@gmail.com</code>, copy the access key and add it to your{' '}
                  <code>.env</code> file as <code>VITE_WEB3FORMS_KEY=your_key_here</code>, then redeploy.
                </div>
              </div>
            )}
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <CheckCircle size={48} strokeWidth={1.5} color="var(--green)" />
                </div>
                <h3>Message Sent! 🎉</h3>
                <p>We'll get back to you within 24 hours. Let's build something extraordinary!</p>
                <div className="success-actions">
                  <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another →</button>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost whatsapp-success">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
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
                    {serviceOptions.map(s => (
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

                {error && <p className="form-error">⚠️ {error}</p>}

                <div className="form-actions">
                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn-primary submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <><span className="spinner" /> Sending...</>
                    ) : (
                      <><Send size={16} strokeWidth={2} /> Send Message</>
                    )}
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost whatsapp-alt"
                  >
                    <MessageCircle size={16} strokeWidth={2} />
                    WhatsApp Instead
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
