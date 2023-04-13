import express from "express";
import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Open api configuration
const openai = new OpenAIApi(
  new Configuration({
    organization: "org-3WIFLxjWGad7h65pjcJbTjvr",
    apiKey: process.env.API_KEY,
  })
);

app.get("/", (req, res) => {
  res.send("Hey! we are live");
});

app.post("/chat", async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: req.body.input,
        },
      ],
    });

    res.status(200).send(response.data.choices);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/createImage", async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: req.body.input,
      n: 1,
      size: "256x256",
    });

    res.status(200).send(response.data.data[0].url);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000 ...");
});
