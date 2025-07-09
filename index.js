const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const countries = [
  { name: "Tanzania", code: "TZ", calling_code: "255" },
  { name: "Kenya", code: "KE", calling_code: "254" },
  { name: "Uganda", code: "UG", calling_code: "256" },
  { name: "Nigeria", code: "NG", calling_code: "234" },
  { name: "South Africa", code: "ZA", calling_code: "27" },
  { name: "India", code: "IN", calling_code: "91" },
  { name: "USA", code: "US", calling_code: "1" },
  { name: "UK", code: "GB", calling_code: "44" },
  { name: "Germany", code: "DE", calling_code: "49" },
  { name: "China", code: "CN", calling_code: "86" },
  { name: "France", code: "FR", calling_code: "33" }
];

app.get('/country/:code', (req, res) => {
  const code = req.params.code.replace(/\+/g, '');
  const result = countries.filter(c => c.calling_code === code);
  if (result.length === 0) {
    return res.status(404).json({ error: "No country found" });
  }
  return res.json({ code, countries: result });
});

app.get('/', (req, res) => {
  res.send("Welcome to Country Code API 🚀");
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
