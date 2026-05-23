import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Arjun Mehta',
    company: 'TechVault Inc.',
    initials: 'AM',
    color: '#2ECC71',
    quote: 'NexifySpace completely transformed our online presence. The attention to detail is insane — every pixel feels intentional. Best investment we made.',
    stars: 5,
  },
  {
    name: 'Sarah Collins',
    company: 'BloomBrand',
    initials: 'SC',
    color: '#27ae60',
    quote: 'Working with the NexifySpace team felt like having a top-tier agency at startup pricing. They built our app in weeks, not months. Unreal.',
    stars: 5,
  },
  {
    name: 'Rahul Nair',
    company: 'GrowthBox',
    initials: 'RN',
    color: '#1a9950',
    quote: 'Our SEO traffic went up 7x in 3 months after NexifySpace took over. The data-driven approach is next level. Highly recommend.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Nova Labs',
    initials: 'PS',
    color: '#2ECC71',
    quote: 'The UI/UX design they delivered was beyond what I imagined. Users constantly compliment how "premium" the product feels. That\'s NexifySpace magic.',
    stars: 5,
  },
  {
    name: 'Marcus Lee',
    company: 'AeroStart',
    initials: 'ML',
    color: '#27ae60',
    quote: 'Fast, communicative, creative, and results-driven. NexifySpace delivers every time. Our conversion rate doubled after the redesign.',
    stars: 5,
  },
  {
    name: 'Zara Ahmed',
    company: 'CloudSprint',
    initials: 'ZA',
    color: '#1a9950',
    quote: 'I came in with a rough idea and they turned it into a beautiful, functional platform. The motion design is absolutely stunning. 10/10.',
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials-inner">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag" style={{ color: '#2ECC71' }}>Client Love</span>
          <h2 className="testimonials-title">
            What Our Clients Say{' '}
            <span style={{ color: '#2ECC71' }}>About Us.</span>
          </h2>
          <p className="testimonials-sub">
            Don't take our word for it — hear it from the people who matter.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            >
              <div className="t-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="t-quote">"{t.quote}"</p>
              <div className="t-footer">
                <div
                  className="t-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #0a2818)`, border: `2px solid ${t.color}` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-company">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
