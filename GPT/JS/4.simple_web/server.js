const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const OpenAI = require("openai");
//OpenAI SDK v4에서는 Configuration과 OpenAIApi를 사용하지 않고, 대신 OpenAI 클래스를 직접 사용하여 클라이언트를 초기화합니다.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 환경 변수에서 API 키를 불러옵니다.
});

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/ask", async (req, res) => {
  const question = req.body.question;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: question }],
    });
    const answer = response.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error("Error in fetching response from OpenAI:", error);
    res.status(500).json({ answer: "Error in fetching response from OpenAI" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
