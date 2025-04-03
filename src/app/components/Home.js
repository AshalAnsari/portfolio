import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next'; // Import Metadata if using Next.js App Router
import picture from '../ali.jpeg';

// Next.js Metadata for SEO (Only in App Router)
export const metadata = {
  title: 'Ali Jan Jameel | Portfolio',
  description: 'Welcome to Ali Jan Jameel’s portfolio. A passionate full-stack developer with expertise in JavaScript, Next.js, and React.',
  keywords: 'Ali Jan Jameel, portfolio, web developer, fullstack, JavaScript, Next.js, React',
  openGraph: {
    title: 'Ali Jan Jameel | Portfolio',
    description: 'Showcasing my best work as a web developer.',
    url: 'https://alijanportfolios.vercel.app/',
    siteName: 'Ali Jan Jameel Portfolio',
    images: [
      {
        url: 'https://alijanportfolios.vercel.app/ali.jpeg', // Ensure correct image URL
        width: 800,
        height: 600,
        alt: 'Ali Jan Jameel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle', // Replace with your Twitter username
    title: 'Ali Jan Jameel | Portfolio',
    description: 'Explore my projects and skills as a full-stack developer.',
    images: ['https://alijanportfolios.vercel.app/ali.jpeg'],
  },
  // **Google Search Console Verification**
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
            Hello! I'm a passionate developer with a love for creating web applications...
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
        .name-animation {
          font-size: 3rem;
          font-family: 'Protest Strike', sans-serif;
        }
        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }
        .blue { color: #3498db; }
        .gradient {
          background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(233,19,196,1) 78%, rgba(0,212,255,1) 94%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
