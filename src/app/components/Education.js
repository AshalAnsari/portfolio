import React from 'react';

const educationData = [
  {
    institution: 'University of Karachi',
    degree: 'Bachelor of Science in Computer Science',
    year: '2021 - 2025',
    description: 'Focused on software development and web technologies.',
  },
  {
    institution: 'Adler College',
    degree: 'Intermediate',
    year: '2019 - 2021',
    description: 'Studied sciences and mathematics with honors.',
  },
  // Add more educational experiences as needed
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-card">
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-details">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.year}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-section {
          padding: 80px 20px;
          color: white;
          background-color: rgba(0, 0, 0, 0.8);
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }

        .education-card {
          background: black;
          border-radius: 15px;
          border: 4px solid rgba(0, 255, 255, 0.7);
          box-shadow: 0 15px 30px rgba(0, 255, 255, 0.6),
            0 8px 20px rgba(0, 0, 0, 0.8);
          padding: 20px;
          transition: box-shadow 0.3s ease-in-out;
        }

        .education-card:hover {
          transform: scale(0.9);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.9);
        }

        .education-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .education-item {
          flex: 1 1 calc(50% - 20px);
          min-width: 280px;
        }

        .education-details {
          background: rgba(0, 255, 255, 0.1);
          border-radius: 10px;
          padding: 20px;
          transition: background 0.3s ease;
        }

        .education-details:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        h3 {
          color: #fff;
          margin-bottom: 10px;
        }

        h4 {
          color: #ccc;
          margin-bottom: 8px;
        }

        p {
          color: #bbb;
          margin: 10px 0;
        }

        @media (max-width: 768px) {
          .education-container {
            flex-direction: column;
          }

          .education-item {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
