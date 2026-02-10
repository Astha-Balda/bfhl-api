require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;
const OFFICIAL_EMAIL = "astha0392.be23@chitkara.edu.in";

// Health API
app.get("/health", (req, res) => {
  res.json({
    is_success: true,
    official_email: OFFICIAL_EMAIL
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});