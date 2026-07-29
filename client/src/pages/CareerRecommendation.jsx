import "./Dashboard.css";

function CareerRecommendation() {
  const careers = [
    {
      title: "Frontend Developer",
      match: "95%",
      skills: "HTML, CSS, JavaScript, React",
      description: "Build attractive and responsive websites using modern frontend technologies."
    },
    {
      title: "Backend Developer",
      match: "88%",
      skills: "Node.js, Express.js, MongoDB",
      description: "Develop server-side applications and APIs."
    },
    {
      title: "Full Stack Developer",
      match: "92%",
      skills: "React, Node.js, MongoDB",
      description: "Work on both frontend and backend development."
    },
    {
      title: "AI Engineer",
      match: "70%",
      skills: "Python, Machine Learning, AI",
      description: "Build AI and Machine Learning applications."
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>🎯 Career Recommendations</h1>

      <p>Based on your AI Skill Analysis</p>

      <div className="dashboard-cards">
        {careers.map((career, index) => (
          <div className="dashboard-card" key={index}>
            <h2>{career.title}</h2>

            <h3>⭐ Match Score: {career.match}</h3>

            <p>
              <strong>Required Skills:</strong>
            </p>

            <p>{career.skills}</p>

            <p>{career.description}</p>

            <button>Explore Career</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerRecommendation;