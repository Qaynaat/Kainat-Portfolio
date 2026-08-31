import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          KA<span>.</span>
        </a>

        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#skillverse">SkillVerse</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-connect">
          Let's Connect
          <span>↗</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skillverse" onClick={closeMenu}>SkillVerse</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>


      {/* ================= HOME HERO ================= */}

      <section id="home" className="home-page">

        <div className="hero-grid">

          {/* LEFT */}

          <div className="hero-copy">

            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              SOFTWARE ENGINEERING STUDENT · DEVELOPER
            </div>

            <h1>
              I build software
              <span>with purpose.</span>
            </h1>

            <div className="hero-description">
              <span className="description-line"></span>

              <p>
                I'm Kainat Aslam, a Software Engineering student focused on
                building practical digital products that solve real problems.
              </p>
            </div>

            <div className="hero-actions">
              <a href="#skillverse" className="hero-primary">
                Explore SkillVerse
                <span>↗</span>
              </a>

              <a href="#projects" className="hero-secondary">
                View My Projects
                <span>↗</span>
              </a>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="hero-visual">

            <div className="visual-glow"></div>

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="visual-core">
              <div className="core-initials">KA.</div>
              <div className="core-ring"></div>
            </div>

            <div className="floating-card card-learner">
              <span className="floating-icon">⌘</span>
              <div>
                <strong>Learner</strong>
                <small>Always improving</small>
              </div>
            </div>

            <div className="floating-card card-developer">
              <span className="floating-icon">&lt;/&gt;</span>
              <div>
                <strong>Developer</strong>
                <small>Building solutions</small>
              </div>
            </div>

            <div className="floating-card card-creator">
              <span className="floating-icon">↗</span>
              <div>
                <strong>Creator</strong>
                <small>Turning ideas into reality</small>
              </div>
            </div>

            <div className="floating-card card-solver">
              <span className="floating-icon">◎</span>
              <div>
                <strong>Problem Solver</strong>
                <small>Solving real-world problems</small>
              </div>
            </div>

          </div>

        </div>


        {/* ================= SCROLL ================= */}

        <a href="#featured" className="scroll-prompt">
          <span>SCROLL TO EXPLORE</span>
          <b>↓</b>
        </a>


        {/* ================= FEATURED SKILLVERSE ================= */}

        <div id="featured" className="featured-project">

          <div className="project-visual">
            <div className="project-orbit orbit-a"></div>
            <div className="project-orbit orbit-b"></div>

            <div className="compass-symbol">
              ✦
            </div>

            <span className="project-star star-one">✦</span>
            <span className="project-star star-two">✧</span>
            <span className="project-star star-three">✦</span>
          </div>


          <div className="project-info">

            <p className="project-label">
              FEATURED PROJECT
            </p>

            <h2>
              Skill<span>Verse</span>
            </h2>

            <h3>The Career Guide.</h3>

          </div>


          <div className="project-description">

            <p>
              A career guidance platform that helps users discover suitable
              careers and roles based on their personality and manage their
              learning journey with plans and schedules.
            </p>

            <div className="development-status">
              <span></span>
              CURRENTLY IN DEVELOPMENT
            </div>

          </div>


          <div className="project-cta">

            <span>✦</span>

            <p>
              Want to see what
              <strong>I'm building?</strong>
            </p>

            <a href="#skillverse">
              Explore SkillVerse
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* ================= TECH STRIP ================= */}

        <div className="tech-strip">

          <span className="tech-heading">
            TECH I WORK WITH
          </span>

          <span>🐍 Python</span>
          <span>◈ C++</span>
          <span>◆ Git</span>
          <span>● GitHub</span>
          <span>⌘ VS Code</span>
          <span>✦ Figma</span>
          <span>& More</span>

        </div>

      </section>


      {/* ================= EXISTING CONTENT PLACEHOLDER ================= */}

