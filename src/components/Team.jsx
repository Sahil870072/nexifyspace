import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sahilImg from '../assets/sahil-kumar.jpg';
import tusharImg from '../assets/tushar-kumar.jpg';
import './Team.css';

const members = [
  {
    name: 'Sahil Kumar',
    role: 'Co-Founder & Creative Director',
    bio: 'Visionary designer with a passion for crafting bold digital experiences that captivate and convert.',
    img: sahilImg,
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
    tags: ['UI/UX Design', 'Brand Strategy', 'Creative Lead'],
  },
  {
    name: 'Tushar Kumar',
    role: 'Co-Founder & Lead Developer',
    bio: 'Full-stack architect who turns ambitious ideas into flawless, high-performance web products.',
    img: tusharImg,
    socials: {
      linkedin: '#',
      twitter: '#',
      github: '#',
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
        {/* Header */}
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">The Minds Behind It</span>
          <h2 className="team-title">
            Meet the <span className="green">NexifySpace</span> Team
          </h2>
          <p className="team-subtitle">
            Two builders. One vision. Infinite execution.
          </p>
        </motion.div>

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

              {/* Photo */}
              <div className="card-photo-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-photo"
                />
                <div className="card-photo-overlay" />
              </div>

              {/* Info */}
              <div className="card-body">
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
                    <a href={member.socials.linkedin} className="social-btn" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="social-btn" aria-label="Twitter/X">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="social-btn" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                      </svg>
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="social-btn" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
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
