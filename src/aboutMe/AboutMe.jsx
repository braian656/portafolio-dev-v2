import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";

export default function PresentationSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hola, Soy <span className="text-emerald-400/95">Braian</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Un apasionado <span className="text-indigo-300">Frontend Developer </span> 
          enfocado en crear hermosos, responsivo e interactivas experiencias web.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#project"
          className="inline-block bg-emerald-400/95  text-gray-900 px-6 py-3 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform mb-10"
        >
          Ver Proyecto
        </motion.a>

        {/* Redes sociales + Descargar CV */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <a
            href="https://github.com/braian656"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-carranza-437319254/?originalSubdomain=ar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="./Braian_carranza_dev.pdf"
            download
            className="hover:text-indigo-400 transition-colors flex items-center gap-2"
          >
            <FileDown size={28} /> <span className="text-sm">Download CV</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}