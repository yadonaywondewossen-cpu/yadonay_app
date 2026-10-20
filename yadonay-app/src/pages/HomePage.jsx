import { useState } from 'react'
import ArrowIcon from '../components/ArrowIcon.jsx'

const projects = [
  {
    number: '01',
    name: 'Sonder',
    type: 'Brand & digital experience',
    description:
      'A thoughtful identity and online home for a new kind of neighborhood stay.',
    className: 'sonder',
    tags: ['Brand strategy', 'Web design', 'Development'],
  },
  {
    number: '02',
    name: 'Morrow',
    type: 'Product design',
    description:
      'Making personal finance feel a little more human, one small step at a time.',
    className: 'morrow',
    tags: ['Product design', 'Prototyping', 'Development'],
  },
  {
    number: '03',
    name: 'Form & Field',
    type: 'E-commerce',
    description:
      'A considered shopping experience for objects made to last.',
    className: 'field',
    tags: ['Art direction', 'E-commerce', 'Development'],
  },
]

const services = [
  {
    number: '01',
    title: 'Digital experiences',
    description: 'Websites and products that feel clear, useful, and a little unexpected.',
  },
  {
    number: '02',
    title: 'Visual identity',
    description: 'Distinctive brand systems built to work everywhere your audience finds you.',
  },
  {
    number: '03',
    title: 'Creative development',
    description: 'Thoughtful, responsive front ends that bring good ideas to life.',
  },
]

function ProjectArtwork({ className }) {
  if (className === 'sonder') {
    return (
      <div className="artwork artwork-sonder" aria-hidden="true">
        <div className="sonder-sun" />
        <div className="sonder-window">
          <div className="window-top"><i /><i /><i /></div>
          <div className="window-copy">
            <span>STAY A LITTLE</span>
            <strong>Somewhere<br />that feels like<br /><em>you.</em></strong>
            <div className="window-button">Find your stay <ArrowIcon /></div>
          </div>
          <div className="window-photo" />
        </div>
        <span className="artwork-note">A softer kind of stay</span>
      </div>
    )
  }

  if (className === 'morrow') {
    return (
      <div className="artwork artwork-morrow" aria-hidden="true">
        <div className="morrow-orbit orbit-one" />
        <div className="morrow-orbit orbit-two" />
        <div className="morrow-card">
          <div className="morrow-brand"><span className="morrow-mark">m</span> morrow</div>
          <div className="morrow-greeting">Good morning, Alex <span>✳</span></div>
          <div className="morrow-balance-label">YOUR TOTAL BALANCE</div>
          <div className="morrow-balance">$12,840<span>.50</span></div>
          <div className="morrow-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="morrow-bottom"><span>01 — 07 JUN</span><span>↑ 8.4% this month</span></div>
        </div>
        <div className="morrow-sticker">one step<br />at a time</div>
      </div>
    )
  }

  return (
    <div className="artwork artwork-field" aria-hidden="true">
      <div className="field-sun" />
      <div className="field-frame">
        <div className="field-heading"><span>F / F</span><span>OBJECTS FOR LIVING</span></div>
        <div className="field-product">
          <div className="field-vase"><div /></div>
          <div className="field-shadow" />
        </div>
        <div className="field-caption"><strong>Made to stay.</strong><span>THE EVERYDAY VASE — 01</span></div>
      </div>
      <span className="field-side-note">FORM & FIELD · EST. 2024</span>
    </div>
  )
}

