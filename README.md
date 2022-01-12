# Simple JS App

Just some basics to get started quickly.

* [express](https://expressjs.com/) to serve up `src/index.js` and
  `src/style.css` in a basic web page.
* An API endpoint that returns a JSON response of "Hello World".
* `src/index.js`, which fetches the example data and appends it to the HTML
  document.
* [nodemon](https://github.com/remy/nodemon) and
  [livereload](https://github.com/livereload/livereload-js) to reload the server
  and client on save.
* [prettier](https://github.com/prettier/prettier) to auto-format your code on
  save.
* [jest](https://github.com/facebook/jest) for unit testing, with an example test in `src/index.test.js`.

**Recommended:** Use a language server for basic linting, code navigation, and intellisense. [tsserver](https://github.com/Microsoft/TypeScript/wiki/Standalone-Server-%28tsserver%29) with `enableJavascript` set to `true` works well.

## Usage

### Install

```sh
npm install
```

### Run

Start the server with
```sh
npm start
```
then visit [https://localhost:3000] in your browser. The port can be changed in `server.js` if needed.

### Test

Run the basic tests:
```sh
npm test
```

Run the tests in "watch" mode:
```sh
npm run test-watch
```

Generate a coverage report:
```sh
npm run test-coverage
```
