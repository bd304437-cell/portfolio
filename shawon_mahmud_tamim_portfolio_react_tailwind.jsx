/*
SHAWON MAHMUD TAMIM - Personal Portfolio (Single-file React component)
Tech: React + Tailwind CSS + Framer Motion
Instructions:
 - Add this component into a React app (create-react-app / Vite).
 - Ensure Tailwind CSS is configured in the project. 
 - Add Framer Motion: `npm i framer-motion`
 - Add Poppins font in public/index.html: 
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"> 
 - For contact email: replace FORM_ENDPOINT with your Formspree endpoint or another backend.
 - Customize images, text and colors easily via the top-level constants below.
*/

import React from 'react'
import { motion } from 'framer-motion'

// ---------- CONFIG: edit these to customize quickly ----------
const SITE = {
  name: "SHAWON MAHMUD TAMIM",
  title: "Graphic Designer & Visual Creator",
  accent: "#06b6d4", // accent color (Tailwind cyan-400 like)
  googleFont: 'Poppins, sans-serif',
}

// Replace with your Formspree endpoint or server endpoint
const FORM_ENDPOINT = 'https://formspree.io/f/your_form_id' // <-- replace

const skills = ['Photoshop', 'Illustrator', 'After Effects', 'Canva']

const portfolioItems = [
  { id: 1, title: 'Brand Identity — Cafe', src: 'https://source.unsplash.com/collection/190727/800x600?sig=1', alt: 'Brand identity sample' },
  { id: 2, title: 'Poster — Music Fest', src: 'https://source.unsplash.com/collection/190727/800x600?sig=2', alt: 'Poster design sample' },
  { id: 3, title: 'Social Post Set', src: 'https://source.unsplash.com/collection/190727/800x600?sig=3', alt: 'Social post sample' },
  { id: 4, title: 'Packaging Concept', src: 'https://source.unsplash.com/collection/190727/800x600?sig=4', alt: 'Packaging sample' },
  { id: 5, title: 'Motion Graphics Frame', src: 'https://source.unsplash.com/collection/190727/800x600?sig=5', alt: 'Motion graphics sample' },
  { id: 6, title: 'Custom Illustration', src: 'https://source.unsplash.com/collection/190727/800x600?sig=6', alt: 'Illustration sample' },
]

// ---------- Small animation helpers ----------
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function PortfolioApp() {
  return (
    <div className="min-h-screen text-gray-900 bg-white" style={{ fontFamily: SITE.googleFont }}>
      {/* Page meta (SEO): add real tags into public/index.html or use react-helmet in your full app */}

      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">{SITE.name}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#portfolio" className="hover:text-gray-700">Portfolio</a>
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <div className="md:hidden">
            {/* Simple mobile anchor nav: for fuller experience add a hamburger + menu state */}
            <a href="#contact" className="text-sm px-3 py-1 border rounded">Contact</a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I’m <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${SITE.accent}, #7c3aed)` }}>SHAWON MAHMUD TAMIM</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700">{SITE.title}</p>

              <div className="mt-8 flex gap-4">
                <a href="#portfolio" className="inline-block px-5 py-3 rounded-lg font-medium shadow-sm" style={{ backgroundColor: SITE.accent, color: 'white' }}>
                  View My Work
                </a>
                <a href="#contact" className="inline-block px-5 py-3 rounded-lg border font-medium text-sm">Hire Me</a>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <strong>Skills:</strong> {skills.join(' • ')}
              </div>
            </motion.div>

            <motion.div className="flex justify-center md:justify-end" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
              {/* Hero visual: placeholder - replace with your own artwork or PNG */}
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border">
                <img src="https://source.unsplash.com/collection/190727/800x600?sig=10" alt="hero sample" className="w-full h-64 object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} className="text-2xl font-semibold">About Me</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-gray-700 max-w-3xl">
                I’m a passionate graphic designer focused on clean, modern visual communication. I create brand identities, social campaigns, and motion pieces that help businesses and creators stand out.
                I enjoy working end-to-end — from concept sketches to finished visuals and motion edits.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border"> 
                  <h4 className="font-medium">My Tools</h4>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    {skills.map(s => (<li key={s}>• {s}</li>))}
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-medium">Working Style</h4>
                  <p className="mt-2 text-sm text-gray-600">Clear communication, creative exploration, and punctual delivery. I prefer minimal aesthetics with strong concept-driven visuals.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-semibold">Portfolio</motion.h2>
            <motion.p className="mt-2 text-gray-600">Selected works — click to preview (images are placeholders).</motion.p>

            <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {portfolioItems.map(item => (
                <motion.figure variants={fadeUp} key={item.id} className="rounded-lg overflow-hidden bg-white border shadow-sm hover:shadow-lg transition-shadow">
                  <a href={item.src} target="_blank" rel="noreferrer">
                    <img src={item.src} alt={item.alt} className="w-full h-44 object-cover" />
                  </a>
                  <figcaption className="p-4 text-sm">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-1">Branding • Print • Digital</div>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>

          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-semibold">Services</motion.h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Logo Design', desc: 'Clean, memorable marks and submarks.' },
                { title: 'Branding', desc: 'Identity systems, guidelines, stationery.' },
                { title: 'Social Media Posts', desc: 'Template sets, carousels and campaigns.' },
                { title: 'Motion Graphics', desc: 'Short loops, promos and logo reveals.' }
              ].map(s => (
                <motion.div key={s.title} whileHover={{ y: -6 }} className="p-5 bg-white rounded-2xl border shadow-sm">
                  <h4 className="font-medium">{s.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-semibold">Contact</motion.h2>
            <motion.p className="mt-2 text-gray-600">Interested in a project or collaboration? Drop a message below.</motion.p>

            <motion.form
              action={FORM_ENDPOINT}
              method="POST"
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input type="text" name="name" placeholder="Your name" required className="p-3 border rounded" />
              <input type="email" name="email" placeholder="Your email" required className="p-3 border rounded" />
              <textarea name="message" placeholder="Your message" required className="md:col-span-2 p-3 border rounded h-36" />

              {/* Add a hidden input for Formspree if required: <input type="hidden" name="_subject" value="New contact from portfolio"/> */}

              <div className="md:col-span-2 flex items-center gap-4">
                <button type="submit" className="px-5 py-3 rounded-lg font-medium" style={{ backgroundColor: SITE.accent, color: 'white' }}>Send Message</button>
                <span className="text-sm text-gray-500">Or email me directly at <strong>your-email@example.com</strong> (replace in code)</span>
              </div>
            </motion.form>

            <div className="mt-8 text-sm text-gray-500">Tip: For real email sending, use Formspree, Getform, Netlify Forms or connect to your own backend.</div>
          </div>
        </section>

      </main>

      <footer className="border-t bg-white/60 backdrop-blur-sm mt-20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
