const express = require("express");
const router = express.Router();
const { analyzeText } = require("../controllers/analysisController");
const auth = require("../middleware/auth");

router.post("/", auth, analyzeText);

module.exports = router;