<section id="about" className="about-page">

  <div className="about-header">
    <div>
      <p className="section-label">THE CREATOR / 02</p>

      <h2>
        Building with
        <span> purpose.</span>
      </h2>
    </div>

    <p className="about-intro">
      I'm Kainat Aslam, a Software Engineering student and Python developer
      who enjoys turning ideas into practical digital products.
    </p>
  </div>


  <div className="about-grid">

    {/* LEFT — IDENTITY CARD */}

    <div className="about-profile-card">

      <div className="profile-number">
        01
      </div>

      <div className="profile-monogram">
        KA<span>.</span>
      </div>

      <div className="profile-bottom">
        <div>
          <strong>Kainat Aslam</strong>
          <span>Software Engineering Student</span>
        </div>

        <span className="profile-status">
          AVAILABLE
        </span>
      </div>

    </div>


    {/* RIGHT — STORY */}

    <div className="about-story">

      <div className="story-block">
        <span className="story-number">01</span>

        <div>
          <h3>Curious by nature.</h3>

          <p>
            I like understanding how things work, breaking problems into
            smaller pieces, and learning by actually building.
          </p>
        </div>
      </div>


      <div className="story-block">
        <span className="story-number">02</span>

        <div>
          <h3>Focused on real problems.</h3>

          <p>
            My goal isn't to build software just for the sake of building.
            I want my projects to have a clear purpose and provide something
            useful to the people who use them.
          </p>
        </div>
      </div>


      <div className="story-block">
        <span className="story-number">03</span>

        <div>
          <h3>Learning through creation.</h3>

          <p>
            Every project is an opportunity to improve my engineering skills,
            experiment with ideas, and move one step closer to becoming a
            stronger software engineer.
          </p>
        </div>
      </div>

    </div>

  </div>


  {/* CURRENT DIRECTION */}

  <div className="about-direction">

    <div>
      <p className="section-label">CURRENT DIRECTION</p>

      <h3>
        Learn.
        <span> Build.</span>
        <span> Improve.</span>
      </h3>
    </div>

    <p>
      Currently exploring software development, problem solving, product
      thinking, and building projects that combine technology with practical
      everyday needs.
    </p>

  </div>

</section>

<section id="skills" className="skills-page">

  <div className="skills-header">
    <div>
      <p className="section-label">CURRENT TOOLKIT / 03</p>

      <h2>
        Tools I use
        <span> to build.</span>
      </h2>
    </div>

    <p className="skills-intro">
      A growing toolkit shaped by projects, experimentation, and
      continuous learning.
    </p>
  </div>


  <div className="skills-grid">

    {/* LANGUAGES */}

    <div className="skill-category">
      <div className="skill-category-top">
        <span>01</span>
        <span>LANGUAGES</span>
      </div>

      <div className="skill-list">
        <div className="skill-item">
          <strong>Python</strong>
          <span>Primary</span>
        </div>

        <div className="skill-item">
          <strong>JavaScript</strong>
          <span>Working</span>
        </div>

        <div className="skill-item">
          <strong>HTML</strong>
          <span>Working</span>
        </div>

        <div className="skill-item">
          <strong>CSS</strong>
          <span>Working</span>
        </div>
      </div>
    </div>


    {/* DEVELOPMENT */}

    <div className="skill-category">
      <div className="skill-category-top">
        <span>02</span>
        <span>DEVELOPMENT</span>
      </div>

      <div className="skill-list">
        <div className="skill-item">
          <strong>React</strong>
          <span>Working</span>
        </div>

        <div className="skill-item">
          <strong>Git</strong>
          <span>Working</span>
        </div>

        <div className="skill-item">
          <strong>GitHub</strong>
          <span>Working</span>
        </div>

        <div className="skill-item">
          <strong>REST APIs</strong>
          <span>Exploring</span>
        </div>
      </div>
    </div>


    {/* FOUNDATIONS */}

    <div className="skill-category">
      <div className="skill-category-top">
        <span>03</span>
        <span>FOUNDATIONS</span>
      </div>

      <div className="skill-list">
        <div className="skill-item">
          <strong>OOP</strong>
          <span>Strong</span>
        </div>

        <div className="skill-item">
          <strong>Data Structures</strong>
          <span>Learning</span>
        </div>

        <div className="skill-item">
          <strong>Problem Solving</strong>
          <span>Strong</span>
        </div>

        <div className="skill-item">
          <strong>Software Engineering</strong>
          <span>Growing</span>
        </div>
      </div>
    </div>


    {/* CURRENTLY EXPLORING */}

    <div className="skill-category skill-category-featured">
      <div className="skill-category-top">
        <span>04</span>
        <span>CURRENTLY EXPLORING</span>
      </div>

      <div className="exploring-content">

        <div className="exploring-orb">
          <span>+</span>
        </div>

        <div>
          <h3>Always learning.</h3>

          <p>
            New technologies, better development practices, and
            stronger ways to turn ideas into useful software.
          </p>
        </div>

      </div>
    </div>

  </div>


  <div className="skills-footer">

    <span>THE TOOLKIT IS ALWAYS EVOLVING.</span>

    <div className="skills-line"></div>

    <span>03 / 04</span>

  </div>

