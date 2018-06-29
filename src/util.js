const babylon = require("babylon");

exports.parse = function parse(src) {
  const options = {
    babelrc: false,
    sourceType: "module",
    plugins: ["jsx", "objectRestSpread", "classProperties"]
  };

  return babylon.parse(src, options);
};

exports.nodeComment = function nodeComment(node) {
  if (!node.leadingComments) return "";

  return node.leadingComments
    .map(c => c.value)
    .join("\n")
    .replaceAll(/\**/, "")
    .replaceAll(/\n/, "<br/>");
};
