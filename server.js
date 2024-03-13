const express = require("express");

const data = { lala: 2, dada: 3 };

console.log(JSON.stringify(data));

const app = express();

const sotreData = [];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.post("https://server-63ql.onrender.com/formPost", (req, res) => {
  res.json(sotreData);
  console.log(req.body);
  sotreData.push(req.body);
  console.log(sotreData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
