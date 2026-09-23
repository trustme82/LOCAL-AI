const express = require("express");

const {
  loadModel,
  LLAMA_3_2_1B_INST_Q4_0,
  completion,
  unloadModel
} = require("@qvac/sdk");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let modelId;

async function start() {
  console.log("Loading QVAC model...");

  modelId = await loadModel({
    modelSrc: LLAMA_3_2_1B_INST_Q4_0
  });

  console.log("QVAC model loaded!");
}

app.post("/api/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    if (!prompt) {
      return res.status(400).json({
        error: "Please enter a prompt."
      });
    }

    const result = completion({
      modelId,
      history: [
        {
          role: "user",
          content: prompt
        }
      ],
      stream: true
    });

    const final = await result.final;

    res.json({
      answer: final.contentText
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message
    });
  }
});

process.on("SIGINT", async () => {
  if (modelId) {
    await unloadModel({ modelId });
  }

  process.exit(0);
});

start()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`QVAC app running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start QVAC:", error);
  });
