import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  return (
    <div className="home-container">

      <div className="home-content">

        <h1>
          AI Career Mentor 🚀
        </h1>

        <p>
          Discover your ideal career path with AI-powered
          skill analysis and personalized learning roadmap.
        </p>


        <div className="home-buttons">

          <Link to="/login">
            <button>
              Login
            </button>
          </Link>


          <Link to="/register">
            <button className="register-btn">
              Register
            </button>
          </Link>

        </div>

      </div>


      <div className="features">

        <h2>
          Features
        </h2>


        <div className="feature-list">

          <div className="card">
            📄 Resume Upload
          </div>


          <div className="card">
            🤖 AI Skill Analysis
          </div>


          <div className="card">
            🎯 Career Recommendation
          </div>


          <div className="card">
            📚 Learning Roadmap
          </div>


          <div className="card">
            💬 Mock Interview
          </div>


          <div className="card">
            📊 Progress Tracker
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;