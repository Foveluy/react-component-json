const { json, md, demo } = require("../src/parser");
const fs = require("fs");

const source = fs.readFileSync("./test/button.js", "utf8");
const demosrc = fs.readFileSync("./test/demotest.js", "utf8");

const obj = json(source);

fs.writeFileSync("./test/test.json", JSON.stringify(obj, null, 2));

fs.writeFileSync("./test/test.md", md(obj));

const d = demo(demosrc);

fs.writeFileSync("./test/demo.md", d);
