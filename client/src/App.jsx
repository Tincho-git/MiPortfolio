import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const projects = [
  {
    title: 'Backend Flota de Camiones',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/Gabriel6144/Trabajo-Practico-Integrador-Backend'
  },
  {
    title: 'Bot agendar parciales',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/Tincho-git/agente01.github.io'
  },
  {
    title: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/usuario/dashboard'
  }
];

const skills = [
  ['Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
  ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
  ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
  ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
  ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'],
  ['HTML', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
  ['CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
  ['SQL Server', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'],
  ['Base de datos', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
  ['Postman', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'],
  ['UML', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg'],
  ['Scrum', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg'],
  ['Linux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'],
  ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
  ['Docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
  ['Spring', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg']
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27h-.03ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.3-1.68-1.3-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.76 2.72 1.25 3.38.95.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.07.78 2.16v3.02c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'No se pudo enviar el mensaje.');
      }

      setStatus(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className={`app ${theme}`}>
      <nav className="topbar">
        <a className="brand" href="#sobre-mi" aria-label="Ir al inicio">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80"
            alt="Foto de perfil"
          />
        </a>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            <span className="toggle-icon sun-icon" aria-hidden="true">
              <FiSun />
            </span>
            <span className="toggle-icon moon-icon" aria-hidden="true">
              <FiMoon />
            </span>
            <span className="toggle-thumb" aria-hidden="true" />
          </button>
          <div className="nav-links">
            <a href="#sobre-mi">Sobre mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#skills">Skills</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="sobre-mi">
        <div className="hero-content">
          <p className="eyebrow">Portfolio personal</p>
          <h1>Martin Boiero</h1>
          <p className="intro">
            Soy un desarrollador en formacion con interes por crear soluciones web claras,
            funcionales y bien organizadas. Me gusta aprender nuevas tecnologias, trabajar en
            equipo y convertir ideas en proyectos reales.
          </p>
          <div className="social-actions">
            <a className="button linkedin" href="https://www.linkedin.com/in/martín-boiero-36383a322/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
              Mi LinkedIn
            </a>
            <a className="button github" href="https://github.com/Tincho-git" target="_blank" rel="noreferrer">
              <GitHubIcon />
              Mi GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="section-heading">
          <p className="eyebrow">Trabajos</p>
          <h2>Proyectos</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`Imagen representativa de ${project.title}`} />
              <div>
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer">Ver repositorio</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Conocimientos</p>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map(([name, icon]) => (
            <div className="skill" key={name}>
              <img src={icon} alt="" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div className="section-heading">
          <p className="eyebrow">Hablemos</p>
          <h2>Contacto</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tuemail@ejemplo.com" required />
          </label>
          <label>
            Mensaje
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Escribe tu mensaje" required />
          </label>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default App;
