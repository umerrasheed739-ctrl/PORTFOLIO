import React from 'react';

const Portfolio = () => {
  const profileData = {
    name: "Umer Rasheed",
    tagline: "Building Scalable Mobile & Web Solutions",
    location: "Rawalpindi, Pakistan",
    email: "umerrasheed739@gmail.com",
    phone: "+92 348 5791339",
    linkedin: "https://linkedin.com/in/umer-rasheed-90a865404",
    github: "https://github.com/umerrasheed739-ctrl",
    heroDescription: "Computer Science student entering my 7th semester, with practical academic exposure to object-oriented programming, web architectures, data science foundations, and mobile application frameworks."
  };

  const projects = [
    {
      title: "FlexForge - Fitness & Gym Web Platform",
      category: "REACT / TAILWIND",
      description: "Developed and deployed a responsive, dynamic web application featuring interactive workout schedules, service tiers, and modern landing interface.",
      tech: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      status: "Live Web App",
      liveLink: "https://flexforge-2026.netlify.app/",
      githubLink: "https://github.com/umerrasheed739-ctrl/flexforge"
    },
    {
      title: "ExamBuddy - Smart Study Planner",
      category: "JAVASCRIPT / WEB APP",
      description: "Interactive study schedule planner designed to optimize exam preparation by dynamically allocating daily study hours based on subject weightage and difficulty criteria.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      status: "Source Available",
      liveLink: null,
      githubLink: "https://github.com/umerrasheed739-ctrl/exambuddy-planner"
    },
    {
      title: "GeoTriage: AI Spatial Clustering Engine (FYP)",
      category: "PYTHON / AI / FYP PROJECT",
      description: "Final Year Project: Urban infrastructure risk prioritization engine utilizing AI-driven spatial clustering algorithms to evaluate geographical data points and prioritize maintenance operations.",
      tech: ["Python", "Machine Learning", "Spatial Databases", "Clustering"],
      status: "FYP Project",
      liveLink: null
    },
    {
      title: "AI-Powered Resume Analyzer",
      category: "FULL-STACK / AI",
      description: "Automated candidate resume parsing and scoring system engineered to match tech industry job descriptions using smart evaluation pipelines.",
      tech: ["React", "Tailwind CSS", "Python", "REST APIs"],
      status: "Active Project",
      liveLink: null,
      githubLink: "https://github.com/umerrasheed739-ctrl/ai-resume-analyzer"
    },
    {
      title: "W-LUXE - Premium E-Commerce Platform",
      category: "FULL-STACK / NODE.JS",
      description: "Developed a full-stack luxury clothing web platform with dynamic catalog filtering, interactive shopping cart, RESTful Express APIs, MongoDB database, and an Admin Order Control Panel.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML/CSS"],
      status: "Active Project",
      liveLink: null,
      githubLink: "https://github.com/umerrasheed739-ctrl/W-Luxe"
    },
    {
      title: "Full-Stack Web Portfolio & REST APIs",
      category: "PHP / LARAVEL",
      description: "Developed and deployed a responsive, dynamic portfolio website featuring secure CRUD operations for data management. Handled JSON response formatting and structured data flows.",
      tech: ["Laravel", "PHP", "MySQL", "REST API"],
      status: "Source Available",
      liveLink: null,
      githubLink: null
    },
    {
      title: "University Student Portal System",
      category: "C++ CORE",
      description: "Engineered a comprehensive terminal-based student management system demonstrating strong command over C++ fundamentals. Implemented file handling mechanisms to securely store and retrieve academic records.",
      tech: ["C++", "File Handling", "OOP"],
      status: "Source Available",
      liveLink: null,
      githubLink:null
    }
  ];

  return (
    <div className="bg-[#0b101d] text-slate-300 min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-black">
      
      {/* Top Navbar */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-white">
          <span className="text-cyan-400">&lt;</span>Umer<span className="text-cyan-400">/&gt;</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=umerrasheed739@gmail.com" 
          target="_blank" 
          rel="noreferrer"
          className="px-5 py-2 text-xs font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">Hi there, I am</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            {profileData.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400 mb-6">
            {profileData.tagline}
          </h2>
          <p className="text-slate-400 leading-relaxed text-base mb-8 max-w-xl">
            {profileData.heroDescription}
          </p>

          {/* Social Badges in Hero */}
          <div className="flex items-center gap-4 mb-8">
            <a 
              href={profileData.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-[#111726] text-slate-300 border border-slate-800 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a 
              href={profileData.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-[#111726] text-slate-300 border border-slate-800 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#projects" className="px-6 py-3 text-sm font-semibold text-black bg-cyan-400 rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-300 transition">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 text-sm font-semibold text-slate-200 border border-slate-700 rounded-lg hover:border-slate-500 hover:text-white transition">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile Circle with Glowing Border */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-900">
            <img 
              src="/profile.jpg" 
              alt="Umer Rasheed" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition duration-500"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/300/111827/38bdf8?text=Umer+Rasheed";
              }}
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 space-y-28 pb-20">

        {/* 01. About Me */}
        <section id="about" className="scroll-mt-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-xl">01.</span> About Me
            </h2>
            <div className="h-[1px] bg-slate-800 flex-1 max-w-md"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
              <p>
                I am currently pursuing my BS in Computer Science at NUML, Islamabad. My passion lies in solving complex problems through clean and efficient code, whether it's developing interactive mobile apps or building secure backend APIs.
              </p>
              <p>
                With strong logical reasoning developed through rigorous semester projects, I focus on creating seamless user experiences and robust architectures. I am always eager to learn new technologies and apply them to real-world infrastructure problems.
              </p>
            </div>

            {/* Education Box */}
            <div className="bg-[#111726]/80 border border-slate-800 p-6 rounded-2xl space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Education</h3>
              <div>
                <h4 className="font-semibold text-white text-base">BS Computer Science</h4>
                <p className="text-xs text-cyan-400 mt-0.5">NUML, Islamabad</p>
                <p className="text-xs text-slate-500 mt-1 font-mono">2023 — 2027</p>
              </div>
              <div className="border-t border-slate-800/80 pt-4">
                <h4 className="font-semibold text-slate-200 text-sm">ICS</h4>
                <p className="text-xs text-slate-400 mt-0.5">Steps College, Rawalpindi</p>
                <p className="text-xs text-slate-500 mt-1 font-mono">2021 — 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Core Capabilities */}
        <section id="skills" className="scroll-mt-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-xl">02.</span> Core Capabilities
            </h2>
            <div className="h-[1px] bg-slate-800 flex-1 max-w-md"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#111726]/80 border border-slate-800/80 p-6 rounded-2xl hover:border-cyan-500/40 transition">
              <h3 className="text-base font-bold text-cyan-400 mb-3">Programming</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-mono">
                C++, Java, Python, Dart, JavaScript, HTML/CSS
              </p>
            </div>

            <div className="bg-[#111726]/80 border border-slate-800/80 p-6 rounded-2xl hover:border-cyan-500/40 transition">
              <h3 className="text-base font-bold text-cyan-400 mb-3">Frameworks</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-mono">
                React, Flutter, Tailwind CSS, Node.js, Express.js, Laravel, Pandas
              </p>
            </div>

            <div className="bg-[#111726]/80 border border-slate-800/80 p-6 rounded-2xl hover:border-cyan-500/40 transition">
              <h3 className="text-base font-bold text-cyan-400 mb-3">Developer Tools</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-mono">
                VS Code, Git, GitHub, SQL, MongoDB, Android Studio
              </p>
            </div>
          </div>
        </section>

        {/* 03. Selected Projects */}
        <section id="projects" className="scroll-mt-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-xl">03.</span> Selected Projects
            </h2>
            <div className="h-[1px] bg-slate-800 flex-1 max-w-md"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-[#111726]/90 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase">
                      {proj.category}
                    </span>
                    <div className="flex items-center gap-3">
                      {proj.githubLink && (
                        <a href={proj.githubLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition" title="View Code">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        </a>
                      )}
                      {proj.liveLink && (
                        <a href={proj.liveLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition" title="Live Preview">
                          ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{proj.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{proj.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                    {proj.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Get In Touch */}
        <section id="contact" className="scroll-mt-10 text-center max-w-2xl mx-auto pt-6">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">04. What's Next?</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            I am currently looking for technical developer internship opportunities to accelerate my growth as a developer. Feel free to reach out via Email, WhatsApp, or connect on LinkedIn!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={`mailto:${profileData.email}`} className="bg-[#111726] border border-slate-800 hover:border-cyan-500/50 px-5 py-3 rounded-xl flex items-center gap-2 text-sm text-slate-200 transition">
              ✉️ {profileData.email}
            </a>
            <a href={`https://wa.me/${profileData.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="bg-[#111726] border border-slate-800 hover:border-cyan-500/50 px-5 py-3 rounded-xl flex items-center gap-2 text-sm text-emerald-400 transition">
              💬 WhatsApp
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="bg-[#111726] border border-slate-800 hover:border-cyan-500/50 px-5 py-3 rounded-xl flex items-center gap-2 text-sm text-blue-400 transition">
              🔗 LinkedIn
            </a>
            <a href={profileData.github} target="_blank" rel="noreferrer" className="bg-[#111726] border border-slate-800 hover:border-cyan-500/50 px-5 py-3 rounded-xl flex items-center gap-2 text-sm text-slate-300 transition">
              💻 GitHub
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-600 text-xs py-8 border-t border-slate-900/80 font-mono">
        <p>Designed & Built by Umer Rasheed</p>
        <p className="mt-1">{profileData.location}</p>
      </footer>
    </div>
  );
};

export default Portfolio;