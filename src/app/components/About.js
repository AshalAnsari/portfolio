import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaHtml5, FaDatabase } from 'react-icons/fa';

// Custom SVG component for the Next.js logo
const FlutterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.9736C24 19.0808 19.1974 23.9529 12.1322 23.9529C5.06705 23.9529 0.264648 19.0808 0.264648 12.9736C0.264648 6.8664 5.06705 1.99433 12.1322 1.99433C19.1974 1.99433 24 6.8664 24 12.9736Z" fill="white"/>
    <path d="M12.4421 14.732L6.5029 5.4509H7.92137L12.4431 12.2235L16.742 5.4509H18.1075L12.4421 14.732Z" fill="black"/>
    <path d="M17.7026 11.4821H19.0232V18.7188H17.7026V11.4821Z" fill="black"/>
  </svg>
);

const skills = [
  { name: 'JavaScript', percentage: 90, icon: <FaJsSquare /> },
  { name: 'React (React Native and React.js)', percentage: 85, icon: <FaReact /> },
  { name: 'Node.js', percentage: 80, icon: <FaNodeJs /> },
  { name: 'CSS', percentage: 75, icon: <FaCss3Alt /> },
  { name: 'Git', percentage: 70, icon: <FaGitAlt /> },
  { name: 'HTML', percentage: 90, icon: <FaHtml5 /> },
  { name: 'MongoDB', percentage: 75, icon: <FaDatabase /> },
  { name: 'SQL', percentage: 70, icon: <FaDatabase /> },
  { name: 'Flutter', percentage: 70, icon: null },
];

const CircularProgressBar = ({ percentage }) => {
  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        stroke="#ddd"
        fill="transparent"
        r={normalizedRadius}
        strokeWidth={stroke}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="url(#gradient)"
        fill="transparent"
        r={normalizedRadius}
        strokeWidth={stroke}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#003366', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00ccff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-card">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-icon circular-motion">{skill.icon}</div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-percentage">{skill.percentage}%</p>
              </div>
              <CircularProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 80px 20px;
          color: white;
          background-color: rgba(0, 0, 0, 0.8);
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }

        .skills-container {
          display: flex;
          justify-content: center;
        }

        .skills-card {
          max-width: 800px;
          width: 100%;
          padding: 20px;
          background-color: black;
          border-radius: 32px;
          border: 2px solid rgba(0, 255, 255, 0.6);
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.5), 0 5px 15px rgba(0, 0, 0, 0.6);
          position: relative;
          z-index: 1;
        }

        .skills-card:hover {
          box-shadow: 0 15px 30px rgba(0, 255, 255, 0.7), 0 8px 20px rgba(0, 0, 0, 0.8);
        }

        .skill-row {
          display: flex;
          align-items: center;
          margin: 15px 0;
          justify-content: space-between;
          padding: 10px;
          border-bottom: 2px solid #00ccff;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          box-shadow: 0 4px 8px rgba(0, 204, 255, 0.5);
        }

        .skill-icon {
          font-size: 2rem;
          margin-right: 15px;
        }

        .circular-motion {
          animation: rotate 5s linear infinite; /* Circular animation */
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .skill-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 1.5rem;
          color: white;
        }

        .skill-percentage {
          font-size: 1.2rem;
          color: white;
          margin-right: 10px;
        }

        @media (max-width: 768px) {
          .skills-card {
            padding: 15px;
          }

          .skill-name {
            font-size: 1.2rem;
          }

          .skill-percentage {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
