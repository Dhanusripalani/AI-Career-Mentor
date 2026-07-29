const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

router.post("/analyze", async (req, res) => {
  try {
    const { resumeText } = req.body;

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
    
    console.log(JSON.stringify(completion, null, 2));
    res.json({
      analysis: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenRouter Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;