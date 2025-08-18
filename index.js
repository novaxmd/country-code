const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Path sahihi ikiwa countries.json ipo ndani ya folder ya api
const countries = require("./api/countries.json");

app.get("/", (req, res) => {
  res.send("Country Code API is running.");
});

app.get("/countries", (req, res) => {
  res.json(countries);
});

app.get("/countries/:code", (req, res) => {
  const code = req.params.code;
  const found = countries.filter(
    (c) => c.calling_code === code || c.code.toLowerCase() === code.toLowerCase()
  );
  if (found.length > 0) {
    res.json(found);
  } else {
    res.status(404).json({ error: "Country not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
