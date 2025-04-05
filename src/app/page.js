// app/page.js
export const metadata = {
  title: "Ali Jan Jameel | Fullstack JavaScript Developer",
  description: "Welcome to Ali Jan Jameel's portfolio. Fullstack JavaScript Developer skilled in React, Node.js, and building modern web applications.",
  keywords: ["Ali Jan Jameel", "Fullstack Developer", "JavaScript", "React", "Node.js", "Portfolio", "Web Development"],
  authors: [{ name: "Ali Jan Jameel" }],
  creator: "Ali Jan Jameel",
  openGraph: {
    title: "Ali Jan Jameel | Fullstack JavaScript Developer",
    description: "Explore Ali Jan's portfolio - Projects, Skills, and Contact Info.",
    url: "https://alijanportfolios.vercel.app",
    siteName: "Ali Jan Jameel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

"use client";

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaWhatsapp } from 'react-icons/fa';
import './globals.css';

export default function Home() {
  const [shouldVibrate, setShouldVibrate] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const timer = setTimeout(() => {
      setShouldVibrate(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container">
      <Navbar />

      <section id="intro"><Intro /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9203102866415"
        className={`whatsapp-button ${shouldVibrate ? 'vibrate' : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={40} color="white" />
      </a>

      <style jsx>{`
        .container {
          background: linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(94,5,111,1) 37%, rgba(230,13,221,1) 47%, rgba(177,13,222,1) 56%, rgba(190,13,222,1) 56%, rgba(2,0,36,1) 66%, rgba(14,223,172,1) 100%);
          min-height: 100vh;
        }

        .whatsapp-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #25D366;
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s;
        }

        .whatsapp-button:hover {
          background: #128C7E;
        }

        @keyframes vibrate {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 2px); }
          80% { transform: translate(2px, 2px); }
        }

        .vibrate {
          animation: vibrate 0.2s infinite;
        }

        @media (max-width: 768px) {
          .container {
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,25,131,1) 39%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%);
          }
        }
      `}</style>
    </main>
  );
}
