const parser = require("../src/parser");
const fs = require("fs");

const source = fs.readFileSync("./time.js", "utf8");

const obj = parser(source);

fs.writeFileSync("./test.json", JSON.stringify(obj, null, 2));

function MD(json) {
  const { description, name, props } = obj;
  const output = `
  # ${name}

  ${description}

  ${Object.keys(props)
    .map(key => {
      return `|${key}|${props[key].declaration}|${props[key].type}|${
        props[key].isRequired
      }|${props[key].defaultValue}|`;
    })
    .join("\n")}
  `;
  return output;
}

fs.writeFileSync("./test.md", MD(obj));
