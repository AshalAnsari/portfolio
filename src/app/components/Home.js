import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js Image component
import picture from '../ali.jpeg';

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="content">
        <div className="text">
          <h1 className="name-animation">
            {'ALI JAN'.split('').map((char, index) => (
              <span
                key={`ali-jan-${index}`}
                className={`letter blue ${char === ' ' ? 'space' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {char}
              </span>
            ))}
            {'JAMEEL'.split('').map((char, index) => (
              <span
                key={`jameel-${index}`}
                className={`letter gradient ${char === ' ' ? 'space' : ''}`}
                style={{ animationDelay: `${(index + 7) * 0.2}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p>
            Hello! I'm a passionate developer with a love for creating web applications. My journey in technology began at a young age, and over the years, I've honed my skills in various programming languages and frameworks.
            I enjoy tackling complex problems and finding innovative solutions. 
            When I'm not coding, I like to explore new technologies, read books, and spend time with friends and family.
            I believe in continuous learning and strive to improve my craft every day.
            This portfolio showcases some of my best work, and I hope it gives you a glimpse into my skills and passions.
            Thank you for visiting!
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Londrina+Sketch&family=Protest+Strike&display=swap');
        .home-section {
          padding: 120px 20px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          background-color: rgba(0, 0, 0, 0.7);
        }

        .content {
          display: flex;
          max-width: 1200px;
          width: 100%;
          justify-content: space-between;
          gap: 80px;
        }

        .text {
          flex: 1;
        }

        .name-animation {
          font-size: 3rem;
          font-family: 'Protest Strike', sans-serif;
          font-weight: 400;
          font-style: normal;
          display: inline-block;
          white-space: nowrap;
        }

        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }

        .blue {
          color: #3498db;
        }

        .gradient {
          background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(233,19,196,1) 78%, rgba(0,212,255,1) 94%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .space {
          display: inline-block;
          width: 0.5rem; /* Space between words */
        }

        .text p {
          font-size: 1.25rem;
          line-height: 1.6;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .home-section {
            padding: 100px 20px;
          }

          .name-animation {
            font-size: 2rem;
          }

          .text p {
            font-size: 1rem;
          }

          .content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .name-animation {
            font-size: 1.5rem;
          }

          .text p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
