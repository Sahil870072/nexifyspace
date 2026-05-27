import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Team.css';

const members = [
  {
    name: 'Sahil Kumar',
    role: 'Co-Founder & Creative Director',
    bio: 'Visionary designer with a passion for crafting bold digital experiences that captivate and convert.',
    img: '/Sahil pic.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sahil-kumar-in/',
      instagram: 'https://www.instagram.com/okayysahiil/',
    },
    tags: ['UI/UX Design', 'Brand Strategy', 'Creative Lead'],
  },
  {
    name: 'Tushar Kumar',
    role: 'Co-Founder & Lead Developer',
    bio: 'Full-stack architect who turns ambitious ideas into flawless, high-performance web products.',
    img: '/Tushar pic.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tusharrr0302/',
      instagram: 'https://www.instagram.com/realtusharrr/',
    },
    tags: ['Full-Stack Dev', 'React & Node', 'System Design'],
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="team" id="team" ref={ref}>
      {/* Background decorations */}
      <div className="team-bg-glow team-bg-glow--left" />
      <div className="team-bg-glow team-bg-glow--right" />

      <div className="team-container">

        {/* Cards */}
        <div className="team-grid">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Glow ring */}
              <div className="card-glow-ring" />

              {/* Floating photo wrapper — same delay for both cards so they stay level */}
              <motion.div
                className="card-photo-wrap"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              >
                {/* Gradient border frame */}
                <div className="card-photo-frame">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="card-photo"
                  />
                </div>
                <div className="card-photo-overlay" />
              </motion.div>

              {/* Info */}
              <div className="card-body card-body--center">
                <div className="card-role">{member.role}</div>
                <h3 className="card-name">{member.name}</h3>
                <p className="card-bio">{member.bio}</p>

                {/* Tags */}
                <div className="card-tags">
                  {member.tags.map((tag) => (
                    <span key={tag} className="card-tag">{tag}</span>
                  ))}
                </div>

                {/* Socials */}
                <div className="card-socials">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom green bar */}
              <div className="card-accent-bar" />
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="team-footer-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span>✦ Fuelled by creativity &nbsp;·&nbsp; Driven by results &nbsp;·&nbsp; Built to dominate ✦</span>
        </motion.div>
      </div>
    </section>
  );
}
