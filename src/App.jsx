import { useState } from "react";
import "./App.css";

const skills = [
  {
    name: "Python",
    category: "Programming",
    description: "Building projects and strengthening Python development skills.",
  },
  {
    name: "C++",
    category: "Programming",
    description: "Fundamentals, OOP, and data structures.",
  },
  {
    name: "Object-Oriented Programming",
    category: "Development",
    description: "Designing software using classes, objects, and reusable structures.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control and project collaboration.",
  },
  {
    name: "Software Engineering",
    category: "Foundation",
    description: "Applying software design and development principles.",
  },
  {
    name: "Problem Solving",
    category: "Mindset",
    description: "Turning real-world problems into practical software ideas.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Personality",
    description: "Understand yourself",
  },
  {
    number: "02",
    title: "Career",
    description: "Discover suitable paths",
  },
  {
    number: "03",
    title: "Role",
    description: "Explore possible roles",
  },
  {
    number: "04",
    title: "Plan",
    description: "Define your direction",
  },
  {
    number: "05",
    title: "Schedule",
    description: "Manage your journey",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="portfolio">

{/* ================= NAVIGATION ================= */}

<nav className="navbar">

  <a href="#home" className="logo">
    KA<span>.</span>
  </a>


  {/* Desktop Navigation */}

  <div className="nav-links">

    <a href="#home">Home</a>

    <a href="#skillverse">SkillVerse</a>

    <a href="#about">About</a>

    <a href="#contact">Contact</a>

  </div>


  {/* Mobile Menu Button */}

  <button
    className={`menu-button ${menuOpen ? "active" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>


  {/* Mobile Navigation */}

  <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#skillverse" onClick={() => setMenuOpen(false)}>
      SkillVerse
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>

</nav>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">
          <p className="eyebrow">
            SOFTWARE ENGINEERING • CREATIVE DEVELOPMENT
          </p>

          <h1>
            Kainat
            <span>Aslam.</span>
          </h1>

          <p className="role">
            Software Engineering Student
            <span>•</span>
            Python Developer
          </p>

          <p className="hero-description">
            I turn ideas into software and build practical solutions
            around real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#skillverse" className="primary-btn">
              Explore SkillVerse <span>↗</span>
            </a>

            <a href="#about" className="secondary-btn">
              Meet the Creator
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

      </section>


      {/* SKILLVERSE */}
      <section id="skillverse" className="skillverse-section">

        <div className="section-heading">
          <p className="section-label">
            CURRENT CREATION / 01
          </p>

          <h2>
            Skill<span>Verse</span>
          </h2>

          <p className="section-subtitle">
            The Career Guide.
          </p>
        </div>


        {/* MAIN PROJECT CARD */}
        <div className="skillverse-main-card">

          <div className="skillverse-orbit">
            <div className="orbit-ring"></div>
            <div className="orbit-ring orbit-ring-two"></div>

            <div className="compass">
              🧭
            </div>
          </div>

          <div className="skillverse-info">

            <p className="card-label">
              CAREER GUIDANCE + SCHEDULE MANAGEMENT
            </p>

            <h3>
              Find your direction.
              <br />
              Plan your journey.
            </h3>

            <p>
              SkillVerse helps users discover suitable careers and roles
              based on their personality, then organize their learning
              journey around a structured plan and schedule.
            </p>

            <div className="development-status">
              <span className="status-dot"></span>
              CURRENTLY IN DEVELOPMENT
            </div>

          </div>

        </div>


        {/* JOURNEY */}
        <div className="journey-container">

          <p className="journey-label">
            HOW SKILLVERSE WORKS
          </p>

          <div className="journey">

            {journeySteps.map((step, index) => (
              <div className="journey-wrapper" key={step.number}>

                <div className="journey-step">

                  <span>{step.number}</span>

                  <strong>{step.title}</strong>

                  <small>{step.description}</small>

                </div>

                {index < journeySteps.length - 1 && (
                  <div className="journey-arrow">→</div>
                )}

              </div>
            ))}

          </div>

        </div>


        {/* PROBLEM / SOLUTION */}
        <div className="problem-section">

          <div>
            <p className="mini-label">THE PROBLEM</p>

            <h3>
              "What career
              <span>fits me?"</span>
            </h3>

            <p>
              Choosing a career can feel overwhelming when you don't know
              where your personality, interests, and goals fit.
            </p>
          </div>


          <div>
            <p className="mini-label">THE IDEA</p>

            <h3>
              Turn uncertainty
              <span>into direction.</span>
            </h3>

            <p>
              SkillVerse connects personality insights with career and
              role discovery, then helps users organize the journey ahead.
            </p>
          </div>

        </div>


        {/* PROJECT CTA */}
        <div className="project-cta">

          <p>WANT TO SEE WHAT I'M BUILDING?</p>

          <button className="project-btn">
            Explore SkillVerse <span>↗</span>
          </button>

        </div>

      </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="about-section">

          <div className="about-intro">

            <div>
              <p className="section-label">
                THE CREATOR
              </p>

              <h2>
                I'm not just
                <span>learning.</span>
              </h2>
            </div>

            <div className="about-description">

              <p>
                I'm Kainat Aslam, a Software Engineering student and developer
                who enjoys turning ideas into practical software.
              </p>

              <p>
                My current focus is building real projects, strengthening my
                development skills, and learning how software can solve
                meaningful problems.
              </p>

            </div>

          </div>


          {/* Developer Snapshot */}

          <div className="developer-snapshot">

            <div className="snapshot-item">
              <span className="snapshot-number">01</span>
              <strong>Build</strong>
              <p>Turn ideas into working software.</p>
            </div>

            <div className="snapshot-item">
              <span className="snapshot-number">02</span>
              <strong>Learn</strong>
              <p>Improve through real projects.</p>
            </div>

            <div className="snapshot-item">
              <span className="snapshot-number">03</span>
              <strong>Improve</strong>
              <p>Keep refining what I create.</p>
            </div>

          </div>


          {/* Skills */}

          <div className="skills-area">

            <div className="skills-heading">

              <p className="section-label">
                CURRENT TOOLKIT
              </p>

              <h3>
                Things I'm
                <span>building with.</span>
              </h3>

            </div>


            <div className="skills-grid">

              {skills.map((skill, index) => (

                <div className="skill-card" key={skill.name}>

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <p className="skill-category">
                      {skill.category}
                    </p>

                    <h4>
                      {skill.name}
                    </h4>

                    <p className="skill-description">
                      {skill.description}
                    </p>

                  </div>

                  <span className="skill-arrow">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">

          <div className="contact-content">

            <p className="section-label">
              LET'S CONNECT
            </p>

            <h2>
              Let's build
              <span>something.</span>
            </h2>

            <p className="contact-description">
              I'm open to internship opportunities, remote work, collaborations,
              and interesting software projects.
            </p>

            <div className="contact-actions">

              <a
                href="mailto:kainat.aslam.se@gmail.com"
                className="contact-primary"
              >
                Send me an email
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Qaynaat"
                target="_blank"
                rel="noreferrer"
                className="contact-secondary"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-secondary"
              >
                LinkedIn
                <span>↗</span>
              </a>

            </div>

          </div>


          <div className="contact-note">

            <span className="contact-dot"></span>

            <p>
              Currently building SkillVerse
            </p>

          </div>

        </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Kainat Aslam</p>
        <p>Built with curiosity & code.</p>
      </footer>

    </main>
  );
}

export default App;