</section>

<section id="projects" className="projects-page">

  <div className="projects-header">
    <div>
      <p className="section-label">SELECTED WORK / 04</p>

      <h2>
        Things I've
        <span> built.</span>
      </h2>
    </div>

    <p className="projects-intro">
      A collection of projects where ideas become practical software,
      experiments, and experiences.
    </p>
  </div>


  {/* FEATURED PROJECT */}

  <article className="featured-project">

    <div className="project-visual">

      <div className="project-glow"></div>

      <div className="project-logo">
        <span>SV</span>
      </div>

      <div className="project-orbit orbit-one"></div>
      <div className="project-orbit orbit-two"></div>

      <div className="project-floating-card card-top">
        PERSONALITY
      </div>

      <div className="project-floating-card card-bottom">
        CAREER → ROLE
      </div>

    </div>


    <div className="project-info">

      <div className="project-meta">
        <span>01 / FEATURED</span>
        <span>CAREER GUIDANCE</span>
      </div>

      <h3>SkillVerse</h3>

      <p className="project-tagline">
        Find your direction. Build your path.
      </p>

      <p className="project-description">
        SkillVerse is a career guidance and schedule management platform
        designed to help people discover suitable career paths and roles
        through personality insights, then organize their learning around
        a personal plan.
      </p>


      <div className="project-features">

        <span>Personality Test</span>
        <span>Career Discovery</span>
        <span>Role Matching</span>
        <span>Learning Planning</span>
        <span>Schedule Management</span>

      </div>


      <div className="project-actions">

        <a href="#" className="project-button">
          VIEW PROJECT
          <span>↗</span>
        </a>

        <a href="#" className="project-link">
          SOURCE CODE ↗
        </a>

      </div>

    </div>

  </article>


  {/* OTHER PROJECTS */}

  <div className="projects-grid">

    <article className="project-card">

      <div className="project-card-number">02</div>

      <div className="project-card-content">

        <span className="project-type">
          PYTHON / SOFTWARE
        </span>

        <h3>Python Projects</h3>

        <p>
          Practical Python experiments and applications built while
          developing stronger programming and problem-solving skills.
        </p>

        <span className="project-card-link">
          EXPLORING ↗
        </span>

      </div>

    </article>


    <article className="project-card">

      <div className="project-card-number">03</div>

      <div className="project-card-content">

        <span className="project-type">
          WEB / FRONTEND
        </span>

        <h3>Web Experiments</h3>

        <p>
          Interfaces and frontend experiments focused on responsive
          layouts, interaction, typography, and visual design.
        </p>

        <span className="project-card-link">
          BUILDING ↗
        </span>

      </div>

    </article>

  </div>


  <div className="projects-footer">
    <span>BUILDING IN PUBLIC, ONE PROJECT AT A TIME.</span>
    <div></div>
    <span>04 / 06</span>
  </div>

</section>

