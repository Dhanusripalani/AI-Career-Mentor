import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUserName(user.name);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Logout Successful 👋");

    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome {userName} 👋</h1>

      <p>Track your career growth with AI guidance</p>

      <div className="dashboard-cards">
        {/* Resume Upload */}

        <div className="dashboard-card">
          <h2>📄 Resume Upload</h2>

          <p>Upload your resume for AI skill analysis</p>

          <Link to="/resume-upload">
            <button>Upload Resume</button>
          </Link>
        </div>

        {/* AI Skill Analysis */}

        <div className="dashboard-card">
          <h2>🤖 AI Skill Analysis</h2>

          <p>Find your strengths and missing skills</p>

          <Link to="/resume-upload">
            <button>Analyze Skills</button>
          </Link>
        </div>

        {/* Career Recommendation */}

        <div className="dashboard-card">
          <h2>🎯 Career Recommendation</h2>

          <p>Get suitable career suggestions</p>

          <Link to="/career">
            <button>View Careers</button>
          </Link>
        </div>

        {/* Learning Roadmap */}

        <div className="dashboard-card">
          <h2>📚 Learning Roadmap</h2>

          <p>Follow your personalized learning plan</p>

          <Link to="/roadmap">
            <button>View Roadmap</button>
          </Link>
        </div>

        {/* Mock Interview */}

        <div className="dashboard-card">
          <h2>💬 Mock Interview</h2>

          <p>Practice interview questions</p>

          <Link to="/mock">
            <button>Start Practice</button>
          </Link>
        </div>

        {/* Progress Tracker */}

        <div className="dashboard-card">
          <h2>📊 Progress Tracker</h2>

          <p>Monitor your learning progress</p>

          <Link to="/progress">
            <button>View Progress</button>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;