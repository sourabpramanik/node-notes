const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res, next) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      "<html><head><title>First page</title></head><body><h1>Enter message</h1><form method='POST' action='/message'><input type='text' name='message'/><button type='submit'>Send</button></form></body></html>"
    );
    return res.end();
  }
  //   res.setHeader("Content-Type", "text/html");
  //   res.write(
  //     "<html><head><title>First page</title></head><body><h1>Helloooooo world</h1></body></html>"
  //   );
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.doc", "TESTING");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
    // res.write(
    //   "<html><head><title>Message page</title></head><body><h1>Messages</h1></body></html>"
    // );
  }
  res.end();
});

server.listen(8000);
console.log("Listening at http://localhost:8000");
