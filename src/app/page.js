"use client";
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Home';
import About from './components/About'; // Import About component
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import Education from './components/Education';
import './globals.css'
export default function Home() {
  const [shouldVibrate, setShouldVibrate] = useState(false);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Set vibration after 3 seconds
    const timer = setTimeout(() => {
      setShouldVibrate(true);
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

 

  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Intro />
      <About /> {/* Add About component here */}
      <Education/>
      <Projects />
      <Contact />

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/03102866415" 
        className={`whatsapp-button ${shouldVibrate ? 'vibrate' : ''}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} color="white" />
      </a>

      <style jsx>{`  
        .container {
          background: rgb(2,0,36);
          background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(94,5,111,1) 37%, rgba(230,13,221,1) 47%, rgba(177,13,222,1) 56%, rgba(190,13,222,1) 56%, rgba(2,0,36,1) 66%, rgba(14,223,172,1) 100%, rgba(0,212,255,1) 100%);
          background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(94,5,111,1) 37%, rgba(230,13,221,1) 47%, rgba(177,13,222,1) 56%, rgba(190,13,222,1) 56%, rgba(2,0,36,1) 66%, rgba(14,223,172,1) 100%, rgba(0,212,255,1) 100%);
          background: linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(94,5,111,1) 37%, rgba(230,13,221,1) 47%, rgba(177,13,222,1) 56%, rgba(190,13,222,1) 56%, rgba(2,0,36,1) 66%, rgba(14,223,172,1) 100%, rgba(0,212,255,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
          min-height: 100vh;
        }

        /* WhatsApp button styles */
       /* WhatsApp button styles */
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

  /* Vibration animation */
  @keyframes vibrate {
    0%, 100% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, -2px);
    }
    40% {
      transform: translate(2px, -2px);
    }
    60% {
      transform: translate(-2px, 2px);
    }
    80% {
      transform: translate(2px, 2px);
    }
  }

  .vibrate {
    animation: vibrate 0.2s infinite;
  }

        /* Responsive layout */
        @media (max-width: 768px) {
          .container {
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,25,131,1) 39%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%);
          }
        }
      `}</style>
    </div>
  );
}
