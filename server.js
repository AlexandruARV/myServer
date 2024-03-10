const http = require("http");

const data = { lala: 2, dada: 3 };

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(data.json());
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running on port 3000`));
