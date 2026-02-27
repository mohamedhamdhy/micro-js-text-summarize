const { HfInference } = require("@huggingface/inference");
const Analysis = require("../models/analysisModel");
const hf = new HfInference(process.env.HF_API_KEY);

exports.analyzeText = async (req, res) => {
  const { type, text } = req.body;
  if (!type || !text)
    return res.status(400).json({ message: "Type and text are required" });

  try {
    let result = "";

    if (type === "summarize") {
      const response = await hf.summarization({
        model: "facebook/bart-large-cnn",
        inputs: text,
      });
      result = Array.isArray(response)
        ? response[0].summary_text
        : response.summary_text;
    } else if (type === "sentiment") {
      const response = await hf.textClassification({
        model: "distilbert-base-uncased-finetuned-sst-2-english",
        inputs: text,
      });
      result = Array.isArray(response) ? response[0].label : response.label;
    } else {
      return res.status(400).json({ message: "Invalid analysis type" });
    }

    const analysis = await Analysis.create({
      user_id: req.user.id,
      type,
      input_text: text,
      result_text: result,
    });

    res.json({ analysis });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error analyzing text" });
  }
};
