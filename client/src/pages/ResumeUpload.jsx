import { useState } from "react";
import axios from "axios";
import "./ResumeUpload.css";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    setAnalysis("");
  }

  async function handleUpload() {
    if (!file) {
      alert("Please select your resume ❌");
      return;
    }

    setLoading(true);

   const formData = new FormData();
   formData.append("resume", file);

  try {
    const response = await axios.post(
     "http://localhost:5000/api/ai/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
    },
  }
);

      setAnalysis(response.data.analysis);

      alert("AI Skill Analysis Completed ✅");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("AI Analysis Failed ❌");
      }
    }

    setLoading(false);
  }

  return (
    <div className="resume-container">
      <div className="resume-box">
        <h1>📄 Resume Upload</h1>

        <p>
          Upload your resume and get AI-powered career guidance.
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        {file && (
          <p>
            <strong>Selected File:</strong> {file.name}
          </p>
        )}

        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Resume 🤖"}
        </button>

        {analysis && (
          <div className="analysis-box">
            <h2>🤖 AI Career Report</h2>

            <pre>{analysis}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeUpload;