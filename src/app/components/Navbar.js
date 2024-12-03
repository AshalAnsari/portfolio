import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a> {/* Added Education section */}
      {/* <a href="#contact">Contact Us</a> */}

      <style jsx>{`
        /* Navbar styling */
        .navbar {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          padding: 10px 20px;
          background: linear-gradient(45deg, #43cea2 0%, #185a9d 100%);
          border-radius: 50px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .navbar:hover {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.9);
        }

        /* Navbar links */
        .navbar a {
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 30px;
          background: rgb(14, 223, 172);
          background: linear-gradient(90deg, rgba(14, 223, 172, 1) 0%, rgba(2, 0, 36, 1) 0%);
          transition: background-color 0.3s ease;
          font-weight: bold;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Added shadow to mimic card effect */
        }

        /* Hover effect */
        .navbar a:hover {
          background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 51%, rgba(233, 19, 19, 1) 66%, rgba(0, 212, 255, 1) 74%);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navbar {
            top: 10px;
            display: flex;
            width: 100%;
            border-radius: 0px;
            background: rgb(14, 223, 172);
            flex-direction: column;
            gap: 10px;
            padding: 10px;
          }

          .navbar a {
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            width: 90%;
            left: 5%;
            transform: translateX(0); /* Don't need centering here */
            padding: 5px;
          }

          .navbar a {
            padding: 8px 12px;
            font-size: 14px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
