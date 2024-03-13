// const http = require("http");

// const data = { lala: 2, dada: 3 };

// console.log(JSON.stringify(data));

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log(`server is running on port 3000`));

const express = require("express");

const data = { lala: 2, dada: 3 };

console.log(JSON.stringify(data));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "");
  res.setHeader("Access-Control-Allow-Methods", "");
  next();
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
