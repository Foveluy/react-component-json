const babylon = require("babylon");

function parse(src) {
  const options = {
    babelrc: false,
    sourceType: "module",
    plugins: ["jsx", "objectRestSpread", "classProperties"]
  };

  return babylon.parse(src, options);
}
