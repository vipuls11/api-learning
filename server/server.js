const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000;

app.use = cors();

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("https://api.covid19india.org/data.json");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
