import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/AshalAnsari" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github" />
            <span style={{ padding: '12px' }}>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ashal-ansari-3a3a731b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
            <span style={{ padding: '12px' }}>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/ashal_ansari1/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram" />
            <span style={{ padding: '12px' }}>Instagram</span>
          </a>
        </div>
        <div className="contact-info">
          <p>Email: <a href="mailto:ashalansari7398@gmail.com">ashalansari7398@gmail.com</a></p>
          <p>Phone: <a href="tel:+923342652039">+92 3342652039</a></p>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Ashal Ansari. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .footer-section {
          padding: 40px 20px;
          // background: linear-gradient(90deg, rgba(14,127,223,1) 19%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 80%);
          background:black;
          color: white;
          text-align: center;
          border-top-left-radius: 90px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 20px;
        }

        .social-icons a {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          transition: transform 0.3s;
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 10px;
          transition: color 0.3s, transform 0.3s;
        }

        .github:hover {
          color: #4078c0;
          transform: scale(1.1);
        }

        .linkedin:hover {
          color: #0e76a8;
          transform: scale(1.1);
        }

        .instagram:hover {
          color: #bc2a8d;
          transform: scale(1.1);
        }

        .contact-info {
          margin-top: 20px;
        }

        .contact-info p {
          margin: 5px 0;
          font-size: 1rem;
        }

        .contact-info a {
          color: #ccc;
          text-decoration: none;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        .footer-text {
          margin-top: 10px;
          font-size: 1rem;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .icon {
            font-size: 2.5rem;
          }

          .footer-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
}
