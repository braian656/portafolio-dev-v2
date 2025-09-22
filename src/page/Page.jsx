import React from "react";
import { motion } from "framer-motion";

// FeaturedPortfolio.jsx
// Single-file React component (default export) using Tailwind CSS and Framer Motion.
// Usage:
// 1. Ensure Tailwind CSS is configured in your project.
// 2. Install framer-motion: `npm install framer-motion`.
// 3. Place this file in your src/ (e.g. src/FeaturedPortfolio.jsx) and import it in App.jsx.

export default function FeaturedPortfolio() {
  const project = {
    title: "E-commmerce",
    tagline: "Una experiencia de comercio electrónico nítida y rápida",
    description:
      "Una tienda moderna de una sola página creada con React y patrones de interfaz de usuario de alto rendimiento. Centrada en la accesibilidad, la carga rápida y microinteracciones atractivas.",
    tech: ["React", "Tailwind CSS", "Vite", "Node.js", "Typescript", "Firebase"],
    url: "https://ecommercewithtsandreact.netlify.app",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-slate-100 flex items-center justify-center p-6 w-full">
      <section className="w-full max-w-5xl mx-auto" id="project"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 block" /> Featured
            </p>

            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              {project.title}
            </h1>

            <p className="text-lg text-slate-300">{project.tagline}</p>

            <p className="text-slate-300/90">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm text-sm border border-white/6"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <a
                href={project.url}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:scale-[1.02] active:scale-[0.99] transition-transform"
                aria-label={`Open ${project.title}`}
              >
                Ver Proyecto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <button
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="px-3 py-2 rounded-md border border-white/6 text-sm hover:bg-white/2 transition"
                aria-label="Copy link"
              >
                Copiar Link
              </button>
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-700/30 border border-white/6 shadow-2xl">
              {/* Hero image placeholder */}
              <div className="aspect-video w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 flex items-center justify-center">

                  <img src="./image/e-commerce.png" alt="" />
                {/* <svg
                  width="80%"
                  height="80%"
                  viewBox="0 0 1200 675"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90"
                >
                  <rect width="1200" height="675" rx="24" fill="url(#g)" />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0f1724" />
                      <stop offset="50%" stopColor="#1f2937" />
                      <stop offset="100%" stopColor="#0f1724" />
                    </linearGradient>
                  </defs>
                  <g fill="#9ca3af" opacity="0.95">
                    <rect x="80" y="80" width="450" height="300" rx="14" />
                    <rect x="560" y="120" width="520" height="420" rx="14" />
                  </g>
                </svg> */}

                  
              </div>

              {/* Footer with meta */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="text-xs text-slate-400">Featured project — live demo</p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.url}
                    className="text-xs px-3 py-1 rounded-full bg-white/6 border border-white/6"
                  >
                    Live
                  </a>

                  <span className="text-xs text-slate-400">Updated 2 weeks ago</span>
                </div>
              </div>
            </div>

            {/* subtle background glow */}
            <div className="pointer-events-none absolute -inset-6 blur-3xl opacity-30 bg-gradient-to-r from-emerald-500/30 to-indigo-500/20 rounded-3xl" />
          </motion.div>
        </div>

        {/* small footer */}
        <footer className="mt-12 text-center text-xs text-slate-500">
          Built with React
        </footer>
      </section>
    </main>

   

    
  );
}