function HomePage({ onSignIn, onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const openAuth = (openPage) => {
    closeMenu()
    openPage()
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Yadonay, home">
          y<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <button className="nav-auth" type="button" onClick={() => openAuth(onSignIn)}>Sign in</button>
          <button className="nav-register" type="button" onClick={() => openAuth(onRegister)}>Register</button>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <section className="hero page-section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="availability-dot" /> INDEPENDENT DESIGNER & DEVELOPER</div>
          <h1>Good design<br />makes you <span>feel.</span></h1>
          <p className="hero-intro">
            I&apos;m Yadonay — a designer and developer making thoughtful digital
            experiences for people and the ideas they believe in.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowIcon /></a>
            <a className="text-link" href="#about">A little about me <ArrowIcon diagonal /></a>
          </div>
          <div className="hero-footnote"><span>BASED IN ADDIS ABABA</span><span>AVAILABLE WORLDWIDE</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract portrait illustration">
          <div className="hero-art-grid" />
          <div className="hero-art-ring ring-back" />
          <div className="hero-art-ring ring-front" />
          <div className="hero-art-sun" />
          <div className="hero-art-portrait">
            <div className="portrait-hair" />
            <div className="portrait-face"><span className="portrait-eye" /><span className="portrait-nose" /><span className="portrait-smile" /></div>
            <div className="portrait-neck" />
            <div className="portrait-shirt"><span>Y</span></div>
          </div>
          <div className="hero-sticker"><span>✳</span><small>CURIOUS<br />BY NATURE</small></div>
          <div className="hero-art-caption"><span>DESIGN WITH<br />A HUMAN TOUCH</span><span>✳</span></div>
        </div>
        <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="work-section page-section" id="work">
        <div className="section-heading">
          <div><div className="eyebrow">A FEW THINGS I&apos;VE MADE</div><h2>Selected work<span>.</span></h2></div>
          <p>Different challenges, shared intention:<br />make it useful, make it memorable.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className={`project-art-link ${project.className}`} href="#contact" aria-label={`Ask me about ${project.name}`}>
                <ProjectArtwork className={project.className} />
                <span className="project-open"><ArrowIcon diagonal /></span>
              </a>
              <div className="project-info">
                <div className="project-title-row"><span className="project-number">{project.number} / 03</span><span className="project-type">{project.type}</span></div>
                <h3>{project.name}</h3>
                <div className="project-meta"><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </div>
            </article>
          ))}
        </div>
        <div className="work-outro"><span>HAVE A GOOD ONE IN MIND?</span><a href="#contact">Let&apos;s make it happen <ArrowIcon diagonal /></a></div>
      </section>

      <section className="about-section page-section" id="about">
        <div className="about-label"><div className="eyebrow">A LITTLE ABOUT ME</div><span className="about-spark">✳</span></div>
        <div className="about-content">
          <h2>Equal parts<br />thinker & <span>maker.</span></h2>
          <div className="about-body">
            <p className="about-lede">The best work happens when good questions meet a bit of curiosity.</p>
            <p>I bring design and development together to turn complex ideas into simple, spirited experiences. From the first sketch to the final detail, I care about making things that work beautifully — and mean something to the people using them.</p>
            <p>When I&apos;m not at my desk, I&apos;m usually collecting inspiration, chasing a new idea, or enjoying a very good cup of coffee.</p>
            <a className="text-link" href="mailto:hello@yadonay.design">More about working together <ArrowIcon diagonal /></a>
          </div>
        </div>
        <div className="about-bottom"><span>DESIGN IS HOW IT WORKS. AND HOW IT FEELS.</span><span>✳ &nbsp; ALWAYS MAKING, ALWAYS LEARNING</span></div>
      </section>

      <section className="services-section page-section" id="services">
        <div className="section-heading services-heading">
          <div><div className="eyebrow">HOW I CAN HELP</div><h2>Good things,<br />made together<span>.</span></h2></div>
          <p>From a first spark to a finished product,<br />here&apos;s where I can make a difference.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowIcon diagonal />
            </article>
          ))}
        </div>
        <div className="process-note"><span className="process-star">✳</span><p>Small teams. Open minds.<br /><strong>Good work, without the fuss.</strong></p></div>
      </section>

      <section className="contact-section page-section" id="contact">
        <div className="contact-orbit orbit-a" /><div className="contact-orbit orbit-b" />
        <div className="eyebrow"><span className="availability-dot" /> OPEN FOR SELECT PROJECTS</div>
        <h2>Have a good<br />feeling <span>about this?</span></h2>
        <p>Tell me what you&apos;re dreaming up. I&apos;d love to hear about it.</p>
        <a className="contact-button" href="mailto:hello@yadonay.design">hello@yadonay.design <ArrowIcon diagonal /></a>
        <div className="contact-bottom"><span>GOOD PROJECTS START WITH A HELLO.</span><a href="#home">BACK TO TOP ↑</a></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#home" aria-label="Yadonay, back to top">y<span>.</span></a>
        <span>DESIGNED WITH CARE BY YADONAY</span>
        <div><a href="mailto:hello@yadonay.design">EMAIL</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}

export default HomePage
