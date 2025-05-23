'use client';
import React from 'react';

export const metadata = {
  title: 'Ashal Ansari | Portfolio',
  description: 'Welcome to Ashal Ansari’s portfolio. A passionate full-stack developer with expertise in JavaScript, React, and Flutter.',
  keywords: 'Ashal Ansari, portfolio, web developer, fullstack, JavaScript, React, Flutter',
  openGraph: {
    title: 'Ashal Ansari | Portfolio',
    description: 'Showcasing my best work as a web developer.',
    url: 'https://myportfolio-ebon-delta-91.vercel.app/',
    siteName: 'Ashal Ansari Portfolio',
    images: [
      {
        // url: 'https://ashalansari.vercel.app/ali.jpeg',
        width: 800,
        height: 600,
        alt: 'Ashal Ansari',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
    title: 'Ashal Ansari | Portfolio',
    description: 'Explore my projects and skills as a full-stack developer.',
    // images: ['https://ashalansari.vercel.app/ali.jpeg'],
  },
  other: {
    'google-site-verification': 'a1wDhGiYpgrA_io3XMAAa4HBO8bfzQDbpCMXPc3Iano',
  },
};

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="content">
        <div className="text">
          <h1 className="name-animation">
            {'Ashal Ansari'.split('').map((char, index) => (
              <span
                key={`Ashal Ansari-${index}`}
                className={`letter blue `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </h1>

          <p className="description">
            I'm a full-stack developer with a strong foundation in JavaScript, React, and Flutter. 
            I love solving problems, building efficient systems, and crafting beautiful user experiences.
            Whether it's frontend design or backend logic, I enjoy every part of the development journey.
          </p>
        </div>

        {/* <div className="image">
          <Image src={picture} alt="Ashal Ansari" width={250} height={250} className="profile-pic" />
        </div> */}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Londrina+Sketch&family=Protest+Strike&display=swap');

        .home-section {
          padding: 120px 20px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          margin-top:40px
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
        }

        .text {
          margin-bottom: 20px;

        }

        .name-animation {
          font-size: 3.5rem;
          font-family: 'Protest Strike', sans-serif;
          margin-bottom: 20px;
        }

        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }

        .blue {
          color: #00acee;
        }

        .gradient {
          background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(233,19,196,1) 78%, rgba(0,212,255,1) 94%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #f1f1f1;
          max-width: 700px;
        }

        .profile-pic {
          border-radius: 50%;
          border: 3px solid #00acee;
          box-shadow: 0 4px 20px rgba(0, 172, 238, 0.4);
          margin-top: 30px;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 768px) {
          .content {
            flex-direction: row;
            text-align: left;
          }

          .text {
            flex: 1;
            margin-right: 40px;
           
          }
       .image {
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
