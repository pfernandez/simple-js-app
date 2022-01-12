import { createServer as livereload } from "livereload"
import express from "express"

const server = express(),
  path = "src",
  port = 3000

server.use(express.static(path))

server.get("/data", (_, res) => res.send({ message: "Hello World" }))

server.get("/", (_, res) =>
  res.send(`
  <!doctype html>
  <html>
    <head>
      <link rel="icon" href="data:x-icon">
      <link rel="stylesheet" href="style.css">
      <script src="//localhost:35729/livereload.js"></script>
    </head>
    <body>
      <div id='root'></div>
      <script type="module" src="index.js"></script>
    </body>
  </html>
`)
)

server.listen(port, () => console.log(`Running at http://localhost:${port}`))

livereload().watch(path)
