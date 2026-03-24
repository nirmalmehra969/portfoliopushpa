import React from 'react'

const App = () => {
  const projects = [
    {
      title: "MediCare – Hospital Management System",
      description: "Developed a full-stack hospital management system that manages patients, doctors, appointments, and medical records.",
      features: [
        "Patient and doctor record management",
        "Appointment scheduling system",
        "Secure report upload and viewing",
        "Automated email and SMS reminders",
        "Responsive dashboard"
      ],
      tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
      title: "Smart Ticket – Chatbot Online Ticketing System",
      description: "Developed an online ticket booking system with chatbot-assisted navigation.",
      features: [
        "Event browsing and ticket booking",
        "Secure payment handling",
        "Chatbot-assisted user interaction",
        "Backend APIs for auth",
        "Smart suggestions"
      ],
      tech: ["React.js", "Node.js", "MongoDB"]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "C++", "JavaScript"],
    "Web Development": ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"],
    "Tools & Platforms": ["Git", "GitHub", "Power BI", "Tableau", "MySQL", "MongoDB", "Postman", "Figma"],
    "Core Computer Science": ["DBMS", "Operating Systems", "Computer Networks", "OOPs", "SQL"],
    "Soft Skills": ["Problem Solving", "Leadership", "Time Management", "Adaptability", "Quick Learner"]
  };

  return (
    <div className="portfolio">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav>
        <div className="container nav-container">
          <div className="logo">PushpRaj</div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="container hero-content">
            <h1>Pushp Raj</h1>
            <p className="title">Computer Science Engineering Student | Full Stack Developer | Data Analytics Enthusiast</p>
            <p className="intro">
              I am a Computer Science Engineering student at Lovely Professional University with a strong interest in building modern web applications and data-driven solutions. I enjoy solving complex problems and creating scalable systems using modern technologies like React, Node.js, and data analytics tools.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="/puspraj cv.pdf" className="btn btn-secondary" target="_blank">Download Resume</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container">
          <h2 className="section-title">About Me</h2>
          <div className="glass-card about-grid">
            <div className="about-text">
              <p>I am currently pursuing a Bachelor of Technology in Computer Science and Engineering from Lovely Professional University.</p>
              <p>I am passionate about software development, data analytics, and building efficient systems. I enjoy working with modern technologies and continuously learning new tools that help solve real-world problems.</p>
              <p>My interests include web development, backend systems, and data visualization. I aim to build impactful digital products that improve user experiences and decision-making.</p>
            </div>
            <div className="about-img-container">
               <img 
                src="/Puspa Image.jpg" 
                alt="Pushp Raj" 
                className="about-img"
               />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-2">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="glass-card skill-category">
                <h3>{category}</h3>
                <div className="skill-list">
                  {list.map(skill => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="glass-card project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Section */}
        <section id="training" className="container">
          <h2 className="section-title">Training & Experience</h2>
          <div className="glass-card">
            <h3 className="item-title">Data Science Training – Lovely Professional University</h3>
            <p className="item-subtitle">Completed hands-on training in Data Science focusing on business intelligence and data visualization.</p>
            <div className="grid grid-2" style={{ marginTop: '2rem' }}>
              <div>
                <h4>Key Learnings:</h4>
                <ul className="project-features">
                  <li>Built Power BI dashboards</li>
                  <li>Data cleaning using Power Query</li>
                  <li>Data modeling and relationships</li>
                  <li>DAX measures for analytics</li>
                </ul>
              </div>
              <div>
                <h4>Tools Used:</h4>
                <div className="skill-list">
                  {["Power BI", "DAX", "Power Query", "Data Modeling"].map(tool => (
                    <span key={tool} className="tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certificates */}
        <section id="education" className="container">
          <div className="grid grid-2">
            <div className="glass-card">
              <h2 className="section-title" style={{ position: 'static', transform: 'none', textAlign: 'left', marginBottom: '2rem' }}>Education</h2>
              <div className="edu-item">
                <h4 className="item-title">Lovely Professional University</h4>
                <p className="item-subtitle">B.Tech in Computer Science Engineering</p>
              </div>
              <div className="edu-item">
                <h4 className="item-title">PPM Public School, Bihar</h4>
                <p className="item-subtitle">Intermediate – 83%</p>
              </div>
              <div className="edu-item">
                <h4 className="item-title">PPS Public School, Bihar</h4>
                <p className="item-subtitle">Matriculation – 86%</p>
              </div>
            </div>
            
            <div className="glass-card">
              <h2 className="section-title" style={{ position: 'static', transform: 'none', textAlign: 'left', marginBottom: '2rem' }}>Certifications</h2>
              <div className="cert-item">
                <h4 className="item-title" style={{ color: 'var(--accent-purple)' }}>Cloud Computing</h4>
                <p className="item-subtitle">NPTEL Certification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="glass-card">
            <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '1.2rem' }}>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="contact-links">
              <a href="mailto:pushpraj1804@gmail.com" className="contact-item">Email Me</a>
              <a href="https://github.com/pushpraj1804" target="_blank" className="contact-item">GitHub</a>
              <a href="https://linkedin.com/in/pushpraj1804" target="_blank" className="contact-item">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Pushp Raj. Built with React & Passion.</p>
      </footer>
    </div>
  );
};

export default App;
