const express = require("express");
const bodyParser = require("body-parser");

const data = { lala: 2, dada: 3 };

console.log(JSON.stringify(data));

const data2 = { lala: 2, dada: 3 };

console.log(JSON.stringify(data2));

const app = express();

const sotreData = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.get("/newData", (req, res) => {
  res.status(200).json(data2);
});

app.post("/receiveData", (req, res) => {
  res.json(sotreData);
  console.log(req.body);
  sotreData.push(req.body);
  console.log(sotreData);
  res.status(200).json({ message: "Form submitted successfully" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
