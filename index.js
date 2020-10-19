// wrapper function
// function(__dirname, __filename, module, require, exports){

console.log(__dirname);
console.log(__filename);

const add = require("./calculator");
console.log(add(2, 3));

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

//Router
const server = http.createServer((req, res) => {
  switch (true) {
    case req.url === "/" && req.method === "GET":
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.writeHead(200);
      res.end('<h1>Login Page</h1> <a href="/login">Cover Page</a>');
      break;
    case req.url === "/login" && req.method === "GET":
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.writeHead(200);
      res.end('<h1>Cover Page</h1>  <a href="/">Login</a>');
      break;
    default:
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.writeHead(404);
      res.end("Page not found!!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//}
