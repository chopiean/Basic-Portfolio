import "./App.css";

export default function PortfolioWebsite() {
  const skills = [
    "React",
    "TypeScript",
    "Python",
    "Javascript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "Git",
    "REST APIs",
  ];

  const projects = [
    {
      title: "Personal Finance Manager",
      link: "https://github.com/chopiean/Personal-Finance-Manager",
      description:
        "A full-stack web application for tracking income, expenses, and savings with a clean dashboard and secure authentication.",
      stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
      highlights: [
        "Built a responsive dashboard for financial overview and trends",
        "Integrated frontend with backend APIs and JWT authentication",
        "Designed a clean UI focused on usability and clarity",
      ],
    },
    {
      title: "Smart Budget Tracker",
      link: "https://github.com/chopiean/Smart-Budget-Tracker",
      description:
        "A full-stack application for tracking expenses, analyzing spending habits, and managing personal budgets effectively.",
      stack: ["React Native", "TypeScript", "Expo", "SQLite"],
      highlights: [
        "Built features for tracking income and expenses in real time",
        "Implemented data visualization for spending insights",
        "Designed user-friendly interface for budget management",
      ],
    },
    {
      title: "Quizzer",
      link: "https://github.com/Project-Quiz-Masters",
      description:
        "A quiz platform project developed with a modern frontend and backend workflow, focused on maintainable structure and user interaction.",
      stack: ["React", "TypeScript", "Spring Boot", "H2"],
      highlights: [
        "Worked with frontend routing and quiz interaction flows",
        "Connected application layers through REST endpoints",
        "Improved understanding of project setup, debugging, and structure",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide">An Le</p>
            <p className="text-sm text-slate-400">
              BIT Student • Frontend / Full-Stack Developer
            </p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Open to internship opportunities
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Building clean, user-focused web experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I’m a Business Information Technology student in Finland with a
              strong interest in frontend development, UX-minded design, and
              full-stack application building using React, TypeScript, and
              modern backend tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/5">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Focus Areas
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xl font-semibold">Frontend</p>
                  <p className="mt-2 text-sm text-slate-400">
                    React, TypeScript, Tailwind CSS, UI structure
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xl font-semibold">Backend</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Node.js, Express, Spring Boot, APIs
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xl font-semibold">Databases</p>
                  <p className="mt-2 text-sm text-slate-400">
                    PostgreSQL, H2, relational data design
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xl font-semibold">Mindset</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Problem-solving, learning fast, clear communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 max-w-3xl text-slate-300 leading-8">
              I am a third-year Business Information Technology student
              interested in building practical digital products that are both
              functional and easy to use. I enjoy turning ideas into interfaces,
              connecting frontend applications to backend services, and solving
              technical problems step by step. My goal is to grow through real
              projects where I can contribute, learn from a team, and keep
              improving as a developer.
            </p>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Skills
              </p>
              <h2 className="mt-2 text-3xl font-bold">Tools I work with</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold">Selected Work</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <h3 className="text-2xl font-semibold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 hover:underline transition"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900 px-3 py-1 text-xs text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 text-cyan-300">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Strengths
              </p>
              <h2 className="mt-2 text-3xl font-bold">What I bring</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>
                  Strong interest in frontend development and user experience
                </li>
                <li>
                  Ability to learn tools quickly and apply them in projects
                </li>
                <li>Persistence in debugging and solving technical issues</li>
                <li>
                  Clear communication in team-based academic and project work
                </li>
              </ul>
            </div>

            <div
              id="contact"
              className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Let’s connect
              </h2>
              <p className="mt-4 max-w-md leading-7 text-slate-200">
                I’m currently looking for internship opportunities where I can
                contribute to frontend or full-stack development projects and
                continue growing in a professional team.
              </p>
              <div className="mt-6 space-y-3 text-slate-100">
                <p>Gmail: hongan101003@gmail.com</p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/an-le-34491a308/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:underline"
                  >
                    Linkedln: An Le
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/chopiean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:underline"
                  >
                    Github: chopiean
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
