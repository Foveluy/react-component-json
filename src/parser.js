const babylon = require("babylon");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const signale = require("signale");

function parse(src) {
  const options = {
    babelrc: false,
    sourceType: "module",
    plugins: ["jsx", "objectRestSpread", "classProperties"]
  };

  return babylon.parse(src, options);
}

function ensure(obj, key) {
  if (obj[key] === void 666) {
    obj[key] = {};
  }
}

let has_defaultProps = false;
let has_export_right = false;

const classDoc = {
  description: "",
  props: {},
  name: ""
};

const defaultProps = {};

function nodeComment(node) {
  return node.leadingComments.map(c => c.value).join("\n");
}

const visior = {
  ClassDeclaration: function({ node }) {
    classDoc.name = node.id.name;
    if (node.leadingComments) {
      const comment = nodeComment(node);
      classDoc.description = comment;
    }
  },
  AssignmentExpression: function({ node }) {
    if (node.left.property.name === "propTypes") {
      node.right.properties.forEach(prop => {
        const key = prop.key.name;

        ensure(classDoc.props, key);

        const values = generate(prop.value).code;
        classDoc.props[key].type = values;
        classDoc.props[key].declaration = nodeComment(prop);
        classDoc.props[key].defaultValue = defaultProps[key];
        classDoc.props[key].isRequired = /isRequired/.test(values);
      });
    }
  },
  ClassProperty: function({ node }) {
    if (node.key.name === "defaultProps") {
      has_defaultProps = node.key.name === "defaultProps";
      node.value.properties.forEach(prop => {
        defaultProps[prop.key.name] = prop.value.value;
      });
    }
  },
  ExportDefaultDeclaration: function({ node }) {
    if (node.declaration.name === classDoc.name) {
      has_export_right = true;
    }
  }
};

module.exports = function(src) {
  const ast = parse(src);

  traverse(ast, visior);

  if (!has_defaultProps) {
    signale.fatal(`组件 ${classDoc.name} 没有 defaultProps`);
  }
  if (!has_export_right) {
    signale.fatal(`组件 ${classDoc.name} 没有 export default`);
  }
  return classDoc;
};

// console.log(classDoc);
// console.log(ast);