<section id="skillverse" className="skillverse-page">

  <div className="skillverse-hero">

    <div className="skillverse-hero-top">
      <p className="section-label">FEATURED PROJECT / 05</p>
      <span>CAREER GUIDANCE PLATFORM</span>
    </div>

    <h2>
      Skill<span>Verse.</span>
    </h2>

    <p className="skillverse-tagline">
      Find your direction. Build your path.
    </p>

    <p className="skillverse-lead">
      A career guidance and schedule management platform designed to
      help people discover suitable career paths, understand possible
      roles, and organize their learning journey.
    </p>

  </div>


  <div className="skillverse-showcase">

    <div className="skillverse-visual">

      <div className="sv-glow"></div>

      <div className="sv-center">
        <span>SV</span>
      </div>

      <div className="sv-ring sv-ring-one"></div>
      <div className="sv-ring sv-ring-two"></div>
      <div className="sv-ring sv-ring-three"></div>

      <div className="sv-label sv-label-one">
        PERSONALITY
      </div>

      <div className="sv-label sv-label-two">
        CAREER
      </div>

      <div className="sv-label sv-label-three">
        ROLE
      </div>

    </div>


    <div className="skillverse-overview">

      <span className="sv-small-label">
        PROJECT OVERVIEW
      </span>

      <h3>
        Turning uncertainty
        <span> into direction.</span>
      </h3>

      <p>
        SkillVerse brings personality insights, career discovery,
        role matching, learning planning, and schedule management
        together in one experience.
      </p>

      <div className="sv-stats">

        <div>
          <strong>01</strong>
          <span>PERSONALITY</span>
        </div>

        <div>
          <strong>02</strong>
          <span>CAREER PATH</span>
        </div>

        <div>
          <strong>03</strong>
          <span>ROLE MATCH</span>
        </div>

        <div>
          <strong>04</strong>
          <span>PLAN</span>
        </div>

      </div>

    </div>

  </div>


  <div className="skillverse-sections">

    <div className="sv-info-block">

      <span>01 / THE IDEA</span>

      <h3>
        Helping people
        <span> choose a direction.</span>
      </h3>

      <p>
        Choosing a career can feel overwhelming when interests,
        abilities, and possible roles aren't clearly connected.
        SkillVerse approaches that problem by turning those pieces
        into a guided journey.
      </p>

    </div>


    <div className="sv-info-block">

      <span>02 / THE JOURNEY</span>

      <div className="sv-journey">

        <div>
          <b>01</b>
          <strong>Personality</strong>
          <p>Understand yourself.</p>
        </div>

        <div>
          <b>02</b>
          <strong>Career</strong>
          <p>Explore possible paths.</p>
        </div>

        <div>
          <b>03</b>
          <strong>Role</strong>
          <p>Discover suitable roles.</p>
        </div>

        <div>
          <b>04</b>
          <strong>Plan</strong>
          <p>Organize the next steps.</p>
        </div>

      </div>

    </div>

  </div>


  <div className="sv-tech-section">

    <div>
      <span>03 / TECHNOLOGY</span>

      <h3>
        Built to
        <span> keep growing.</span>
      </h3>
    </div>

    <div className="sv-tech-list">
      <span>PYTHON</span>
      <span>JAVASCRIPT</span>
      <span>REACT</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>GIT</span>
      <span>GITHUB</span>
    </div>

  </div>


  <div className="sv-actions">

    <div>
      <span>READY TO EXPLORE?</span>
      <h3>See SkillVerse in action.</h3>
    </div>

    <div className="sv-action-buttons">

      <a
        href="https://github.com/Qaynaat/SkillVerse"
        className="project-button"
      >
        VIEW LIVE PROJECT
        <span>↗</span>
      </a>
      <a
        href="https://github.com/Qaynaat/SkillVerse"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        SOURCE CODE ↗
      </a>

    </div>

  </div>


  <div className="skillverse-footer">
    <span>SKILLVERSE / FEATURED PROJECT</span>
    <div></div>
    <span>05 / 06</span>
  </div>

</section>

<section id="contact" className="contact-page">

  <div className="contact-top">

    <p className="section-label">GET IN TOUCH / 05</p>

    <h2>
      Let's build
      <span> something.</span>
    </h2>

    <p className="contact-intro">
      Have an idea, project, opportunity, or simply want to connect?
      I'd be happy to hear from you.
    </p>

  </div>


  <div className="contact-content">

    <div className="contact-main">

      <span className="contact-small">
        START A CONVERSATION
      </span>

      <a
        href="mailto:kainat.aslam.se@gmail.com"
        className="email-link"
      >
        kainat.aslam.se@gmail.com
        <span>↗</span>
      </a>

    </div>


    <div className="contact-links">

      <a
        href="https://github.com/Qaynaat"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <span>GITHUB</span>
        <span>↗</span>
      </a>

      <a
        href="https://www.linkedin.com/in/kainat-aslam-48a55a431"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <span>LINKEDIN</span>
        <span>↗</span>
      </a>

      <a
        href="mailto:kainat.aslam.se@gmail.com"
        className="contact-link"
      >
        <span>EMAIL</span>
        <span>↗</span>
      </a>

    </div>

  </div>


  <div className="contact-bottom">

    <div className="contact-orbit">
      <span>KA.</span>
    </div>

    <div className="contact-message">
      <p>KEEP BUILDING.</p>
      <strong>KEEP LEARNING.</strong>
    </div>

  </div>


  <footer className="portfolio-footer">

    <span>© 2026 KAINAT ASLAM</span>

    <span>SOFTWARE ENGINEERING / PYTHON / WEB</span>

    <span>05 / 05</span>

  </footer>

</section>

      <footer>
        <p>© {new Date().getFullYear()} Kainat Aslam</p>
        <p>Built with curiosity & code.</p>
      </footer>

    </main>
  );
}

export default App;