const parser = require("../src/parser");
const fs = require("fs");

const source = fs.readFileSync("./time.js", "utf8");

const obj = parser(source);

fs.writeFileSync("./test.json", JSON.stringify(obj, null, 2));
