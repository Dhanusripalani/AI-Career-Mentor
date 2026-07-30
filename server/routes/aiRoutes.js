const express = require("express");
const OpenAI = require("openai");
const multer = require("multer");
const pdfParse = require("pdf-parse");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

router.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "Please upload a resume.",
      });
    }

    // Extract text from PDF
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    const completion = await client.chat.completions.create({
      model: "nvidia/nemotron-3-ultra-550b-a55b:free",
      messages: [
        {
          role: "system",
          content:
            "You are an AI Career Mentor. Analyze resumes and provide career guidance.",
        },
        {
          role: "user",
          content: `
Analyze the following resume.

Give:
1. Skills Found
2. Missing Skills
3. Career Recommendations
4. Learning Roadmap
5. Interview Preparation Tips

Resume:
${resumeText}
`,
        },
      ],
    });

    res.json({
      analysis: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI Analysis Failed",
    });
  }
});

module.exports = router;