// wrapper function
// function(__dirname, __filename, module, require, exports){
const http = require("http");
const fs = require("fs");

console.log(__dirname);
console.log(__filename);

const add = require("./calculator");
console.log(add(2, 3));

const hostname = "127.0.0.1";
const port = 3000;

//Router
const server = http.createServer((req, res) => {
  switch (true) {
    case req.url === "/" && req.method === "GET":
      fs.readFile(__dirname + "/home.html", (err, data) => {
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.writeHead(200);
        res.end(data);
      });
      break;
    case req.url === "/login" && req.method === "GET":
      fs.readFile(__dirname + "/login.html", (err, data) => {
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.writeHead(200);
        res.end(data);
      });

      break;
    default:
      fs.readFile(__dirname + "/404.html", (err, data) => {
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.writeHead(404);
        res.end(data);
      });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//}
