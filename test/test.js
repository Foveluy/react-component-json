const { json, md } = require("../src/parser");
const fs = require("fs");

const source = fs.readFileSync("./time.js", "utf8");

const obj = json(source);

fs.writeFileSync("./test.json", JSON.stringify(obj, null, 2));

fs.writeFileSync("./test.md", md(obj));
