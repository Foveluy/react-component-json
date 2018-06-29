const { json, md, demo } = require("../src/parser");
const fs = require("fs");

const source = fs.readFileSync("./button.js", "utf8");
const demosrc = fs.readFileSync("./demotest.js", "utf8");

const obj = json(source);

fs.writeFileSync("./test.json", JSON.stringify(obj, null, 2));

fs.writeFileSync("./test.md", md(obj));

const d = demo(demosrc);

fs.writeFileSync("./demo.md", d);
